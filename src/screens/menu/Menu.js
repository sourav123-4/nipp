import React, { useState, useEffect } from "react";
import { Animated, Dimensions, Easing, Platform } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AppleHealthKit from "react-native-health";
import moment from "moment";
import {
  Box,
  Pressable,
  VStack,
  Text,
  HStack,
  Divider,
  View,
  Spinner, 
} from "native-base";
import { useDispatch, useSelector } from "react-redux";
import {
  setStandTime,
  setExerciseTime,
  setDistance,
  setProtein,
  setFat,
  setStepsCount,
  setHeartRate,
  setCalories,
  setBloodOxyzen,
  setHrVariability,
  setRestingHr,
  setHeight,
  setWeight,
  setCarbs,
  setTotalExerciseTime,
  setTotalHeartRate,
  setTotalHrVariability,
  setTotalRestingHr,
  setTotalStandTime,
  setTotalDistance,
  setTotalStepsCount,
  setTotalBloodOxyzen,
  setTotalWeight,
  setTotalHeight,
  setTotalCarbs,
  setTotalCalories,
  setTotalProtein,
  setTotalFat,
  setModalView,
} from "../../components/theme/redux/action/Action.js";
import { Home, Profile, Food, Team, Fitness, DailyCheck } from "../index.js";
import Back from "../../assets/images/ARCHIVE ICONS/back.svg";
import Logout from "../../assets/images/log out.svg";
import Nutritionicon from "../../assets/images/nurttion.svg";
import Homeicon from "../../assets/images/home.svg";
import Fitnessicon from "../../assets/images/fitness.svg";
import NippProfileicon from "../../assets/images/nipp profile.svg";
import Settingicon from "../../assets/images/setting.svg";
import RefreshIcon from "../../assets/images/ARCHIVE ICONS/ICON.svg";
import HelpIcon from "../../assets/images/ARCHIVE ICONS/help.svg";
import { CommonModal } from "../../common/modal/CommonModal";

const Drawer = createDrawerNavigator();

const getIcon = (screenName, index, stateindex) => {
  switch (screenName) {
    case "Home":
      return (
        <Homeicon
          width="28"
          height="28"
          fill={index === stateindex ? "#01BA88" : "#91909A"}
        />
      );
    case "Nipp Profile":
      return (
        <NippProfileicon
          width="28"
          height="28"
          fill={index === stateindex ? "#01BA88" : "#91909A"}
        />
      );
    case "Nutrition":
      return (
        <Nutritionicon
          width="28"
          height="28"
          fill={index === stateindex ? "#01BA88" : "#91909A"}
        />
      );
    case "Fitness":
      return (
        <Fitnessicon
          width="28"
          height="28"
          fill={index === stateindex ? "#01BA88" : "#91909A"}
        />
      );
    case "Team":
      return (
        <Settingicon
          width="28"
          height="28"
          fill={index === stateindex ? "#01BA88" : "#91909A"}
        />
      );
    default:
      return undefined;
  }
};

function CustomDrawerContent(props) {
  const height = Dimensions.get("window").height;
  const width = Dimensions.get("window").width;
  return (
    <View {...props}>
      <Pressable
        marginTop={10}
        paddingLeft={10}
        onPress={() => props.navigation.closeDrawer()}
      >
        <Back fill="#01BA88" width={30} height={30} />
      </Pressable>
      <VStack
        height={(height * 90) / 100}
        width={(width * 50) / 100}
        space="6"
        mx="1"
        alignSelf="center"
        justifyContent={"center"}
      >
        <VStack divider={<Divider />} space="4">
          <VStack space="7">
            {props.state.routeNames?.map((name, index) =>
              name === "Daily Check In" ? null : (
                <Pressable
                  key={index}
                  px="5"
                  py="3"
                  rounded="md"
                  onPress={() => {
                    props.navigation.navigate(name);
                  }}
                >
                  <HStack space={7} alignItems="center">
                    <View>{getIcon(name, index, props.state.index)}</View>
                    <View>
                      <Text
                        marginLeft={3}
                        fontWeight="500"
                        fontSize={18}
                        lineHeight={24.55}
                        color={
                          index === props.state.index ? "primary.20" : "#91909A"
                        }
                      >
                        {name}
                      </Text>
                    </View>
                  </HStack>
                </Pressable>
              )
            )}
            <Pressable
              px="5"
              py="3"
              rounded="md"
              // onPress={() => {
              //   props.navigation.navigate("SignIn");
              // }}
            >
              <HStack space={7} alignItems="center">
                <HelpIcon width="28" height="28" fill="#91909A" />
                <Text
                  marginLeft={3}
                  fontWeight="500"
                  fontSize={18}
                  lineHeight={24.55}
                  color="#91909A"
                >
                  Help
                </Text>
              </HStack>
            </Pressable>
            <Pressable
              px="5"
              py="3"
              rounded="md"
              onPress={() => {
                props.navigation.navigate("SignIn");
              }}
            >
              <HStack space={7} alignItems="center">
                <Logout width="28" height="28" fill="#91909A" />
                <Text
                  marginLeft={3}
                  fontWeight="500"
                  fontSize={18}
                  lineHeight={24.55}
                  color="#91909A"
                >
                  Log out
                </Text>
              </HStack>
            </Pressable>
          </VStack>
        </VStack>
      </VStack>
    </View>
  );
}
export function Menu({ navigation }) {
  const dispatch = useDispatch();
  const [refresh, setRefresh] = useState(false);
  const [rotateValue, setRotateValue] = useState(new Animated.Value(0));

  function healthKit() {
    dispatch(setModalView(true))
    if (Platform.OS === "ios") {
      // / Permission options /
      const permissions = {
        permissions: {
          read: [
            AppleHealthKit.Constants.Permissions.Workout,
            AppleHealthKit.Constants.Permissions.Steps,
            AppleHealthKit.Constants.Permissions.AppleStandTime,
            AppleHealthKit.Constants.Permissions.HeartRate,
            AppleHealthKit.Constants.Permissions.DistanceWalkingRunning,
            AppleHealthKit.Constants.Permissions.AppleExerciseTime,
            AppleHealthKit.Constants.Permissions.HeartRateVariability,
            AppleHealthKit.Constants.Permissions.RestingHeartRate,
            AppleHealthKit.Constants.Permissions.ActiveEnergyBurned,
            AppleHealthKit.Constants.Permissions.OxygenSaturation,
            AppleHealthKit.Constants.Permissions.Height,
            AppleHealthKit.Constants.Permissions.Weight,
            AppleHealthKit.Constants.Permissions.Carbohydrates,
            AppleHealthKit.Constants.Permissions.FatSaturated,
            AppleHealthKit.Constants.Permissions.Protein,
            // AppleHealthKit.Constants.Permissions.FatTotal,
            AppleHealthKit.Constants.Permissions.BodyFatPercentage,
            // AppleHealthKit.Constants.Permissions.FatSaturated,
            // AppleHealthKit.Constants.Permissions.FatMonounsaturated,
            // AppleHealthKit.Constants.Permissions.FatPolyunsaturated,
          ],
          write: [
            AppleHealthKit.Constants.Permissions.Height,
            AppleHealthKit.Constants.Permissions.Weight,
            AppleHealthKit.Constants.Permissions.StepCount,
            AppleHealthKit.Constants.Permissions.Workout,
            AppleHealthKit.Constants.Permissions.AppleStandTime,
            AppleHealthKit.Constants.Permissions.HeartRate,
            AppleHealthKit.Constants.Permissions.DistanceWalkingRunning,
            AppleHealthKit.Constants.Permissions.AppleExerciseTime,
            AppleHealthKit.Constants.Permissions.HeartRateVariability,
            AppleHealthKit.Constants.Permissions.RestingHeartRate,
            AppleHealthKit.Constants.Permissions.ActiveEnergyBurned,
            AppleHealthKit.Constants.Permissions.Steps,
            AppleHealthKit.Constants.Permissions.BodyFatPercentage,
            AppleHealthKit.Constants.Permissions.Carbohydrates,
            AppleHealthKit.Constants.Permissions.OxygenSaturation,
            AppleHealthKit.Constants.Permissions.FatSaturated,
            AppleHealthKit.Constants.Permissions.Protein,
            AppleHealthKit.Constants.Permissions.BodyFatPercentage,
            AppleHealthKit.Constants.Permissions.FatSaturated,
            AppleHealthKit.Constants.Permissions.FatMonounsaturated,
            AppleHealthKit.Constants.Permissions.FatPolyunsaturated,
            AppleHealthKit.Constants.Permissions.FatTotal,
          ],
        },
      };

      const TotalData = (data) => {

        const date = moment(new Date()).format("MMM Do YY");
        const changeFormatDateData = data?.map((item) => {
          const startDate = moment(item.startDate).format("MMM Do YY");
          const endDate = moment(item.endDate).format("MMM Do YY");
          return { endDate: endDate, startDate: startDate, value: item.value };
        });
        const filterData = changeFormatDateData.filter((item) => {
          return item.endDate === date;
        });
        const todaysData = filterData.reduce((prev, next) => {
          return prev + next?.value;
        }, 0);
        return todaysData;
      };
      const todaysData = (data) => {
        const date = moment(new Date()).format("MMM Do YY");
        const changeFormatDateData = data?.map((item) => {
          const startDate = moment(item.startDate).format("MMM Do YY");
          const endDate = moment(item.endDate).format("MMM Do YY");
          return { endDate: endDate, startDate: startDate, value: item.value };
        });
        const filterData = changeFormatDateData.filter((item) => {
          return item.endDate === date;
        });
        console.log("filtered data",filterData)
        return filterData? filterData?.[0]?.value : 0;
      };
      AppleHealthKit.initHealthKit(permissions, (error, res) => {
        // / Called after we receive a response from the system /

        if (error) {
          console.log("[ERROR] Cannot grant permissions!");
        }

        // / Can now read or write to HealthKit /

        const options = {
          startDate: new Date(2020, 11, 1).toISOString(),
        };
        AppleHealthKit.getAppleExerciseTime(
          options,
          (callbackError, results) => {
            console.log('exercise time',results);
            dispatch(setExerciseTime(TotalData(results)));
            dispatch(setTotalExerciseTime(results));
          }
        );
        AppleHealthKit.getHeartRateSamples(options, (err, result) => {
          console.log("hr rate samples",result)
          dispatch(setHeartRate(todaysData(result)));
          dispatch(setTotalHeartRate(result));
        });
        AppleHealthKit.getHeartRateVariabilitySamples(
          options,
          (err, result) => {
            console.log("hr variablity",result);
            dispatch(setHrVariability(todaysData(result) * 1000));
            dispatch(setTotalHrVariability(result));
          }
        );
        AppleHealthKit.getRestingHeartRate(options, (err, result) => {
          console.log("Resting heart rate",result);
          dispatch(setRestingHr(todaysData(result)));
        });
        AppleHealthKit.getRestingHeartRateSamples(options, (err, result) => {
          // console.log("rest hr samples",result)
          dispatch(setTotalRestingHr(result));
        });
        AppleHealthKit.getAppleStandTime(options, (err, result) => {
          // console.log("Apple stand time",result);
          dispatch(setStandTime(TotalData(result)));
          dispatch(setTotalStandTime(result));
        });
        AppleHealthKit.getDistanceWalkingRunning(options, (err, result) => {
          // console.log("Distance",result);
          dispatch(setDistance(result.value));
        });
        AppleHealthKit.getDailyDistanceWalkingRunningSamples(
          options,
          (err, result) => {
            console.log("Total Distance",result);
            dispatch(setDistance(TotalData(result)));
            dispatch(setTotalDistance(result));
          }
        );
        AppleHealthKit.getStepCount(options, (err, result) => {
          // console.log("steps",result);
          dispatch(setStepsCount(result.value));
        });
        AppleHealthKit.getDailyStepCountSamples(options, (err, result) => {
          // console.log("total steps",result);
          dispatch(setTotalStepsCount(result));
        });
        AppleHealthKit.getOxygenSaturationSamples(options, (err, result) => {
          console.log("oxyzen",result);
          dispatch(setBloodOxyzen(todaysData(result) * 100));
          dispatch(setTotalBloodOxyzen(result));
        });
        AppleHealthKit.getLatestWeight(options, (err, result) => {
          // console.log("latest weight",result);
          dispatch(setWeight(result));
        });
        AppleHealthKit.getWeightSamples(options, (err, result) => {
          // console.log("Total weight",result);
          dispatch(setTotalWeight(result));
        });
        AppleHealthKit.getLatestHeight(options, (err, result) => {
          // console.log("latest height",result);
          dispatch(setHeight(result));
        });
        AppleHealthKit.getHeightSamples(options, (err, result) => {
          // console.log("Total height",result);
          dispatch(setTotalHeight(result));
        });
        AppleHealthKit.getCarbohydratesSamples(options, (err, result) => {
          // console.log('carbo',result);
          dispatch(setCarbs(TotalData(result)));
          dispatch(setTotalCarbs(result));
        });
        AppleHealthKit.getActiveEnergyBurned(options, (err, result) => {
          // console.log("calories",result);
          dispatch(setCalories(TotalData(result)));
          dispatch(setTotalCalories(result));
          
        });
        AppleHealthKit.getProteinSamples(options, (err, result) => {
          // console.log("protein",result);
          dispatch(setProtein(TotalData(result)));
          dispatch(setTotalProtein(result));
          dispatch(setModalView(false));
          StopImageRotate();
          setRefresh(true);
        });
        // AppleHealthKit.getBodyFatPercentageSamples(options,(err,result)=>{
        //   // console.log("fat",result)
        //   // dispatch(setFat(result));
        //   // dispatch(setTotalFat(result));
        // })
        // AppleHealthKit.getLatestBodyFatPercentage(options,(err,result)=>{
        //   // console.log("fat1",result)
        //   // dispatch(setFat(result))
        // })
        // AppleHealthKit.getBodyFatPercentageSamples(options,(err,result)=>{
        //   // console.log("fat2",result)
        //   // dispatch(setFat(result))
        // })
        // AppleHealthKit.getTotalFatSamples(
        //   options,
        //   (err,results) => {
        //     if (err) {
        //       return
        //     }
        //     console.log("totalfat",results)
        //   }
        // )
        // AppleHealthKit.saveWorkout({
        //   type: 'AmericanFootball', // See HealthActivity Enum
        //   startDate: new Date(2020, 11, 2).toISOString(),
        //   endDate: new Date(2023,1,5).toISOString(),
        //   energyBurned: 50, // In Energy burned unit,
        //   energyBurnedUnit: 'calorie',
        //   distance: 50, // In Distance unit
        //   distanceUnit: 'meter'
        // },(err,result)=>{
        //   console.log("workout 4",result)
        //   // dispatch(setFat(result))
        // })
      });
    } else {
      const options = {
        scopes: [
          Scopes.FITNESS_ACTIVITY_READ,
          Scopes.FITNESS_ACTIVITY_WRITE,
          Scopes.FITNESS_BODY_READ,
          Scopes.FITNESS_BODY_WRITE,
          Scopes.FITNESS_BLOOD_PRESSURE_READ,
          Scopes.FITNESS_BLOOD_PRESSURE_WRITE,
          Scopes.FITNESS_BLOOD_GLUCOSE_READ,
          Scopes.FITNESS_BLOOD_GLUCOSE_WRITE,
          Scopes.FITNESS_NUTRITION_WRITE,
          Scopes.FITNESS_NUTRITION_READ,
          Scopes.FITNESS_SLEEP_READ,
          Scopes.FITNESS_OXYGEN_SATURATION_READ,
          Scopes.FITNESS_OXYGEN_SATURATION_WRITE,
          Scopes.FITNESS_LOCATION_READ,
          Scopes.FITNESS_LOCATION_WRITE,
          Scopes.FITNESS_HEART_RATE_READ,
          Scopes.FITNESS_HEART_RATE_WRITE,
        ],
      };
      GoogleFit.checkIsAuthorized().then(() => {
        var authorized = GoogleFit.isAuthorized;
        // console.log(authorized);
        if (authorized) {
          handleAndroidFit();
          // if already authorized, fetch data
        } else {
          // Authentication if already not authorized for a particular device
          GoogleFit.authorize(options)
            .then((authResult) => {
              if (authResult.success) {
                handleAndroidFit();
                // console.log('AUTH_SUCCESS', authResult.success);

                // if successfully authorized, fetch data
              } else {
                setModalVisible(authResult.message);

                // console.log('AUTH_DENIED ' + authResult.message, authResult.success);
              }
            })
            .catch((err) => {
              setModalVisible(err.message);
            });
        }
      });
    }
  }
  const currentDateValue = (data, key = "startDate") => {
    return data
      .filter(
        (item) =>
          new Date().toDateString() === new Date(item?.[key]).toDateString()
      )
      ?.reverse();
  };
  const handleAndroidFit = async () => {
    const opt = {
      startDate: new Date(2020, 11, 1).toISOString(),
      bucketUnit: "DAY",
    };

    const stepData = await GoogleFit.getDailyStepCountSamples(opt);
    const stepsDetails = stepData?.reduce((prev, next) => {
      return [...prev, ...next.steps];
    }, []);
    const lastStep = currentDateValue(stepsDetails, "date");
    dispatch(setStepsCount(lastStep?.[0]?.value || 0));
    dispatch(setTotalStepsCount(stepsDetails));

    const HeartRate = await GoogleFit.getHeartRateSamples(opt);
    const lastHeartData = currentDateValue(HeartRate);
    dispatch(setHeartRate(lastHeartData));

    const Weight = await GoogleFit.getWeightSamples(opt);
    // console.log('Weight', Weight);
    dispatch(setWeight(Weight?.reverse()?.[0]?.value));
    dispatch(setTotalWeight(Weight));

    const height = await GoogleFit.getHeightSamples(opt);
    dispatch(setHeight(height?.reverse()?.[0]?.value));
    dispatch(setTotalHeight(height));

    const Workout = await GoogleFit.getActivitySamples(opt);
    // console.log('Workout', Workout);

    const distance = await GoogleFit.getDailyDistanceSamples(opt);
    const lastDistance = currentDateValue(distance);
    dispatch(setDistance(lastDistance?.[0]?.distance || 0));
    dispatch(setTotalDistance(distance));

    const OxygenSaturation = await GoogleFit.getOxygenSaturationSamples(opt);
    const last_OxygenSaturation =
      currentDateValue(OxygenSaturation) || OxygenSaturation;
    dispatch(setBloodOxyzen(last_OxygenSaturation));
    dispatch(setTotalBloodOxyzen(OxygenSaturation));

    const NutritionData = await GoogleFit.getDailyNutritionSamples(opt);
    const currentNutrient = currentDateValue(NutritionData, "date");
    const NutriData = currentNutrient?.reduce(
      (prev, next) => {
        return {
          protein: prev.protein + (next?.nutrients?.["protein"] || 0),
          fat: prev.fat + (next?.nutrients?.["fat.total"] || 0),
          carbs: prev.carbs + (next?.nutrients?.["carbs.total"] || 0),
        };
      },
      { protein: 0, fat: 0, carbs: 0 }
    );
    // console.log('NutritionData', NutriData, NutritionData);
    dispatch(setCarbs(NutriData?.carbs));
    dispatch(setFat(NutriData?.fat));
    dispatch(setProtein(NutriData?.protein));

    const moveData = await GoogleFit.getMoveMinutes(opt);
    const todayMoveData = currentDateValue(moveData);
    const TodayTotalMove = todayMoveData?.reduce((prev, next) => {
      return prev + (next.duration || 0);
    }, 0);

    dispatch(setMove(TodayTotalMove));
    dispatch(setTotalMove(moveData));

    // console.log('moveData ', moveData);

    const RestingHeartRate = await GoogleFit.getRestingHeartRateSamples(opt);
    const lastrestHeartData = currentDateValue(RestingHeartRate);
    dispatch(setRestingHr(lastrestHeartData));
    dispatch(setTotalRestingHr(RestingHeartRate));

    // const bloodPressure = await GoogleFit.getBloodPressureSamples(opt);
    // console.log('bloodPressure', bloodPressure);
    const CaloriesData = await GoogleFit.getDailyCalorieSamples(opt);
    const todayCalarieData = currentDateValue(CaloriesData);
    const ToadayTotalCalorie = todayCalarieData?.reduce((prev, next) => {
      return prev + (Math.abs(next.calorie) || 0);
    }, 0);
    // console.log("dataaa", todayCalarieData, CaloriesData)
    dispatch(setCalories(ToadayTotalCalorie));

  };

  useEffect(() => {
    healthKit();
  }, []);

  function StartImageRotate() {
    rotateValue.setValue(0);
    Animated.timing(rotateValue, {
      toValue: 7,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  }

  function StopImageRotate() {
    rotateValue.setValue(0);
    Animated.timing(rotateValue, {
      toValue: 0,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).stop();
  }

  const RotateData = rotateValue.interpolate({
    inputRange: [0, 1, 2, 3, 4, 5, 6],
    outputRange: [
      "0deg",
      "120deg",
      "240deg",
      "360deg",
      "240deg",
      "120deg",
      "0deg",
    ],
  });

  const handleRefresh = () => {
    StartImageRotate();
    Platform.OS === "ios" ? healthKit() : null;
  };

  return (
    <Box flex={1}>
      {refresh && (
        <CommonModal navigation={navigation} setRefresh={setRefresh} />
      )}
      <Drawer.Navigator
        screenOptions={{
          headerTintColor: "#01BA88",
        }}
        initialRouteName="Home"
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen
          name="Home"
          component={Home}
          screenOptions={{
            headerTintColor: "#01BA88",
          }}
          options={{
            headerTitle: "Activity",
            headerTitleAlign: "center",
            headerRight: () => (
              <Pressable onPress={() => handleRefresh()}>
                <Animated.View
                  style={{
                    width: 25,
                    height: 25,
                    marginRight: 10,
                    transform: refresh
                      ? [{ rotate: RotateData }]
                      : [{ rotate: "0deg" }],
                  }}
                >
                  <RefreshIcon width={25} height={25} fill="#01BA88" />
                </Animated.View>
              </Pressable>
            ),
          }}
        />
        <Drawer.Screen
          name="Nipp Profile"
          component={Profile}
          options={{ headerTitleAlign: "center" }}
        />
        <Drawer.Screen
          name="Nutrition"
          component={Food}
          options={{ headerTitleAlign: "center" }}
        />
        <Drawer.Screen
          name="Fitness"
          component={Fitness}
          options={{ headerTitleAlign: "center" }}
        />
        <Drawer.Screen
          name="Team"
          component={Team}
          options={{ headerTitleAlign: "center" }}
        />
        <Drawer.Screen
          name="Daily Check In"
          component={DailyCheck}
          options={{
            headerTitleAlign: "center",
          }}
        />
      </Drawer.Navigator>
    </Box>
  );
}
