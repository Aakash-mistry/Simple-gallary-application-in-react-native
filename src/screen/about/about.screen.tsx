import React from 'react';
import {View, Text, Linking} from 'react-native';
import MACIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const About: React.FC = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 25}}>Developed, Designed - Mistry Aakash</Text>
      <View style={{flexDirection: 'row'}}>
        <MACIcon
          onPress={() => Linking.openURL('https://github.com/Aakash-mistry')}
          name="github"
          size={35}
          color="#24292e"
          style={{margin: 10}}
        />
        <MACIcon
          onPress={() =>
            Linking.openURL('https://www.facebook.com/Akshmistry001')
          }
          name="facebook"
          size={35}
          color="#4267B2"
          style={{margin: 10}}
        />
      </View>
    </View>
  );
};

export default About;
