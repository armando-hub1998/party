import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
// import SelectDropdown from 'react-native-select-dropdown';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, Image, Picker, selectedValue, } from 'react-native';
import DatePicker from 'react-native-datepicker'


export default function AppForm() {
  const [selectedValue, setSelectedValue] = useState("java");
  const values = ["willian", "java"];
  const [date, setDate] = useState(new Date());

  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Cadastrar Evento</Text> */}
      <View style={styles.inputContainer}> 
    
            <DatePicker
        style={{width: 200 , marginLeft:20}}
        
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
          placeholder="Titulo da Festa"
          clearButtonMode="always" />  
             <TextInput 
          style={styles.input} 
        
          placeholder="Localização"
          clearButtonMode="always" />  
             <TextInput 
          style={styles.input } 
          placeholder="Descrição do Evento"
          clearButtonMode="always" />  
            
     

     
        <TouchableOpacity style={styles.button}> 
          <Text style={styles.buttonText}>Avançar</Text> 
        </TouchableOpacity> 
      </View>
      <StatusBar style="light" />
    </View>
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
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignItems: 'stretch',
    backgroundColor: 'white'
  },
  Picker:{
  display:'flex',
  justifyContent:'flex-start',
  marginTop:2,
   
  },
  input: {
    
    marginTop: 20,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 24,
    fontSize: 16,
    alignItems: 'stretch',
    borderColor:'red'
    
  },
  button: {
    marginTop: 10,
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
  },
  datastyle:{
      marginTop:"20%",
      marginBottom: 40,
      height: 100,
      width:"70%",
      justifyContent: 'center',
      alignSelf: 'center'
      
      
      
  }
});