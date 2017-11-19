import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import * as firebase from 'firebase';

   // Initialize Firebase
const firebaseConfig = {
		apiKey: 'AIzaSyDl_UAMSe8yCzcpq2jtF9mHMOhp0V0-RqU',
		authDomain: 'medicheck-8ada1.firebaseapp.com',
    /*databaseURL: "https://streetfrench-a84df.firebaseio.com",
    projectId: "streetfrench-a84df",
    storageBucket: "streetfrench-a84df.appspot.com",
    messagingSenderId: "551358813028"*/
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

class FirebaseReactNativeSample extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      })
    };
    this.medDataRef = this.getRef().child('medicheck-8ada1');
  }

  getRef() {
    return firebaseApp.database().ref('medicheck-8ada1/medicationDetails/');
  }

  listenFormedicheck-8ada1(medDataRef) {
    medDataRef.on('value', (snap) => {

      // get children as an array
      var medicheck-8ada1 = [];
      snap.forEach((child) => {
        medicheck-8ada1.push({
          nameOfMed: child.val().nameOfMedication,
          _key: child.key
        });
      });

      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(medicheck-8ada1)
      });

    });
  }

  componentDidMount() {
    this.listenFormedicheck-8ada1(this.medDataRef);
  }

  render() {
    return (
      <View style={styles.container}>

        <StatusBar title="Medication" />

        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderItem.bind(this)}
          enableEmptySections={true}
          style={styles.listview}/>


          </View>
        )
      }
  _renderItem(item) {

    return (
      <ListItem item={item}/>
    );
  }

}