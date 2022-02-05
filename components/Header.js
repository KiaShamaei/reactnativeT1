import { View , StyleSheet, Text} from "react-native";

import React from 'react';




const Header = (props) => {
	return ( 
		<View style={styles.headers}>
			<Text style={styles.text}>{props.title}</Text>

		</View>
	 );
}
Header.defaultProps = {
	title : 'this is Shopping list ...'
}
const styles = StyleSheet.create({
	headers : {
		backgroundColor : 'blue',
		height : 60 ,
		color : "#fff"
	}, 
	text : {
		fontSize : 23,
		textAlign : 'center',
		color : '#fff',
		padding : 10
	}
})
 
export default Header;