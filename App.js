

import React from 'react';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';



const App = ()=>{
	return (
		<View style={styles.container}>
			<Text style = {styles.textNormal}>this is new App with kia ...</Text>
		</View>
	)
}
const styles = StyleSheet.create({
	container : {
		flex : 1 ,
		justifyContent : 'center' ,
		alignItems : 'center'
	},
	textNormal : {
		color : 'blue',
		fontSize : 10
	}
})
export default App ;