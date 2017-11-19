import React from 'react';
import { StyleSheet, 
         View, 
         TextInput, 
         Text,  
         Button, 
         Alert
       } from 'react-native';
import CheckBox from 'react-native-checkbox';

export default class MedicationForm extends React.Component {
  
  ButtonPress = () => {
    
  };
  
  render() {
    return (
      <View style={styles.container}>
         <View style={styles.list}>
			<CheckBox
			  label='Panadol'
			  checked={true}
			  onChange={(checked) => console.log('I am checked', checked)}
			/>
			</View>
			
			<View style={styles.button}>
			<Button
            title="Add"
            onPress={this.ButtonPress}
          />
         </View>
         
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 520,
    backgroundColor: '#33FF99',
    padding: 20
  },
  list: {
    alignItems: 'flex-start',
  },
  button: {
  	 alignItems: 'center',
  	 paddingTop:400
  },
});