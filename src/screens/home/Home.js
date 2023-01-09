import React, { useEffect, useState } from "react";
import { Dimensions } from "react-native";
import { View, ScrollView, Spinner, Center } from "native-base";
import { useSelector, useDispatch } from "react-redux";
import {
  Heading,
  LittleCard,
  SquareCard,
  ProgressBar,
  BottomView,
} from "../../common";
import WalkingIcon from "../../assets/images/ARCHIVE ICONS/WALKING MAN.svg";
import StepsIcon from "../../assets/images/ARCHIVE ICONS/steps.svg";
import DistanceIcon from "../../assets/images/ARCHIVE ICONS/distance.svg";
import CaloriesIcon from "../../assets/images/ARCHIVE ICONS/calories.svg";
import CarbsIcon from "../../assets/images/ARCHIVE ICONS/carbs.svg";
import FatsIcon from "../../assets/images/ARCHIVE ICONS/fats.svg";
import ProteinIcon from "../../assets/images/ARCHIVE ICONS/protein.svg";
import BloodoxyzenIcon from "../../assets/images/ARCHIVE ICONS/bloodoxyzen.svg";
import HrIcon from "../../assets/images/ARCHIVE ICONS/hr.svg";
import HeartIcon from "../../assets/images/ARCHIVE ICONS/heart.svg";
import RestinghrIcon from "../../assets/images/ARCHIVE ICONS/restinghr.svg";
import RunningIcon from "../../assets/images/ARCHIVE ICONS/running.svg";
import ExerciseIcon from "../../assets/images/ARCHIVE ICONS/exercise.svg";

export const Home = ({ navigation }) => {
  const {
    Move,
    protein,
    fat,
    exerciseTime,
    standTime,
    distance,
    stepsCount,
    heartRate,
    calories,
    HrVariability,
    BloodOxyzen,
    restingHr,
    carbs,
    modalView
  } = useSelector((state) => {
    return state;
  });

  const height = Dimensions.get("window").height;
  // const width = Dimensions.get('window').width;
  console.log("modalview",modalView);
  return (
    <View height="100%" position={"relative"}>
      {(modalView === true)? <Center marginTop={20}><Spinner size='lg'/></Center> :
      <ScrollView showsVerticalScrollIndicator={false}>
        <View padding={3} marginBottom={20}>
          <Heading
            headingTitle={"Your Activity"}
            headingtext={"Hello, Susan!"}
          />
          <View
            width="100%"
            height={(height * 40) / 100}
            flexDirection="row"
            justifyContent="space-evenly"
            position="relative"
            marginTop={10}
          >
            <ProgressBar
              navigation={navigation}
              secondaryColor="#009BAB"
              primaryColor="#EAEFFC"
              height1={75}
              height2={25}
              name="Move"
              desc={Move || 0}
              iconbg="#009BAB"
              Logo={<RunningIcon fill="white" width="24" height="24" />}
            />
            <ProgressBar
              navigation={navigation}
              secondaryColor="#01BA88"
              primaryColor="#DDFEE6"
              height1={50}
              height2={50}
              iconbg="#01BA88"
              name="Stand"
              desc={standTime || 0}
              Logo={<WalkingIcon fill="white" width="24" height="24" />}
            />
            <ProgressBar
              navigation={navigation}
              secondaryColor="#007CC7"
              primaryColor="#E4E1FF"
              height1={60}
              height2={40}
              name="Exercise Mins"
              desc={exerciseTime || 0}
              iconbg="#007CC7"
              Logo={<ExerciseIcon fill="white" width="24" height="24" />}
            />
          </View>
          <View
            marginTop={12}
            height={(height * 8) / 100}
            width="100%"
            flexDirection="row"
            justifyContent="space-between"
          >
            <LittleCard
              title="Steps"
              desc={Math.round(stepsCount)}
              iconbg="#EAEFFC"
              iconName={<StepsIcon fill="#3665F9" width="24" height="24" />}
              navigation={navigation}
              navigationToPage={"Trend"}
            />
            <LittleCard
              title="Distance"
              desc={distance.toFixed(2)}
              iconbg="#E8FEEA"
              iconName={<DistanceIcon fill="#35B555" width="24" height="24" />}
              navigation={navigation}
              navigationToPage={"Trend"}
            />
          </View>
          <View
            marginTop={5}
            borderRadius={12}
            height={190}
            width="100%"
            bgColor="#FFFFFF"
            paddingTop={2}
          >
            <LittleCard
              title="Calories"
              desc={calories.toFixed(2) || 0}
              iconbg="#DDFEE6"
              iconName={<CaloriesIcon fill="#01BA88" width="24" height="24" />}
              navigation={navigation}
              navigationToPage={"Trend"}
            />
            <View
              flexDirection="row"
              justifyContent="space-between"
              width="100%"
              padding={2}
              marginTop={4}
            >
              <SquareCard
                title="Carbs"
                desc={carbs || 0}
                navigation={navigation}
                navigationToPage={"Trend"}
                bgColor={"#EAEFFC"}
                iconbg="#EAEFFC"
                iconName={<CarbsIcon fill="blue" width="24" height="24" />}
              />
              <SquareCard
                title="Fat"
                desc={fat || 0}
                navigation={navigation}
                navigationToPage={"Trend"}
                bgColor={"#E8FEEA"}
                iconbg="#E8FEEA"
                iconName={<FatsIcon fill="green" width="24" height="24" />}
              />
              <SquareCard
                title="Protein"
                desc={protein || 0}
                navigation={navigation}
                navigationToPage={"Trend"}
                bgColor={"#EAEFFC"}
                iconbg="#EAEFFC"
                iconName={<ProteinIcon fill="blue" width="24" height="24" />}
              />
            </View>
          </View>
          <View
            marginTop={5}
            height={(height * 8) / 100}
            width="100%"
            flexDirection="row"
            justifyContent="space-between"
          >
            <LittleCard
              title="Heart Rate"
              desc={heartRate || 0}
              iconbg="#EAEFFC"
              iconName={<HeartIcon fill="#3665F9" width="24" height="24" />}
              navigation={navigation}
              navigationToPage={"Trend"}
            />
            <LittleCard
              title="HR Variability"
              desc={HrVariability?.toFixed(2) || 0}
              iconbg="#E8FEEA"
              iconName={<HrIcon fill="#35B555" width="24" height="24" />}
              navigation={navigation}
              navigationToPage={"Trend"}
            />
          </View>
          <View
            marginTop={5}
            height={(height * 8) / 100}
            width="100%"
            flexDirection="row"
            justifyContent="space-between"
          >
            <LittleCard
              title="Resting HR"
              desc={restingHr?.toFixed(2) || 0}
              iconbg="#EAEFFC"
              iconName={<RestinghrIcon fill="#3665F9" width="24" height="24" />}
              navigation={navigation}
              navigationToPage={"Trend"}
            />
            <LittleCard
              title="Blood Oxygen"
              desc={BloodOxyzen?.toFixed(2) || 0}
              iconbg="#E8FEEA"
              iconName={
                <BloodoxyzenIcon fill="#35B555" width="24" height="24" />
              }
              navigation={navigation}
              navigationToPage={"Trend"}
            />
          </View>
        </View>
      </ScrollView>
}
      <View position="absolute" bottom={0} width="100%">
        <BottomView Navigation={navigation} name="Home" />
      </View>
    </View>
  );
};
