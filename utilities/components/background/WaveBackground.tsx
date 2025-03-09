import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const WaveBackground = () => {
  return (
    <View style={styles.container}>
      <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={styles.svg}>
        <Path
          fill="#0099ff"
          fillOpacity="1"
          d="M0,32L34.3,74.7C68.6,117,137,203,206,202.7C274.3,203,343,117,411,69.3C480,21,549,11,617,21.3C685.7,32,754,64,823,101.3C891.4,139,960,181,1029,213.3C1097.1,245,1166,267,1234,240C1302.9,213,1371,139,1406,101.3L1440,64L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  svg: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: 90, // Adjust as needed
  },
});

export default WaveBackground;
