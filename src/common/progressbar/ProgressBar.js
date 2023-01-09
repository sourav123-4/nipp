import {View, Text, Pressable} from 'native-base';
import React from 'react';
import {StyleSheet} from 'react-native';

export const ProgressBar = ({
  primaryColor,
  secondaryColor,
  height1,
  height2,
  Logo,
  navigation,
  iconbg,
  name,
  desc
}) => {
  return (
    <View width={'33%'} alignItems='center'>
      <Pressable onPress={() => navigation.navigate('Trend',{iconName: Logo,iconbg:iconbg,title:name,desc:desc})}  width={'60%'} borderRadius={50}>
        <View
          borderTopLeftRadius={35}
          borderTopRightRadius={35}
          bgColor={primaryColor}
          height={`${height1}%`}></View>
        <View
          borderBottomLeftRadius={35}
          borderBottomRightRadius={35}
          bgColor={secondaryColor}
          height={`${height2}%`}
          position='relative'
          alignItems='center'
          >
          {/* <View position='absolute' top={2}>
            <Text fontSize={14} letterSpacing={1} textAlign="center">
              {height2}
            </Text>
            <Text fontSize={14} letterSpacing={1} textAlign="center">
              %
            </Text>
          </View> */}
          <View  alignItems="center" position='absolute' bottom={2}>{Logo}</View>
        </View>
      </Pressable>
      <Text color="#8D9099" fontSize={12} letterSpacing={1} textAlign='center' paddingTop={2}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
