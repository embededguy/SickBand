import React, { useEffect, useRef, useState } from 'react';
import {
  Animated,
  Platform,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button
} from 'react-native';
import { Component } from 'react';
import Speedometer from 'react-native-speedometer-chart';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

const Home = ({ route }) => {
  const { ipAddress } = route.params;
  const [temperature, setTemperature] = useState(0);
  const [BPM, setBPM] = useState(0);
  const [SpO2, setSpO2] = useState(0);
  const [ecgData, setEcgData] = useState([0,0,0,0,0,0,0,0,0,0]);
  const [collectedDataCount, setCollectedDataCount] = useState(0);
  const datax = {
    labels: ["1", "2", "3", "4", "5", "6","7","8","9","10"],
    datasets: [
      {
        data: ecgData,
        color: (opacity = 1) => `rgba(50, 50, 244, ${opacity})`, // optional
        strokeWidth: 2 // optional
      }
    ],
    legend: ["ECG"] // optional
  };
  

  useEffect(() => {
    // Fetch data initially
    fetchData();

    // Set up interval to fetch data every 1 second
    const intervalId = setInterval(fetchData, 1000);

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const fetchData = async () => {
    try {
      const response0 = await fetch(`http://${ipAddress}/temperature`);
      const data0 = await response0.text(); // Get response as plain text
      if(isNaN(parseFloat(data0))){
        setTemperature(0.0); // Convert text to number and set temperature

      }else{
        setTemperature(parseFloat(data0)); // Convert text to number and set temperature
      }

      const response1 = await fetch(`http://${ipAddress}/ph`);
      const data1 = await response1.text(); // Get response as plain text
      setBPM(parseFloat(data1)); // Convert text to number and set temperature

      const response2 = await fetch(`http://${ipAddress}/soil`);
      const data2 = await response2.text(); // Get response as plain text
      setSpO2(parseFloat(data2)); // Convert text to number and set temperature

      const response3 = await fetch(`http://${ipAddress}/water`);
      const data3 = await response3.text(); // Get response as plain text
      setEcgData(prevData => {
        // Ensure that the array has a minimum length of 6
        const newData = ecgData.length >= 1 ? prevData.slice(1) : prevData;
        return [...newData, parseInt(data3)];
      });

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Hydrophonics Dashboard</Text>
      <Row>
      <Text style={styles.txt}>Soil Moisture ( {temperature}% )</Text>
      <Text style={styles.txt}>Water Level ( {BPM}% )</Text>
      </Row>
      <Row>
        <Speedometer value={temperature} size={150} totalValue={100} innerColor="#000" showIndicator showLabels text="50.00" text="Temperature"/>
        <Speedometer value={BPM} size={150} totalValue={100} innerColor="#000" showIndicator showLabels text="50.00" text="Temperature"/>
      </Row>
      <Row>
      </Row>
      <Text style={styles.txt}>PH ( {SpO2} )</Text>
      <Row>
        <Speedometer value={SpO2} totalValue={7} innerColor="#000" internalColor="#00aaff" showIndicator showLabels text="50.00" text="Temperature"/>
      </Row>
      <Row>
              <Text style={styles.txt3}>Pump Status: ON</Text>
      <Text style={styles.txt3}>Light Status: OFF</Text>

      </Row>
      <Row>
        <Button title="Pump Toggle"/>
      </Row>
      <Text style={styles.txt}>(connected to {ipAddress})</Text>
      <Text style={styles.txt2}>Powered By Vhiron Technologies</Text>

    </SafeAreaView>
  );
};

const Row = ({ children }) => (
  <View style={styles.row}>{children}</View>
);


const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false // optional
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 0,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 20,

  },
  txt:{
    fontSize: 12,
    textAlign: 'center',
  },
  txt3:{
    fontSize: 15,
    fontWeight:'bold',
    textAlign: 'center',
  },
  txt2:{
    fontSize: 12,
    position:'absolute',
    textAlign: 'center',
    bottom:10,
    marginLeft:100
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: 50,
    marginTop: 15,
    marginBottom: 15,
    padding: 0
  },
  
  speedometerLabel: {
    textAlign: 'center',
    marginTop: 0,
  },
});

export default Home;