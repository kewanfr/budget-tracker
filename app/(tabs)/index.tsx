import { Image, StyleSheet, Platform, Text, View } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaView } from 'react-native-safe-area-context';
// import {Picker, PickerIOS} from '@react-native-picker/picker';
import { useState } from 'react';
import RNPickerSelect from 'react-native-picker-select';

import { DatePicker } from '@/components/nativewindui/DatePicker';
import { Picker, PickerItem } from '@/components/nativewindui/Picker';



export default function HomeScreen() {
  const [date, setDate] = useState(new Date());
  const [picker, setPicker] = useState('blue');

  return (
    <SafeAreaView style={styles.container}>
      {/* Page Ajout d'une dépense (formulaire) */}
      
      {/* <ThemedView style={styles.titleContainer}> */}
        <Text style={styles.pageTitle}>Ajout d'une dépense</Text>

        <HelloWave />

        <View style={styles.catSelectContainer}>
          <Text>Catégorie</Text>
          
          {/* <Picker
            selectedValue={selectedLanguage}
            style={{ height: 50, width: 'auto' }}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedLanguage(itemValue)
            }>
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker> */}
          <Picker selectedValue={picker} onValueChange={(itemValue) => setPicker(itemValue)}>
            <PickerItem
              label="Red"
              value="red"
              color="red"
            />
            <PickerItem
              label="Blue"
              value="blue"
              color="blue"
            />
          </Picker>
          <DatePicker
            value={date}
            mode="datetime"
            onChange={(ev) => {
                setDate(new Date(ev.nativeEvent.timestamp));
            }}
            />

        </View>

        {/* Form Select for category */}
        {/* <ThemedText>Catégorie</ThemedText> */}
        {/* <ThemedView>
          <Text>Form Select</Text> */}

          {/* Form Input for amount */}
      {/* </ThemedView> */}

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  catSelectContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    // display: 'flex',
    gap: 8,
  },
  container: {
    flex: 1,
    // backgroundColor: 'black',
    alignItems: 'center',
    // color: 'white',
    backgroundColor: 'grey',
    color: 'black',

    // justifyContent: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
