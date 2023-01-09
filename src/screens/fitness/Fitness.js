import React from 'react';
import {ScrollView, View} from 'native-base';
import {CommonInput, Card, Heading, BottomView} from '../../common';
import {SafeAreaView} from 'react-native-safe-area-context';

export const Fitness = ({navigation}) => {
  const data = [
    {
      heading: 'Category',
      text: 'Name of exercise',
    },
    {
      heading: 'Category',
      text: 'Name of exercise',
    },
    {
      heading: 'Category',
      text: 'Name of exercise',
    },
    {
      heading: 'Category',
      text: 'Name of exercise',
    },
    {
      heading: 'Category',
      text: 'Name of exercise',
    },
  ];

  return (
    <View height="100%" position="relative">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View padding={3} marginTop={2} marginBottom={20}>
          <CommonInput name="Search" />
          <Heading
            headingTitle={'Your Fitness Regiment'}
            headingtext={'Explore your personalized options'}
          />
          <Card
            navigation={navigation}
            data={data}
            navigationPage="FitnessDetails"
          />
        </View>
      </ScrollView>
      <View position="absolute" bottom={0} width="100%">
        <BottomView Navigation={navigation} name="Fitness" />
      </View>
    </View>
  );
};
