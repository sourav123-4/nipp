import React from 'react';
import {Dimensions} from 'react-native';
import {BarChart} from 'react-native-chart-kit';
import {View, Text, ScrollView} from 'native-base';
import {Heading, BottomView, CommonTabView} from '../../common';

export const Trend = ({navigation,route}) => {
  const height = Dimensions.get('window').height;
  const width = Dimensions.get('window').width;
  
  const data = {
    labels: ['01', '02', '03', '04', '05'],
    datasets: [
      {
        data: [Math.random() * 100,Math.random() * 100,Math.random() * 100,Math.random() * 100,Math.random() * 100],
      },
    ],
  };
  
  const chartConfig = {
    backgroundGradientFrom: "#fff",
    backgroundGradientTo: "#fff",
    barPercentage: 0.6,
    height:5000,
    fillShadowGradient: `#01BA88`,
    fillShadowGradientOpacity: 1,
    decimalPlaces: 0,
    color: (opacity = 1) => `#01BA88`,
    labelColor: (opacity = 1) => `#01BA88`,
    style: {
      borderRadius: 16,
    },
    fromZero:true,
  };

  const FirstRoute = () => (
    <View alignItems="center" justifyContent="center">
      <BarChart
        style={{
          marginVertical: 8,
          borderRadius: 16,
          backgroundColor: '#fff',
          marginTop: 10,
        }}
        data={data}
        width={(width * 90) / 100}
        height={(height * 40) / 100}
        chartConfig={chartConfig}
        verticalLabelRotation={0}
        withVerticalLabels={true}
        withHorizontalLabels={false}
        withInnerLines={false}
      />
    </View>
  );

  const SecondRoute = () => (
    <View alignItems="center" justifyContent="center">
      <BarChart
        style={{
          marginVertical: 8,
          borderRadius: 16,
          backgroundColor: '#fff',
          marginTop: 10,
        }}
        data={data}
        width={(width * 90) / 100}
        height={(height * 40) / 100}
        chartConfig={chartConfig}
        verticalLabelRotation={0}
        withVerticalLabels={true}
        withHorizontalLabels={false}
        withInnerLines={false}
      />
    </View>
  );

  const ThirdRoute = () => (
    <View alignItems="center" justifyContent="center">
      <BarChart
        style={{
          marginVertical: 8,
          borderRadius: 16,
          backgroundColor: '#fff',
          marginTop: 10,
        }}
        data={data}
        width={(width * 90) / 100}
        height={(height * 40) / 100}
        chartConfig={chartConfig}
        verticalLabelRotation={0}
        withVerticalLabels={true}
        withHorizontalLabels={false}
        withInnerLines={false}
      />
    </View>
  );

  return (
    <View height="100%" position="relative">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View padding={3} bgColor={'#FAFAFA'}>
          <Heading
            headingTitle="Your Activity Trend"
            headingtext="Hello, name!"
          />
          <View
            marginTop={7}
            borderRadius={10}
            height={(height * 10) / 100}
            width="100%"
            bgColor="#FFFFFF" justifyContent='center'>
            <View padding={3} flexDirection="row" alignItems='center'>
              <View bgColor={route.params.iconbg} borderRadius={10} alignItems='center' justifyContent='center' width={10} height={10}>
                {route.params.iconName}
              </View>
              <View marginLeft={3}>
                <Text color="#8D9099" fontSize={12} letterSpacing={1}>
                  {route.params.title}
                </Text>
                <Text color="#252528" fontSize={18} letterSpacing={1}>
                  {route.params.desc}
                  {/* <Text color="gray.200" fontSize={14}>
                    Steps
                  </Text> */}
                </Text>
              </View>
              <View
                position="absolute"
                right={'4%'}
                top={'15%'}
                bgColor="#DCDFEB"
                borderRadius={100}
                width={50}
                height={50}></View>
            </View>
          </View>
          <View bgColor={'#FAFAFA'} width={'100%'} height={(height * 60) / 100}>
            <CommonTabView
              navigation={navigation}
              FirstRoute={FirstRoute}
              SecondRoute={SecondRoute}
              ThirdRoute={ThirdRoute}
              title1="Weekly"
              title2="Daily"
              title3="Monthly"
            />
          </View>
        </View>
      </ScrollView>
      <View position="absolute" bottom={0} width="100%">
        <BottomView Navigation={navigation} name="Home" />
      </View>
    </View>
  );
};
