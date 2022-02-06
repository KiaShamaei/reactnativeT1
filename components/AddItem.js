import React, { useState } from 'react';
import { View,StyleSheet,Text,TouchableOpacity,TextInput } from "react-native";
import Icon from 'react-native-vector-icons/dist/FontAwesome';
export const AddItem = (props) => {
	const [itemText, setItemText] = useState("")
	const handleChange = (prev)=>setItemText(prev) ;
	return (
		<View>
			<TextInput 
			placeholder='enter Items...' 
			style={styles.input}
			onChangeText={handleChange}
			/>
			<TouchableOpacity 
			style={styles.btn}
			onPress={()=>props.addItems(itemText)}
			>
				<Text style={styles.textbtn}>
				<Icon
					color='crimson'
					name="plus"
					size={20}
					name="plus"
				/>add items</Text>		
			</TouchableOpacity>
		</View>
	);
};
const styles = StyleSheet.create({
	input: {
		height : 60,
		padding : 8 ,
		margin : 5
	},
	btn: {
		backgroundColor  : "#c2bad8",
		padding : 9 ,
		margin: 5
		
	},
	textbtn: {
		color  :'darkslateblue',
		fontSize :20 ,
		textAlign : 'center'
	}
})