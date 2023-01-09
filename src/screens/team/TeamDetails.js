import React from 'react';
import {View, Text} from 'native-base';
import {BottomView, Details} from '../../common';

export const TeamDetails = ({navigation}) => {
  const data = [
    {
      heading: `Biography`,
      desc1: `Maecenas vel orci vel orci bibendum mollis at non metus. Quisque aliquet velit sodales ligula vul. Vestibulum ante faucibus orci luctus et ultrices posuere cubilia.`,
      desc2: `In vel augue sed nulla rhoncus facilisis. Proin sed cursus tellus.Morbi imperdiet sodales nisl, at auctor dolor.`,
    },
  ];
  return (
    <View bgColor="#FAFAFA" height="100%" position="relative">
      <Details
        name={'First Name Last Name'}
        heading={data[0].heading}
        desc1={data[0].desc1}
        desc2={data[0].desc2}
      />
      <View position="absolute" bottom={0} width="100%">
        <BottomView Navigation={navigation} name="Team" />
      </View>
    </View>
  );
};
