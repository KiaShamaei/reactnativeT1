import React from 'react';
import { View,Text,TouchableOpacity , StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
export const ListItem = (props) => {
	return (
		<TouchableOpacity style={styles.listItem}>
			<View style={styles.listItemView} >
				<Text>{props.item.text}</Text>
				<Icon color='crimson' name="remove" size={20} />
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	listItem : {
		padding : 15,
		backgroundColor : "#fdfdfd",

	},
	listItemView : {
		flexDirection : 'row',
		justifyContent : 'space-between'
		
	}
})