import React, { useState } from 'react';
import {View, Text, Input, Checkbox, Pressable} from 'native-base';
import {AuthLayout, CommonButton} from '../../common';
import Logo from '../../assets/images/Logo.svg';
import LockIcon from '../../assets/images/icon-lock.svg';

export const Login = AuthLayout(({navigation}) => {
  const [focus,setFocus] = useState(false)
  return (
    <View>
      <View marginTop={10}>
        <View alignItems={'center'} justifyContent={'center'}>
          <Logo />
        </View>
        <View
          paddingTop={10}
          paddingBottom={10}
          paddingLeft={3}
          paddingRight={3}>
          <Input
            paddingLeft={8}
            placeholder={'Enter Your Email'}
            borderColor={'primary.20'}
            borderRadius={30}
            marginBottom={5}
            type="text"
            borderWidth={1}
            padding={3}
            fontWeight={'bold'}
            fontSize={14}
            color={'#151624'}
            bgColor={'white'}
            _focus={{borderColor:'primary.20'}}
          />
          <Input
            variant="filled"
            InputLeftElement={
              <LockIcon size={17} color={'gray'} style={{marginLeft: 15}} />
            }
            borderWidth={1}
            placeholder={'Enter Your Password'}
            type="password"
            borderRadius={30}
            bgColor={'white'}
            color={'#151624'}
            fontSize={14}
            padding={3}
            fontWeight={'bold'}
            borderColor='primary.20'
            _focus={{borderColor:'primary.20'}}
          />
        </View>
        <View flexDirection={'row'} justifyContent={'space-between'} margin={5}>
          <Checkbox
            _focus={{borderColor:'primary.20'}}
            defaultIsChecked
            value="two"
            bgColor='white'
            isFocused={true}
            borderWidth={1}
            borderColor={'primary.20'}
            size="md"
            borderRadius={5} >
            <Text color={'black'}>Remember me</Text>
          </Checkbox>
          <Pressable onPress={() => navigation.navigate('ForgotPassword')}>
            <Text color={'#0076AC'}>Forgot Password</Text>
          </Pressable>
        </View>
        <View marginTop={35}>
          <CommonButton
            bgColor={'primary.20'}
            name={'Sign In'}
            borderRadius={35}
            fontSize={15}
            fontWeight={'bold'}
            padding={4}
            margin={5}
            navigation={navigation}
            navigateToPage="Menu"
          />
        </View>
      </View>
    </View>
  );
}, 'LogIn');
