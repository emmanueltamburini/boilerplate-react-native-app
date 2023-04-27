import {ScaledSize} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const bigWidthScreen = (dimensions: ScaledSize) =>
  dimensions.width >= 650;

export const storeData = async (
  key: string,
  value: string,
): Promise<boolean> => {
  try {
    await AsyncStorage.setItem(key, value);
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};

export const storeObjectData = async (
  key: string,
  value: object,
): Promise<boolean> => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};

export const getData = async (key: string): Promise<string | null> => {
  try {
    return await AsyncStorage.getItem(key);
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const getObjectData = async (key: string): Promise<object | null> => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const removeData = async (key: string): Promise<boolean> => {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};
