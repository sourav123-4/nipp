import {View, Text, Pressable} from 'native-base';
import React from 'react';

export const SquareCard = ({
  title,
  iconName,
  desc,
  navigation,
  navigationToPage,
  bgColor,
  iconbg
}) => {
  return (
    <Pressable
      onPress={() => navigation.navigate(navigationToPage,{iconName: iconName,title:title,desc:desc,iconbg:iconbg})}
      width="32%"
      borderRadius={12}
      alignItems="center"
      justifyContent="space-evenly"
      bgColor={bgColor}
      padding={2}>
        <View bgColor={iconbg} borderRadius={10} alignItems='center' justifyContent='center' width={10} height={10}>
      {iconName}
      </View>
      <View marginTop={1}>
        <Text
          color="#8D9099"
          fontSize={12}
          letterSpacing={1}
          textAlign="center">
          {title}
        </Text>
        <Text
          color="#252528"
          fontSize={18}
          letterSpacing={1}
          textAlign="center">
          {desc}
        </Text>
      </View>
    </Pressable>
  );
};
