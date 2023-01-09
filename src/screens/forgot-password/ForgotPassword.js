import React from 'react';
import {View, Text, Input} from 'native-base';
import {CommonButton,AuthLayout, CommonInput} from '../../common';
import Logo from '../../assets/images/Logo.svg';

export const ForgotPassword = AuthLayout(({navigation}) => {
  return (
    <View style={{marginTop: 5}}>
      <View padding={3} marginTop={10}>
        <View
          alignItems={'center'}
          justifyContent={'center'}
          paddingBottom={10}> 
          <Logo />
        </View>
        <Text textAlign='left' marginBottom={10} color={'black'} fontWeight='bold' fontSize={14}>Enter the email address associated with your account and we will send you a link to reset your password.</Text>
        <Input
            paddingLeft={5}
            placeholder={'Enter Your Email'}
            borderColor={'primary.20'}
            borderRadius={30}
            marginBottom={5}
            type="text"
            width={'100%'}
            borderWidth={1}
            padding={3}
            fontWeight={'bold'}
            fontSize={14}
            color={'#151624'}
            bgColor={'white'}
            _focus={{borderColor:'primary.20'}}
          />
        <CommonButton
          name={'Submit'}
          bgColor={'primary.20'}
          borderRadius={35}
          fontSize={16}
          fontWeight={'bold'}
          padding={4}
          margin={3}
          navigation={navigation}
          navigateToPage={'SignIn'}
        />
      </View>
    </View>
  );
},'ForgotPassword')
