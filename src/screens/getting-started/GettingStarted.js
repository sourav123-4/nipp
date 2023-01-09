import React from "react";
import { Dimensions, ImageBackground, Platform } from "react-native";
import { View, Box, Center, Text } from "native-base";
import { CommonButton } from "../../common";
import Wave from "../../assets/images/wave.svg";
import Exercise from '../../assets/images/gettingstarted_background.png';

export const GettingStarted = ({ navigation }) => {
  const height = Dimensions.get("window").height;
  const width = Dimensions.get("window").width;

  return (
    <View>
      <Center>
          <Box bgColor="primary.10" width={"100%"} height={Platform.OS === 'ios'?"80%":"100%"}>
            <ImageBackground source={Exercise} style={{width:'100%',height:height*50/100}} >
              <Box height={"40%"} position={"relative"} alignItems="center">
                <Box
                  opacity={0.7}
                  bgColor="primary.20"
                  height={132}
                  width={132}
                  position={"absolute"}
                  left={"13%"}
                  top={20}
                  borderRadius={100}
                ></Box>
                <Box
                opacity={0.7}
                  bgColor="primary.20"
                  height={204}
                  width={204}
                  position={"absolute"}
                  right={"13%"}
                  top={5}
                  borderRadius={100}
                ></Box>
              </Box>
              <View>
                <Wave width={"100%"} height={"100%"} />
              </View>
            </ImageBackground>
            <Box
              bgColor="primary.30"
              position="relative"
              width={width}
              height={(height * 50) / 100}
            >
              <Text
                fontSize={32}
                color="primary.40"
                padding={6}
                font="Open Sans"
                fontWeight="400"
                lineHeight={42}
              >
                Take Control of Your Health with Us
              </Text>
              <Text
                font="Nunito"
                fontWeight="400"
                fontSize={14}
                lineHeight={24}
                color="primary.45"
                paddingLeft={6}
                paddingRight={6}
                paddingBottom={6}
              >
                Leveraging data to drive and improve patient outcomes. An
                integrative approach to wellness.
              </Text>
              <CommonButton
                bgColor="primary.20"
                name="Getting Started"
                borderRadius={12}
                fontSize={15}
                fontWeight="bold"
                icon="arrow-right"
                iconColor="white"
                padding={5}
                margin={4}
                navigation={navigation}
                navigateToPage={"SignIn"}
              />
            </Box>
          </Box>
      
      </Center>
    </View>
  );
};
