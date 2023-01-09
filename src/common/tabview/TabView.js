import {Box, Text, Pressable} from 'native-base';
import {TabView, SceneMap} from 'react-native-tab-view';
import {Dimensions, StatusBar} from 'react-native';
import React, {useState} from 'react';

export const CommonTabView = ({
  FirstRoute,
  SecondRoute,
  ThirdRoute,
  title1,
  title2,
  title3,
}) => {
  const [routes] = useState([
    {
      key: 'first',
      title: title1,
    },
    {
      key: 'second',
      title: title2,
    },
    {
      key: 'third',
      title: title3,
    },
  ]);
  const initialLayout = {
    width: Dimensions.get('window').width,
  };

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
  });

  const [index, setIndex] = useState(1);
  const renderTabBar = props => {
    return (
      <Box
        marginTop={3}
        borderRadius={17}
        flexDirection="row"
        width={'100%'}
        alignSelf={'center'}
        bgColor="#F2F2F2">
        {props.navigationState.routes.map((route, i) => {
          const color = index === i ? 'primary.20' : '#B9B6B5';
          const bgColor = index === i ? 'white' : null;
          return (
            <Box flex={1} alignItems="center" p="3" cursor="pointer" key={i}>
              <Pressable
                bgColor={bgColor}
                alignItems={'center'}
                width={'100%'}
                padding={3}
                borderRadius={16}
                onPress={() => {
                  setIndex(i);
                }}>
                <Text
                  color={color}
                  fontSize={12}
                  fontWeight={400}
                  lineHeight={17}
                  letterSpacing={1}>
                  {route.title}
                </Text>
              </Pressable>
            </Box>
          );
        })}
      </Box>
    );
  };
  return (
    <TabView
      navigationState={{
        index,
        routes,
      }}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      style={{
        marginTop: StatusBar.currentHeight,
      }}
    />
  );
};
