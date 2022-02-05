

import React , {useState} from 'react';

import {
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';
import Header from './components/Header';
import uuid from 'react-native-uuid';
import { ListItem } from './components/ListItem';





const App = ()=>{
	const renderOpt = ({item})=>{return <ListItem item={item}/>}
	const [items , setItems] = useState([
		{id : 1 , text : "chips"},
		{id : 12 , text : "limon"},
		{id : 123 , text : "banana"},
		{id : uuid.v4(), text : "appel"},
	])
	return (
		<View style={styles.container}>
			<Header title={'this is shopping list from app'}/>
			<FlatList 
			data={items}
			renderItem={renderOpt}
			/>
		</View>
	)
}
const styles = StyleSheet.create({
	container : {
		flex : 1 ,
		
	}
})
export default App ;