import React from 'react';
import {View, Text} from 'native-base';
import {BottomView} from '../../common';
import {NippRecord} from '../index';
export const Profile = ({navigation}) => {
  return (
    <View position="relative" height="100%">
      <View justifyContent="center" alignItems="center">
        <NippRecord />
      </View>
      <View position="absolute" bottom={0} width="100%">
        <BottomView Navigation={navigation} name="Nipp Profile" />
      </View>
    </View>
  );
};
