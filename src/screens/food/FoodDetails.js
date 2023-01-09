import React from 'react';
import {View} from 'native-base';
import {BottomView, Details} from '../../common';

export const FoodDetails = ({navigation}) => {
  const data = [
    {
      heading: `Description`,
      desc1: `In vel augue sed nulla rhoncus facilisis. Proin sed cursus tellus. Morbi imperdiet sodales nisl, at auctor dolor.`,
    },
  ];

  const itemData = [
    {
      title: 'Protein',
      weight: '234g',
    },
    {
      title: 'Fat',
      weight: '21g',
    },
    {
      title: 'Carbs',
      weight: '87g',
    },
    {
      title: 'Calories',
      weight: 782,
    },
  ];
  return (
    <View height="100%" position="relative">
      <Details
        name={'Name of Dish'}
        data={itemData}
        heading={data[0].heading}
        desc1={data[0].desc1}
      />
      <View position="absolute" bottom={0} width="100%">
        <BottomView Navigation={navigation} name="Food" />
      </View>
    </View>
  );
};
