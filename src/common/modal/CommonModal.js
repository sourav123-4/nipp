import { Modal, View,Text, Center, Button } from 'native-base';
import React, {useState} from 'react';
import Logo from '../../assets/images/Logo.svg';
import { CommonButton } from '../button/Button';

export const CommonModal = ({navigation, setRefresh}) => {
    const [showModal, setShowModal] = useState(true);
    const onClick = ()=>{
      setShowModal(!showModal)
    }
    console.log("show modal",showModal)
  return (
    // <Center bgColor={'white'}>
      <Modal isOpen={showModal} opacity={1}>
        <Modal.Content maxWidth="400px" bgColor='white' borderBottomWidth={0}>
          <Modal.Header bgColor={'white'} borderBottomWidth={0} alignItems='center' justifyContent='center'><Logo/></Modal.Header>
          <Modal.Body borderBottomWidth={0}>
            <Text fontSize={16} textAlign='center' color='black'>Your data has been fetched successfully.</Text>
          </Modal.Body>
          <Modal.Footer alignItems={'center'} justifyContent='center'  bgColor={'white'} borderTopWidth={0}>
            <CommonButton
                onClick={onClick}
                setRefresh={setRefresh}
                width='100%'
                name='Ok'
                bgColor={'primary.20'}
                borderRadius={35}
                fontSize={15}
                fontWeight={'bold'}
                padding={4}
                navigation={navigation}
                navigateToPage="Home"
            />
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    // </Center>
  );
};
