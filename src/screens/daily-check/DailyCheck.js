import React from 'react';
import {View, Slider, Box, Text, ScrollView} from 'native-base';
import {Heading, BottomView, CommonButton} from '../../common';

export const DailyCheck = ({navigation}) => {
  const data = [
    {heading: "How's your energy level?", defaultValue: 3},
    {heading: "How's your mood today?", defaultValue: 6},
    {heading: 'Did you sleep well?', defaultValue: 6},
  ];
  return (
    <View height="100%" position="relative">
      <ScrollView showsVerticalScrollIndicator={false}>
      <View padding={3}>
        <Heading
          headingTitle={'Daily Check In'}
          headingtext={`Record your daily check in for Nipp.  This data helps us to refine your personalize Nipp plan.  Let us know how you’re feeling.`}
        />
        {data && (
          <Box
            
            w="100%"
            bgColor={'white'}
            borderRadius={13}
            padding={4}
            marginTop={4}>
            {data.map((item, index) => {
              return (
                <View
                  key={index}
                  width={'100%'}
                  marginBottom={5}
                  paddingBottom={index === data.length - 1 ? 0 : 3}
                  borderBottomWidth={index === data.length - 1 ? 0 : 1}
                  borderBottomColor={'#F2F2F2'}
                  borderBottomLeftRadius={10}
                  borderBottomRightRadius={10}>
                  <Text
                    color={'#86898D'}
                    fontSize={12}
                    fontWeight={'400'}
                    lineHeight={16.34}
                    letterSpacing={1}
                    alignSelf="baseline">
                    {item.heading}
                  </Text>
                  <View
                    width={'100%'}
                    flexDirection={'row'}
                    justifyContent="space-between">
                    <Text fontSize={14} letterSpacing={1} color={'#1B1C1D'}>
                      1
                    </Text>
                    <Text fontSize={14} letterSpacing={1} color={'#1B1C1D'}>
                      10
                    </Text>
                  </View>
                  <Slider
                    width={'100%'}
                    defaultValue={item.defaultValue}
                    minValue={1}
                    maxValue={10}
                    colorScheme="green"
                    step={1}>
                    <Slider.Track bg="#F2F2F2">
                      <Slider.FilledTrack bg={'primary.20'} />
                    </Slider.Track>
                    <Slider.Thumb bg={'primary.20'} />
                  </Slider>
                </View>
              );
            })}
            <CommonButton bgColor={'primary.20'}
          name={'Submit'}
          borderRadius={35}
          fontSize={15}
          fontWeight={'bold'}
          padding={4}
          margin={5}
          navigateToPage={'Menu'}
          navigation={navigation}/>
          </Box>
        )}
      </View>
      </ScrollView>
      <View position="absolute" bottom={0} width="100%">
        <BottomView Navigation={navigation} name="DailyCheck" />
      </View>
    </View>
  );
};
