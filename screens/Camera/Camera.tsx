import React, { createRef, useEffect, useRef, useState } from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { Camera, CameraCapturedPicture } from 'expo-camera';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Entypo, AntDesign } from '@expo/vector-icons';

const CameraScreen = ({ navigation }: any) => {
  const [hasPermission, setHasPermission] = useState<boolean>(false);
  const [picTaken, setIfPicTaken] = useState<boolean>(false);
  const [type, setType] = useState<'back' | 'front'>("back");
  const { height, width } = Dimensions.get('window');
  const [picture, setPicture] = useState<CameraCapturedPicture | undefined>(undefined);
  let cameraRef: Camera | null = null;

  const shoot = async () => {
    const pic: CameraCapturedPicture | undefined = await cameraRef?.takePictureAsync();
    setPicture(pic);
    setIfPicTaken(true);
  };

  const dismiss = () => {
    setPicture(undefined);
    setIfPicTaken(false);
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  return (
    !hasPermission ? (
      <Text>ALED t'es un fdp</Text>
    ) : !picTaken ? (
      <SafeAreaView>
        <Camera
          style={[styles.container, { height: width / 9 * 16 }]}
          ratio='9:16'
          type={type}
          ref={e => cameraRef = e}
        >
          <TouchableOpacity style={styles.buttonPrimary} onPress={shoot}>
            <Entypo name="camera" size={30} color="#ddd" style={{ padding: 25 }} />
          </TouchableOpacity>
        </Camera>
      </SafeAreaView>
    ) : (
      <SafeAreaView style={styles.container}>
        <ImageBackground source={{ uri: picture?.uri }} style={[styles.container, { height: width / 9 * 16 }]}>
          <TouchableOpacity style={styles.buttonPrimary} onPress={dismiss}>
            <AntDesign name="close" size={30} color="#ddd" style={{ padding: 25 }} />
          </TouchableOpacity>
        </ImageBackground>
      </SafeAreaView>
    )
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1D1D29',
    width: '100%'
  },
  buttonPrimary: {
    backgroundColor: '#1067d8',
    height: 80,
    width: 80,
    borderRadius: 50
  }
});

export default CameraScreen;