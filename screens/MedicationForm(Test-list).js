import React from 'react';
import { StyleSheet, 
         View, 
         TextInput, 
         Text,  
         Button, 
         Alert,
         ListView
       } from 'react-native';

export default class MedicationForm extends React.Component {
  constructor(props) { 
    super(props); 
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}); 
    this.state = { 
      dataSource: ds.cloneWithRows(['Panadol', 'ibuprofen','etc.']), 
      list: this.props.list,
    }; 
  }
  ButtonPress = () => {
    //dataSource={this.state.dataSource}
  };
  onAdd(list){
  	this.setState({list: list});
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.list}>
		      <ListView 
		        dataSource={this.state.dataSource} 
		        renderRow={(rowData) => <Text>{rowData}</Text>} />
			  </View>
			  
			  <View style={styles.button}>
			    <TextInput 
			    style={styles.text}
          placeholder="text"
          list={this.state.list}
          placeholderTextColor="black"
          onChangeText = {(list) => this.onAdd(list)}
          />
			    <Button
            //onPress={() => navigate('MedDetails')}
            onPress={() => this.state(ds.cloneWithRows)}
	          title="Add"
          />
        </View>
         
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 600,
    backgroundColor: '#33FF99',
    padding: 20
  },
  list: {
    paddingTop: 40,
    alignItems: 'flex-start',
  },
  text: {
    alignItems: 'center',
    width: 250,
  },
  button: {
  	 alignItems: 'center',
  	 paddingTop: 300
  },
});