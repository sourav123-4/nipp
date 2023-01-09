import {View, ScrollView} from 'native-base';
import React from 'react';
import {Footer} from '../index';

export const AuthLayout = (ChildComponent, name) => {
  const Layout = props => {
    const renderHtml = () => {
      return (
        <View>
          <View
            height="80%"
            marginTop={60}
            width={'85%'}
            alignSelf="center"
            bgColor="white"
            borderRadius={20}
            paddingTop={10}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <ChildComponent {...props} />
            </ScrollView>
          </View>
          <Footer
            title={
              (name === 'LogIn' || name === 'ForgotPassword')
                ? `Don't have an account? `
                :`Already have an account? `
            }
            navigation={props.navigation}
            navigateToPage={(name === 'LogIn' || name === 'ForgotPassword') ? 'SignUp' : 'SignIn'}
            link={(name === 'LogIn' || name === 'ForgotPassword')? 'Sign Up Here' : 'Sign In Here'}
          />
        </View>
      );
    };
    return <>{renderHtml()}</>;
  };

  return Layout;
};
