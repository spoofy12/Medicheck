import React from 'react';
import { StyleSheet, 
         View, 
         TextInput, 
         Text, 
         Image, 
         Button, 
         Alert,
         KeyboardAvoidingView 
       } from 'react-native';

export default class RegisterForm extends React.Component {
  ButtonPress = () => {
    Alert.alert(
      this.state.email, 
      this.state.password+
      this.state.fName,
    );
  };
  
  constructor(props) {
    super(props);
 
    this.state = {
 
      email: this.props.email,
      password: this.props.password,
      fName: this.props.fName,
 
    }
  }
  
  onChangeName(fName){
  	this.setState({fName: fName});
  }
  onChangeMail(email){
  	this.setState({email: email});
  }
  onChangePass(password){
  	this.setState({password: password});
  }
  
  render() {
    return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
    	<View style={styles.container}>
        <View style={styles.logoContainer}>
         
          <Image
            style={styles.logo}
            source={{uri: 'https://i.pinimg.com/originals/d8/63/12/d86312e1d2bffd7e859366b51877fca1.jpg'}}
          />
        
          <Text style={styles.title}>
            Welcome to Medicheck, please enter your details below.
          </Text>
      
        </View>
      
     <View style={styles.container}>
       <TextInput 
         style={styles.input}
         placeholder="First Name"
         fName = {this.state.fName}
         onChangeText = {(fName) => this.onChangeName(fName)}
        
         placeholderTextColor="#3386FF"
         returnKeyType="next" //changes what return key looks like
         onSubmitEditing={()=>this.emailInput.focus()}// this will jump to password
         autoCapitalize="none"
         autoCorrect={false}
       />
       <TextInput 
         style={styles.input}
         placeholder="username or email"
         email = {this.state.email}
         onChangeText = {(email) => this.onChangeMail(email)}
        
         placeholderTextColor="#3386FF"
         returnKeyType="next" //changes what return key looks like
         onSubmitEditing={()=>this.passwordInput.focus()}// this will jump to password
         keyboardType="email-address"//changes keyboard to include @ signs
         autoCapitalize="none"
         autoCorrect={false}
         ref={(input)=> this.emailInput=input}
       />
        
       <TextInput 
         style={styles.input}
         placeholder="password"
         password = {this.state.password}
         onChangeText = {(password) => this.onChangePass(password)}
        
         placeholderTextColor="#3386FF"
         returnKeyType="go" //Changes what return key looks like
         secureTextEntry
         ref={(input)=> this.passwordInput=input}
       />
       <Button
         title="Register"
         onPress={this.ButtonPress}
       />
     </View>
     </View>
     </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 520,
    backgroundColor: '#33FF99',
    alignItems: 'center',
    padding: 20
  },
  input: {
    height: 40,
    width: 200,
    backgroundColor: 'rgba(255,255,255,0.5)',
    marginBottom:10,
    color:'#3386FF',
    paddingHorizontal:10
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