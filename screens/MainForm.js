import React from 'react';
import { StyleSheet, 
         View, 
         TextInput, 
         Text,  
         Button, 
       } from 'react-native';

export default class MainForm extends React.Component {
  static navigationOptions= ({navigation}) =>({
		  title: 'Main',	
	}); 
  render() {
    const { navigate } = this.props.navigation;
    
    return (
      <View style={styles.container}>
       
          <Button
            title="Medication"
            //onPress={() => navigate('Medication')}
          />
          <Button
            title="Location"
            //onPress={() => navigate('Location')}
          />
          <Button
            title="Photo"
            //onPress={() => navigate('Photo')}
          />
          <Button
            title="Settings"
            //onPress={() => navigate('Settings')}
          />
          
     </View>
  )}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
});