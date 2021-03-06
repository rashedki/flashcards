import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { purple, white } from '../utils/colors';

class DeckItem extends Component {
	render() {
		return (
			<TouchableOpacity style={styles.item} onPress={this.props.showDetail}>
				<View>
					<Text style={styles.itemHeader}>{this.props.title}</Text>
						<Text style={styles.itemFooter}>
							{
								this.props.noOfCards > 1 ? `${this.props.noOfCards} cards` :
								`${this.props.noOfCards} card`}
						</Text>
				</View>
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	item: {
		alignSelf: 'stretch',
		borderWidth: 1,
		padding: 10,
		borderRadius: 5,
		borderColor: purple,
		margin: 10,
		backgroundColor: purple
	},
	itemHeader: {
		textAlign: 'center',
		fontSize: 25,
		color: white
	},
	itemFooter: {
		textAlign: 'center',
		fontSize: 20,
		color: white
	}
});

export default DeckItem;
