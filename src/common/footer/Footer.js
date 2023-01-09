import {Pressable, Text, View} from 'native-base';
import React from 'react';

export const Footer = ({title, link, navigation, navigateToPage}) => {
  return (
    <View
      justifyContent={'center'}
      flexDirection={'row'}
      fontSize={12}
      marginTop={4}>
      <Text color={'#000000'} fontWeight={'500'}>
        {title}
      </Text>
      <Pressable onPress={() => navigation.navigate(navigateToPage)}>
        <Text color={'#0076AC'} textAlign={'center'} fontWeight={'500'}>
          {link}
        </Text>
      </Pressable>
    </View>
  );
};
