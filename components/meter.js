import * as React from 'react';
import Svg, {Defs, ClipPath, Path, G, Text, TSpan} from 'react-native-svg';

export function Meter({progressValue, fillColor}) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={300}
      height={100}
      viewBox="20 0 800 438.027">
      <Defs>
        <ClipPath id="clip-path">
          <Path
            id="Path_286820"
            data-name="Path 286820"
            d="M13.1,4.5a13.25,13.25,0,0,1,0,26.5,13.25,13.25,0,0,1,0-26.5Z"
            transform="translate(0 -4.496)"
            fill="#f58220"
            clipRule="evenodd"
          />
        </ClipPath>
      </Defs>
      <G
        id="Group_287636"
        data-name="Group 287636"
        transform="translate(-7611.875 -9013.5)">
        <Path
          id="Path_286814"
          data-name="Path 286814"
          d="M179,0A179,179,0,0,1,358,179c0-.883-356.346-2.133-358,0A179,179,0,0,1,179,0Z"
          transform="translate(7868 9269)"
          fill="#fff"
        />
        <Path
          id="Path_286814_-_Outline"
          data-name="Path 286814 - Outline"
          d="M179,9C88.437,9,14.186,80.191,9.26,169.544c15.985-.72,49.28-.72,121.141-.72,142.109,0,196.64.166,218.36,1.088C344.02,80.384,269.689,9,179,9m0-9A179,179,0,0,1,358,179c0-.883-356.346-2.133-358,0A179,179,0,0,1,179,0Z"
          transform="translate(7868 9269)"
          fill="#91d9ae"
        />
        {/* path for component of 8 starts here */}
        <Path
          id="Path_286804"
          data-name="Path 286804"
          d="M210.99,304.292,406.382,162.328A433.911,433.911,0,0,0,189.9,4.944l-74.635,229.7a192.364,192.364,0,0,1,95.727,69.647"
          transform="translate(7991.34 9032.169)"
          fill={progressValue === 7 || progressValue === 8 ? fillColor : '#fff'}
        />
        <Path
          id="Path_286804_-_Outline"
          data-name="Path 286804 - Outline"
          d="M210.44,307.782l-1.47-2.018a191.108,191.108,0,0,0-94.481-68.742l-2.375-.774L188.293,1.794l2.377.772a434.231,434.231,0,0,1,63.755,26.495A436.921,436.921,0,0,1,312.594,64.9,437.986,437.986,0,0,1,408.4,160.857l1.472,2.023Zm-92.032-74.725a193.442,193.442,0,0,1,51.913,27.012,195.313,195.313,0,0,1,41.207,40.742l191.354-139.03C350.231,90.334,275.331,35.881,191.5,8.1Z"
          transform="translate(7991.34 9032.169)"
          fill="#e6e6e6"
        />
        {/* path for component of 8 ends here */}

        {/* path for component of 10 starts here */}
        <Path
          id="Path_286805"
          data-name="Path 286805"
          d="M174.367,296.324h241.41A431.056,431.056,0,0,0,333.075,41.8l-195.4,141.959a190.555,190.555,0,0,1,36.688,112.566"
          transform="translate(8064.651 9152.703)"
          fill={
            progressValue === 9 || progressValue === 10 ? fillColor : '#fff'
          }
        />
        <Path
          id="Path_286805_-_Outline"
          data-name="Path 286805 - Outline"
          d="M418.277,298.824H171.867v-2.5A187.5,187.5,0,0,0,135.658,185.23l-1.474-2.023,199.442-144.9,1.47,2.02a437.432,437.432,0,0,1,35.06,56.861A434.408,434.408,0,0,1,396.3,159.4a434.785,434.785,0,0,1,21.979,136.928Zm-241.426-5H413.27a427.189,427.189,0,0,0-80.752-248.53L141.161,184.319a193.737,193.737,0,0,1,25.876,51.031A192.89,192.89,0,0,1,176.851,293.824Z"
          transform="translate(8064.651 9152.703)"
          fill="#e6e6e6"
        />
        {/* path for component of 10 ends here */}

        {/* path for component of 6 starts here */}
        <Path
          id="Path_286806"
          data-name="Path 286806"
          d="M203.9,241.406a190.823,190.823,0,0,1,59.206,9.4l74.631-229.7a434.752,434.752,0,0,0-267.674,0l74.631,229.7a190.823,190.823,0,0,1,59.206-9.4"
          transform="translate(7843.44 9016)"
          fill={progressValue === 5 || progressValue === 6 ? fillColor : '#fff'}
        />
        <Path
          id="Path_286806_-_Outline"
          data-name="Path 286806 - Outline"
          d="M264.707,253.961l-2.379-.775a188.584,188.584,0,0,0-116.863,0l-2.379.775L66.91,19.508l2.378-.772a437.252,437.252,0,0,1,269.218,0l2.378.772ZM203.9,238.906a193.356,193.356,0,0,1,57.6,8.767L334.581,22.726a432.307,432.307,0,0,0-261.368,0L146.3,247.673A193.356,193.356,0,0,1,203.9,238.906Z"
          transform="translate(7843.44 9016)"
          fill="#e6e6e6"
        />
        {/* path for component of 6 ends here */}

        {/* path for component of 2 starts here */}
        <Path
          id="Path_286807"
          data-name="Path 286807"
          d="M278.094,183.762,82.7,41.8A431.03,431.03,0,0,0,0,296.327H241.406a190.535,190.535,0,0,1,36.688-112.566"
          transform="translate(7614.375 9152.699)"
          fill={
            progressValue === 0 || progressValue === 1 || progressValue === 2
              ? fillColor
              : '#fff'
          }
        />
        <Path
          id="Path_286807_-_Outline"
          data-name="Path 286807 - Outline"
          d="M243.906,298.827H-2.5v-2.5a433.8,433.8,0,0,1,83.181-256l1.47-2.02,199.438,144.9-1.474,2.023a187.48,187.48,0,0,0-36.208,111.093Zm-241.4-5H238.922a192.983,192.983,0,0,1,35.69-109.505L83.259,45.293A427.169,427.169,0,0,0,2.507,293.827Z"
          transform="translate(7614.375 9152.699)"
          fill="#e6e6e6"
        />
        {/* path for component of 2 ends here */}

        {/* path for component of 4 starts here */}
        <Path
          id="Path_286808"
          data-name="Path 286808"
          d="M310.485,234.641,235.849,4.945A433.886,433.886,0,0,0,19.366,162.329L214.758,304.288a192.364,192.364,0,0,1,95.727-69.647"
          transform="translate(7677.711 9032.173)"
          fill={progressValue === 3 || progressValue === 4 ? fillColor : '#fff'}
        />
        <Path
          id="Path_286808_-_Outline"
          data-name="Path 286808 - Outline"
          d="M215.308,307.779,15.872,162.881l1.472-2.023a437.154,437.154,0,0,1,153.978-131.8A434.26,434.26,0,0,1,235.077,2.567l2.377-.772,76.18,234.449-2.375.774a191.107,191.107,0,0,0-94.481,68.742Zm-192.442-146L214.22,300.808a194.883,194.883,0,0,1,93.12-67.755L234.246,8.1C150.413,35.883,75.512,90.336,22.866,161.782Z"
          transform="translate(7677.711 9032.173)"
          fill="#e6e6e6"
        />
        {/* path for component of 4 ends here */}

        <Text
          id="_2"
          data-name={2}
          transform="translate(7768.309 9360.192) rotate(-81)"
          fontSize={45}
          fontWeight={300}
          letterSpacing="-0.002em">
          <TSpan x={-12.87} y={0}>
            {'2'}
          </TSpan>
        </Text>
        <Text
          id="_10"
          data-name={10}
          transform="translate(8326.489 9358.106) rotate(81)"
          fontSize={45}
          fontWeight={300}
          letterSpacing="-0.002em">
          <TSpan x={-20.385} y={0}>
            {'10'}
          </TSpan>
        </Text>
        <Text
          id="_4"
          data-name={4}
          transform="translate(7878.96 9213.225) rotate(-45)"
          fontSize={45}
          fontWeight={300}
          letterSpacing="-0.002em">
          <TSpan x={-13.793} y={0}>
            {'4'}
          </TSpan>
        </Text>
        <Text
          id="_8"
          data-name={8}
          transform="translate(8215.04 9213.225) rotate(45)"
          fontSize={45}
          fontWeight={300}
          letterSpacing="-0.002em">
          <TSpan x={-14.04} y={0}>
            {'8'}
          </TSpan>
        </Text>
        <Text
          id="_6"
          data-name={6}
          transform="translate(8047.399 9153.418)"
          fontSize={45}
          fontWeight={300}
          letterSpacing="-0.002em">
          <TSpan x={-14.153} y={0}>
            {'6'}
          </TSpan>
        </Text>
      </G>
    </Svg>
  );
}