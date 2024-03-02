import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet,Text } from 'react-native';

const IPInput = ({ navigation }) => {
  const [ipAddress, setIpAddress] = useState('');

  const handleInputChange = (text) => {
    setIpAddress(text);
  };

  const isValidIpAddress = (ip) => {
    // Implement your IP address validation logic here
    return /^(\d{1,3}\.){3}\d{1,3}$/.test(ip);
  };

  const handleSubmit = () => {
    if (isValidIpAddress(ipAddress)) {
      navigation.navigate('Home', { ipAddress });
    } else {
      alert('Please enter a valid IP address');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.txt}> Enter IP Address of Device</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleInputChange}
        value={ipAddress}
        placeholder="Enter IP address"
        keyboardType="numeric"
      />
      <Button  title="Submit IP" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#000'
  },
  txt:{
    fontSize: 18  ,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 50,
  },
  input: {
    height: 60,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 10
  },
  btn:{
    width:150,
    height:50
  }
});

export default IPInput;