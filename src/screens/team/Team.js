import React from 'react';
import {Dimensions} from 'react-native';
import {View} from 'native-base';
import {Card, Heading, BottomView} from '../../common';

export const Team = ({navigation}) => {
  const {height} = Dimensions.get('window');

  const data = [
    {
      heading: 'Role',
      text: 'First Name Last Name',
    },
    {
      heading: 'Role',
      text: 'First Name Last Name',
    },
    {
      heading: 'Role',
      text: 'First Name Last Name',
    },
  ];

  return (
    <View height="100%" position="relative">
      <View padding={3} bgColor="#FAFAFA">
        <Heading
          headingTitle={'Discover Your Team'}
          headingtext={'Your integrated wellnes team.'}
        />
        <Card
          navigation={navigation}
          data={data}
          navigationPage="TeamDetails"
        />
      </View>
      <View position="absolute" bottom={0} width="100%">
        <BottomView Navigation={navigation} name="Team" />
      </View>
    </View>
  );
};
