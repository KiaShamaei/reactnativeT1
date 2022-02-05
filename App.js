

import React from 'react';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Header from './components/Header';



const App = ()=>{
	return (
		<View style={styles.container}>
			<Header title={'this is shopping list from app'}/>
		</View>
	)
}
const styles = StyleSheet.create({
	container : {
		flex : 1 ,
		
	}
})
export default App ;