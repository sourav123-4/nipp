import React, {useEffect} from "react";
import RNBootSplash from "react-native-bootsplash";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Theme from "../components/theme/theme";
import {
  Login,
  SignUp,
  Team,
  TeamDetails,
  ForgotPassword,
  Fitness,
  FitnessDetails,
  Food,
  FoodDetails,
  Menu,
  Trend,
  GettingStarted,
} from "../screens";
import BellIcon from "../assets/images/bellicon.svg";
import { Provider } from "react-redux";
import Store from "../components/theme/redux/store/Store";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {

  useEffect(()=>{
    setTimeout(()=>{
      RNBootSplash.hide();
    },3000)
  },[])
  
  return (
    <Provider store={Store()}>
    <NativeBaseProvider theme={Theme}>
      <NavigationContainer >
        <SafeAreaProvider>
          <Stack.Navigator initialRouteName="GettingStarted">
            <Stack.Screen
              name="GettingStarted"
              component={GettingStarted}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignIn"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="Team" component={Team} />
            <Stack.Screen
              name="TeamDetails"
              component={TeamDetails}
              options={{
                headerTitleAlign: "center",
                headerTitle: "Team Details",
                headerTitleStyle:{
                  color:'#01BA88'
                },
                headerTintColor:'#01BA88',
                headerRight: () => <BellIcon />,
              }}
            />
            <Stack.Screen name="Fitness" component={Fitness} />
            <Stack.Screen
              name="FitnessDetails"
              component={FitnessDetails}
              options={{
                headerTitleAlign: "center",
                headerTitle: "Fitness Details",
                headerTitleStyle:{
                  color:'#01BA88'
                },
                headerTintColor:'#01BA88'
              }}
            />
            <Stack.Screen name="Food" component={Food} />
            <Stack.Screen
              name="FoodDetails"
              component={FoodDetails}
              options={{
                headerTitleAlign: "center",
                headerTitle: "Food Details",
                headerTitleStyle:{
                  color:'#01BA88'
                },
                headerTintColor:'#01BA88'
              }}
              
            />
            <Stack.Screen
              name="Menu"
              component={Menu}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Trend"
              component={Trend}
              options={{
                headerTitleAlign: "center",
                headerTitleStyle:{
                  color:'#01BA88'
                },
                headerTintColor:'#01BA88'
              }}
            />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{headerShown:false}}/>
          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </NativeBaseProvider>
    </Provider>
  );
};

export default RootNavigator;
