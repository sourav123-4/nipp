import React from 'react';
import {Dimensions} from 'react-native';
import {View, ScrollView} from 'native-base';
import {
  CommonInput,
  Card,
  Heading,
  CommonTabView,
  BottomView,
} from '../../common';

export const Food = ({navigation}) => {
  const data = [
    {
      heading: 'Cereal & Milk',
      text: '147 Kcal',
    },
    {
      heading: 'Cupcakes & Milk',
      text: '345 Kcal',
    },
    {
      heading: 'Vegetable Soup',
      text: '732 Kcal',
    },
    {
      heading: 'Green Salad',
      text: '189 Kcal',
    },
  ];

  const FirstRoute = () => {
    return (
      <Card navigation={navigation} data={data} navigationPage="FoodDetails" />
    );
  };

  return (
    <View height="100%" position="relative">
      <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
        <View
          paddingBottom={0}
          marginBottom={20}
          paddingLeft={3}
          paddingRight={3}
          paddingTop={3}
          padding={3}
          bgColor={'#FAFAFA'}
          height={Dimensions.get('window').height}>
          <CommonInput name="Search" />
          <Heading
            headingTitle={'Your Recipes'}
            headingtext={'Explore your personalized options'}
          />
          <CommonTabView
            navigation={navigation}
            FirstRoute={FirstRoute}
            SecondRoute={FirstRoute}
            ThirdRoute={FirstRoute}
            title1="Breakfast"
            title2="Lunch"
            title3="Dinner"
          />
        </View>
      </ScrollView>
      <View position="absolute" bottom={0} width="100%">
        <BottomView Navigation={navigation} name="Food" />
      </View>
    </View>
  );
};
