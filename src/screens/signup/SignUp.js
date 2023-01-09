import React, {useState} from 'react';
import {View,Button,Modal,Text, Input, Pressable} from 'native-base';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Logo from '../../assets/images/Logo.svg';
import {CommonButton, AuthLayout} from '../../common';
import LockIcon from '../../assets/images/icon-lock.svg';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
Icon.loadFont();

export const SignUp = AuthLayout(({navigation}) => {
  const [isDatePickerVisible,setIsDatePickerVisible] = useState(false)
  const [imageUri, setImageUri] = useState('');
  const [open, setOpen] = useState(false)
  const [imageGalaryUri, setImageGalaryUri] = useState('');
  const [date, setDate] = useState()
  const options = {
    saveToPhotos: true,
    mediaType: 'photo',
  };

  const openCamera = () => {
    launchCamera(options, res => {
      if (res.didCancel) {
        console.log('user canceled');
      } else if (res.errorMessage) {
        console.log('Image error', res.errorMessage);
      } else if(res.assets) {
        setImageUri(res?.assets[0]?.uri);
      }
    });
  };

  const openGalary = () => {
    launchImageLibrary(options, res => {
      if (res.didCancel) {
        console.log('user canceled');
      } else if (res.errorMessage) {
        console.log('Image error', res.errorMessage);
      } else {
        setImageGalaryUri(res?.assets[0]?.uri);
      }
    });
  };

  const handleConfirm = selectedDate => {
    // console.log('date', typeof date1);
    setDate(selectedDate);
    setIsDatePickerVisible(false)
  };

  return (
    <View>
      <View paddingTop={10} paddingBottom={10} paddingLeft={3} paddingRight={3}>
        <View
          alignItems={'center'}
          justifyContent={'center'}
          paddingBottom={10}>
          <Logo />
        </View>
        <View
          flexDirection={'row'}
          flexWrap={'wrap'}
          justifyContent={'space-between'}>
          <Input
            textAlign={'center'}
            placeholder={'First Name'}
            borderColor={'primary.20'}
            borderRadius={30}
            marginBottom={5}
            type="text"
            borderWidth={1}
            padding={3}
            fontWeight={'bold'}
            fontSize={14}
            width={'49%'}
            color={'#151624'}
            bgColor={'white'}
            _focus={{borderColor:'primary.20'}}
          />
          <Input
            textAlign={'center'}
            placeholder={'Last Name'}
            borderColor={'primary.20'}
            borderRadius={30}
            marginBottom={5}
            type="text"
            width={'49%'}
            borderWidth={1}
            padding={3}
            fontWeight={'bold'}
            fontSize={14}
            color={'#151624'}
            bgColor={'white'}
            _focus={{borderColor:'primary.20'}}
          />
        </View>
        <View
          flexDirection={'row'}
          flexWrap={'wrap'}
          justifyContent={'space-between'}>
          <Input
            keyboardType='numeric'
            textAlign={'center'}
            placeholder={'Height ft'}
            borderColor={'primary.20'}
            borderRadius={30}
            marginBottom={5}
            type="text"
            width={'49%'}
            borderWidth={1}
            padding={3}
            fontWeight={'bold'}
            fontSize={14}
            color={'#151624'}
            bgColor={'white'}
            _focus={{borderColor:'primary.20'}}
          />
          <Input
          keyboardType='numeric'
            textAlign={'center'}
            placeholder={'Height in'}
            borderColor={'primary.20'}
            borderRadius={30}
            marginBottom={5}
            type="text"
            width={'49%'}
            borderWidth={1}
            padding={3}
            fontWeight={'bold'}
            fontSize={14}
            color={'#151624'}
            bgColor={'white'}
            _focus={{borderColor:'primary.20'}}
          />
        </View>
        <Input
          placeholder={'Weight(lbs)'}
          borderColor={'primary.20'}
          borderRadius={30}
          marginBottom={5}
          type="text"
          borderWidth={1}
          padding={3}
          fontWeight={'bold'}
          paddingLeft={5}
          fontSize={14}
          color={'#151624'}
          bgColor={'white'}
          _focus={{borderColor:'primary.20'}}
        />
        <Input
          placeholder={'Enter Your Email'}
          borderColor={'primary.20'}
          borderRadius={30}
          marginBottom={5}
          paddingLeft={5}
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
          placeholder={'Birth Date'}
          borderColor={'primary.20'}
          borderRadius={30}
          marginBottom={5}
          type="text"
          borderWidth={1}
          paddingLeft={5}
          padding={3}
          fontWeight={'bold'}
          fontSize={14}
          color={'#151624'}
          bgColor={'white'}
          _focus={{borderColor:'primary.20'}}
          InputRightElement={
            <Pressable onPress={()=>setIsDatePickerVisible(true)}>
            <Icon
              name="calendar"
              size={22}
              style={{marginRight: 20}}
              color="#01BA88"
            />
            </Pressable>
          }
        />
        <Input
          placeholder={'Upload Image'}
          borderColor={'primary.20'}
          borderRadius={30}
          marginBottom={5}
          type="text"
          borderWidth={1}
          padding={3}
          fontWeight={'bold'}
          fontSize={14}
          paddingLeft={5}
          color={'#151624'}
          bgColor={'white'}
          _focus={{borderColor:'primary.20'}}
          InputRightElement={
            <Pressable onPress={()=>setOpen(true)}>
            <Icon
              name="cloud-upload"
              size={22}
              style={{marginRight: 20}}
              color="#01BA88"
            />
            </Pressable>
          }
        />
        <Input
          borderColor={'primary.20'}
          borderWidth={1}
          placeholder={'Password'}
          type="password"
          borderRadius={30}
          bgColor={'white'}
          color={'#151624'}
          fontSize={14}
          padding={3}
          fontWeight={'bold'}
          marginBottom={5}
          _focus={{borderColor:'primary.20'}}
        />
        <Input
          borderColor={'primary.20'}
          borderWidth={1}
          placeholder={'Confirm Password'}
          type="password"
          borderRadius={30}
          bgColor={'white'}
          color={'#151624'}
          fontSize={14}
          padding={3}
          fontWeight={'bold'}
          _focus={{borderColor:'primary.20'}}
        />
      </View>
      <View marginTop={15}>
        <CommonButton
          bgColor={'primary.20'}
          name={'Sign Up'}
          borderRadius={35}
          fontSize={15}
          fontWeight={'bold'}
          padding={4}
          margin={5}
          navigateToPage={'Menu'}
          navigation={navigation}
        />
      </View>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={()=>setIsDatePickerVisible(false)}
      />
      <Modal isOpen={open} onClose={() => setOpen(false)} 
    >
        <Modal.Content maxWidth="350" maxH="212">
          <Modal.CloseButton />
          <Modal.Header>Choose one</Modal.Header>
          <Modal.Body>
            Open Camera if you want to click photo or you can open Galary if u have already photograph
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              {/* <Button variant="ghost" colorScheme="blueGray" onPress={() => {
              setOpen(false);
            }}>
                Cancel
              </Button> */}
              <Button onPress={() => {
              setOpen(false);
              openCamera();
            }} bgColor='primary.20'>
                Camera
              </Button>
              <Button onPress={() => {
              setOpen(false);
              openGalary();
            }} bgColor='primary.20'>
                Galary
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </View>
  );
},'SignUp');
