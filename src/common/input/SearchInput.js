import {Input} from 'native-base';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();

export const CommonInput = ({name}) => {
  return (
    <Input
      InputLeftElement={
        <Icon
          name="search"
          size={20}
          style={{marginLeft: 12}}
          color="#DCD9D8"
        />
      }
      placeholder={name}
      borderColor={'#DCD9D8'}
      borderRadius={13}
      alignSelf={'center'}
      marginTop={2}
      marginBottom={5}
      padding={2}
      type="text"
      borderWidth={1}
      bgColor={'white'}
      color={'#151624'}
      placeholderTextColor={'#EAEBEC'}
      fontSize={18}
      autoFocus={false}
    />
  );
};
