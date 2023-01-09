import React from 'react';
import {Button, Text} from 'native-base';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
Icon.loadFont();

export const CommonButton = ({
  name,
  icon,
  iconColor,
  fontSize,
  fontWeight,
  bgColor,
  borderRadius,
  padding,
  margin,
  navigation,
  navigateToPage,
  width,
  onClick,
  setRefresh
}) => {
  return (
    <Button
      width={width?width:null}
      onPress={() => {
        navigation?.navigate(navigateToPage)
        onClick? onClick() : null
        setRefresh? setRefresh(false):null
      }}
      bgColor={bgColor ? bgColor : null}
      padding={padding ? padding : null}
      margin={margin ? margin : null}
      borderRadius={borderRadius ? borderRadius : null}
      rightIcon={
        icon ? (
          <Icon
            name={icon ? icon : null}
            color={iconColor ? iconColor : null}
          />
        ) : null
      }>
      <Text
        fontSize={fontSize ? fontSize : null}
        fontWeight={fontWeight ? fontWeight : null}>
        {name}
      </Text>
    </Button>
  );
};
