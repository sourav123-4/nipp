import {View, Text, Pressable} from 'native-base';
import React from 'react';
import { useSelector } from 'react-redux';

export const LittleCard = ({
  title,
  desc,
  iconName,
  navigation,
  navigationToPage,
  iconbg
}) => {
  const {TotalStepsCountData} = useSelector(state => state)
  // console.log("totalsteps",TotalStepsCountData);

  return (
    <Pressable
      onPress={() => navigation.navigate(navigationToPage,{iconName: iconName,title:title,desc:desc,iconbg:iconbg})}
      flexDirection="row"
      bgColor="#FFFFFF"
      width="48%"
      borderRadius={12}
      alignItems="center"
      paddingLeft={3}
      >
        <View bgColor={iconbg} borderRadius={10} alignItems='center' justifyContent='center' width={10} height={10}>
      {iconName}
      </View>
      <View paddingLeft={3}>
        <Text color="#8D9099" fontSize={12} letterSpacing={1}>
          {title}
        </Text>
        <Text color="#252528" fontSize={18} letterSpacing={1}>
          {desc}
        </Text>
      </View>
    </Pressable>
  );
};
