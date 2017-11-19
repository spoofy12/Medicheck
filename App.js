import React from 'react';
import { StyleSheet,
         Text, 
         View, 
         Button, 
         Image, 
         KeyboardAvoidingView
       } from 'react-native';
       
import LoginForm from './screens/LoginForm';
import RegisterForm from './screens/RegisterForm';
import MedicationForm from './screens/MedicationForm';
import {StackNavigator} from 'react-navigation';



class HomeScreen extends React.Component {
  static navigationOptions={
    title:'Home'
  };
  
  render() {
    const {navigate}= this.props.navigation;
    
    return (
      
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
      
	      <View style={styles.logoContainer}>
	        <Image
	          style={styles.logo}
	          source={{uri: 'https://i.pinimg.com/originals/d8/63/12/d86312e1d2bffd7e859366b51877fca1.jpg'}}
	        />
	        
	        <Text style={styles.title}>
	          Welcome to Medicheck, please enter your details below.
	        </Text>
	      
	      </View>
	      
	      <View style={styles.formContainer}>
	        <LoginForm/>
	      </View>
	      
	      <View style={styles.logoContainer}>
	        
	        <Text style={styles.title}>
	          Dont Have an Account? Register Here
	        </Text>
	        
	        <View style={styles.button}>
	          <Button
	            onPress={() => navigate('Registration')}
	            title="Register"
	          />
	        </View>
	        
	      </View>
      
      </KeyboardAvoidingView>
    );
  }
}

class RegistrationScreen extends React.Component{
  static navigationOptions={
    title:'Register',
   
  };
  
  render(){
    return(
        <View style={styles.formContainer}>
          <RegisterForm />
        </View>
    );
  }
}

class MedicationScreen extends React.Component{
  static navigationOptions={
    title:'Medication',
   
  };
  
  render(){
    return(
        <View style={styles.formContainer}>
          <MedicationForm />
        </View>
    );
  }
}


export const App= StackNavigator({
  Home: {screen: HomeScreen},
  Registration: {screen: RegistrationScreen},
  Medication: {screen: MedicationScreen},
  }
);

export default class App1 extends React.Component{
  render(){
    return <App />
  }
}
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#33FF99',
  },
  logoContainer:{
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  logo: {
    width:120,
    height: 100
  },
  title: {
    color:'#3386FF',
    marginTop: 10,
    width: 160,
    textAlign: 'center',
    opacity: 0.9,
  },
  button: {
    width:150,
    height: 100
  }
});