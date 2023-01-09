import {View, Text} from 'native-base';
import React from 'react';

export const Heading = ({headingTitle, headingtext}) => {
  return (
    <View >
      <Text color={'primary.40'} fontSize={22} fontWeight={'400'}>
        {headingTitle}
      </Text>
      <Text color={'#8F9090'} fontSize={15}>
        {headingtext}
      </Text>
    </View>
  );
};
