import {View, Text, Divider} from 'native-base';
import React from 'react';

export const Details = ({name, heading, desc1, desc2, data}) => {
  return (
    <View padding={3}>
      <Text color={'primary.40'} fontSize={16} paddingBottom={5}>
        {name}
      </Text>
      <View
        alignItems={'center'}
        justifyContent={'center'}
        width={'100%'}
        borderRadius={15}
        height={'327'}
        bgColor={'white'}>
        <View
          borderRadius={15}
          height={data ? '68%' : '85%'}
          width={'90%'}
          bgColor={'#E3ECE9'}></View>
        {data ? (
          <View
            flexDirection={'row'}
            width={'100%'}
            justifyContent={'space-around'}
            paddingTop={3}>
            {data?.map((item, index) => {
              return (
                <View key={index} flexDirection="row" alignItems="center">
                  <View>
                    <Text color={'#8F9090'} fontSize={12}>
                      {item.title}
                    </Text>
                    <Text color={'primary.40'} fontSize={18}>
                      {item.weight}
                    </Text>
                  </View>
                  {index < data.length - 1 ? (
                    <Divider
                      orientation="vertical"
                      height={8}
                      marginLeft={5}
                      bg="gray.400"
                    />
                  ) : null}
                </View>
              );
            })}
          </View>
        ) : null}
      </View>
      <View paddingTop={5}>
        <Text color={'primary.40'} fontSize={16} paddingBottom={3}>
          {heading}
        </Text>
        <Text
          color={'#8F9090'}
          fontSize={13}
          // fontFamily={'Open Sans'}
          lineHeight={20}
          letterSpacing={1}>
          {desc1}
        </Text>
        <Text
          color={'#8F9090'}
          fontSize={13}
          // fontFamily={'Open Sans'}
          lineHeight={20}
          letterSpacing={1}>
          {desc2}
        </Text>
      </View>
    </View>
  );
};
