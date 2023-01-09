import {View, Text, Pressable} from 'native-base';
import React from 'react';
import {Dimensions} from 'react-native';

export const Card = ({navigation, data, navigationPage}) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  return (
    <View marginTop={3}>
      {data.map((item, index) => {
        return (
          <Pressable
            key={index}
            onPress={() => navigation.navigate(navigationPage)}
            flexDirection={'row'}
            height={'100'}
            width={'100%'}
            bgColor={'white'}
            alignItems={'center'}
            paddingLeft={3}
            borderRadius={13}
            marginBottom={3}>
            <View
              bgColor={'#E3ECE9'}
              borderRadius={12}
              height={'70%'}
              width={'25%'}></View>
            <View paddingLeft={3} alignContent={'baseline'}>
              <Text fontSize={12} color={'#8F9090'} letterSpacing={1}>
                {item.heading}
              </Text>
              <Text fontSize={18} color={'primary.40'}>
                {item.text}
              </Text>
            </View>
          </Pressable>
        );
      })}
    </View>
  );
};
