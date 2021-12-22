import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
// import SelectDropdown from 'react-native-select-dropdown';
import { 
    StyleSheet,
    Text,
     View, 
     TextInput,
      TouchableOpacity, 
      ImageBackground, 
      Image, 
      Picker, 
      selectedValue, 
      SafeAreaView,
      
    } from 'react-native';
import DatePicker from 'react-native-datepicker'
import {ImagePickerExample} from '../components/imagePicker/image';

export default function AppForm() {
  const [selectedValue, setSelectedValue] = useState("java");
  const values = ["willian", "java"];
  const [date, setDate] = useState(new Date());
  return (
    <SafeAreaView style={styles.container}>
      
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputnome}
          placeholder="Tipo de Evento"
          clearButtonMode="always" />
        <TextInput
          style={styles.input}
          placeholder="Localização do Evento"
          clearButtonMode="always" />
        <DatePicker
          style={{ width: 200, marginLeft: 20 }}
        
          mode="date"
          placeholder="Data do Evento"
          format="YYYY-MM-DD"
          minDate="2016-05-01"
          maxDate="2016-06-01"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 2,
              marginLeft: 0
            },
            dateInput: {
              marginLeft: 36
            }
            // ... You can check the source to find the other keys.
          }}
          onDateChange={setDate}
        />
        <TextInput
          style={styles.input}
          placeholder="Descrição do Evento"
          clearButtonMode="always" />
 
      </View>
      <ImagePickerExample />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Avançar</Text>
      </TouchableOpacity>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    
  },
 
  title: {

    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 100,
  },
  inputContainer: {
    flex: 1,
    width: '90%',
    height: '100%',
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignItems: 'stretch',
    backgroundColor: 'white'
  },
  Picker: {
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: 2,
   
  },
  input: {
    marginTop: -10,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 24,
    fontSize: 16,
    alignItems: 'stretch'
    
    
  },
  inputnome: {
    marginTop: -10,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 24,
    fontSize: 16,
    alignItems: 'stretch'
    
    
  },
  button: {
    width: '85%',
    height: 60,
    backgroundColor: 'grey',
    borderRadius: 10,
    paddingHorizontal: 24,
    fontSize: 16,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 20,
    shadowOpacity: 20,
    shadowColor: '#ccc',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  }
});