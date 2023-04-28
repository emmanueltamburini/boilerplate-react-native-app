import React, {useEffect, useRef} from 'react';
import {Alert, SafeAreaView, View} from 'react-native';
import {ThemeText} from '../../components/ThemeComponents/ThemeText';
import {stylesFunction} from './styles';
import {InputTheme} from '../../components/ThemeComponents/InputTheme';
import {useForm} from '../../hooks/useForm';
import {ThemeButton} from '../../components/ThemeComponents/ThemeButton';
import {removeData, storeObjectData, getObjectData} from '../../helpers/utils';

type FormType = {
  name: string;
};

export const TestScreen3 = () => {
  const styles = stylesFunction();
  const {name, onChange, form, setFormValue} = useForm<FormType>({name: ''});

  useEffect(() => {
    loadDataStatic.current();
  }, []);

  const loadData = async () => {
    const currentForm = await getObjectData('form');
    setFormValue({...(currentForm as FormType)});
  };

  const loadDataStatic = useRef(loadData);

  const onChangeFunction = (value: string, field: keyof FormType) => {
    onChange(value, field);
  };

  const onSave = () => {
    storeObjectData('form', form);
    Alert.alert('Form saved', 'Form has saved in phone');
  };

  const onDelete = () => {
    removeData('form');
    setFormValue({name: ''});
    Alert.alert('Form deleted', 'Form has deleted in phone');
  };

  return (
    <SafeAreaView style={styles.container}>
      <InputTheme
        onChange={value => onChangeFunction(value, 'name')}
        value={name}
        placeholder="Type your name"
        containerStyle={styles.textInput}
        label="Name"
      />
      <View style={styles.buttonContainer}>
        <ThemeButton
          title="Save"
          style={styles.button}
          onPress={onSave}
          success
        />
        <View style={styles.spacer} />
        <ThemeButton
          title="Delete"
          style={styles.button}
          onPress={onDelete}
          danger
        />
      </View>
      <ThemeText>{JSON.stringify(form, null, 5)}</ThemeText>
    </SafeAreaView>
  );
};
