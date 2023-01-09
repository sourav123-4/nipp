import React from 'react';
import {View, HStack, Pressable} from 'native-base';

import Nutritionicon from '../../assets/images/nurttion.svg';
import Homeicon from '../../assets/images/home.svg';
import Fitnessicon from '../../assets/images/fitness.svg';
import NippProfileicon from '../../assets/images/nipp profile.svg';
import Surveyicon from '../../assets/images/survey.svg';

export const BottomView = ({Navigation, name}) => {
  return (
    <View bgColor={'#FFFFFF'} height={20}>
      <HStack justifyContent="space-between" padding={6} alignItems="center">
        <Pressable onPress={() => Navigation.navigate('Home')}>
          <Homeicon
            width={name === 'Home' ? 28 : 24}
            height={name === 'Home' ? 28 : 24}
            fill={name === 'Home' ? '#01BA88' : '#91909A'}
          />
        </Pressable>
        <Pressable onPress={() => Navigation.navigate('Nutrition')}>
          <Nutritionicon
            width={name === 'Food' ? 28 : 24}
            height={name === 'Food' ? 28 : 24}
            fill={name === 'Food' ? '#01BA88' : '#91909A'}
          />
        </Pressable>
        <Pressable onPress={() => Navigation.navigate('Fitness')}>
          <Fitnessicon
            width={name === 'Fitness' ? 28 : 24}
            height={name === 'Fitness' ? 28 : 24}
            fill={name === 'Fitness' ? '#01BA88' : '#91909A'}
          />
        </Pressable>
        <Pressable onPress={() => Navigation.navigate('Daily Check In')}>
          <Surveyicon
            width={name === 'DailyCheck' ? 28 : 24}
            height={name === 'DailyCheck' ? 28 : 24}
            fill={name === 'DailyCheck' ? '#01BA88' : '#91909A'}
          />
        </Pressable>
        <Pressable onPress={() => Navigation.navigate('Nipp Profile')}>
          <NippProfileicon
            width={name === 'Nipp Profile' ? 28 : 24}
            height={name === 'Nipp Profile' ? 28 : 24}
            fill={name === 'Nipp Profile' ? '#01BA88' : '#91909A'}
          />
        </Pressable>
      </HStack>
    </View>
  );
};
