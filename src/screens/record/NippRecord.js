import React from 'react';
import {View, Text, Box, Divider} from 'native-base';
import Logo from '../../assets/images/IconOfHuman.svg';

export const NippRecord = () => {
  const data = [
    {
      title: 'Height',
      desc: '182 cm',
    },
    {
      title: 'Weight',
      desc: '75 kg',
    },
    {
      title: 'Journey',
      desc: 'Journey Tagline',
    },
    {
      title: 'Activity',
      desc: 'Activity Tagline',
    },
  ];
  return (
    <Box
      borderTopLeftRadius={13} borderTopRightRadius={13}
      width={'95%'}
      marginTop={5}
      alignSelf={'center'}
      bg={'white'}
      height={310}
      justifyContent={'space-around'}
      flexDirection={'row'}>
      <View
        padding={3}
        borderRightColor={'#F2F2F2'}
        >
        <Logo />
      </View>
      <Divider orientation="vertical" mx="1" height='90%' alignSelf='center' bgColor='gray.100'/>
      <View justifyContent={'space-around'}>
        <Text
          fontSize={13}
          color="primary.40"
          fontWeight={'400'}
          letterSpacing={0.91}
          lineHeight={17}>
          OVERVIEW
        </Text>
        {data.map((item, index) => {
          return (
            <View key={index}>
              <Text
                fontSize={11}
                color="#8F9090"
                fontWeight={'400'}
                letterSpacing={0.91}
                lineHeight={17}>
                {item.title}
              </Text>
              <Text
                marginTop={2}
                fontSize={17}
                color="primary.40"
                fontWeight={'400'}
                letterSpacing={0.91}
                lineHeight={17}>
                {item.desc}
              </Text>
            </View>
          );
        })}
      </View>
    </Box>
  );
};
