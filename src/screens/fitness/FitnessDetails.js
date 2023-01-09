import React from 'react';
import {View} from 'native-base';
import {BottomView, Details} from '../../common';

export const FitnessDetails = ({navigation}) => {
  const data = [
    {
      heading: `Description`,
      desc1: `Maecenas vel orci vel orci bibendum mollis at non metus. Quisque aliquet velit sodales ligula vul. Vestibulum ante faucibus orci luctus et ultrices posuere cubilia.`,
      desc2: `In vel augue sed nulla rhoncus facilisis. Proin sed cursus tellus. Morbi imperdiet sodales nisl, at auctor dolor.`,
    },
  ];

  const itemData = [
    {
      title: 'Reps',
      weight: 234,
    },
    {
      title: 'Sets',
      weight: 21,
    },
    {
      title: 'Time',
      weight: 87,
    },
    {
      title: 'Level',
      weight: 782,
    },
  ];
  return (
    <View height="100%" position="relative">
      <Details
        name={'Name of trainer'}
        data={itemData}
        heading={data[0].heading}
        desc1={data[0].desc1}
        desc2={data[0].desc2}
      />
      <View position="absolute" bottom={0} width="100%">
        <BottomView Navigation={navigation} name="Fitness" />
      </View>
    </View>
  );
};
