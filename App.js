import React, { Component } from 'react';
import { Text, View, Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Decks from './components/Decks';
import CreateDeck from './components/CreateDeck';
import DeckDetail from './components/DeckDetail';
import AddCard from './components/AddCard';
import AppStatusBar from './components/AppStatusBar';
import { Ionicons } from '@expo/vector-icons';
import { purple, white, red } from './utils/colors';
import { createStackNavigator } from 'react-navigation-stack';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import decksReducer from './reducers';
import Quiz from './components/Quiz';
import {setLocalNotification} from './utils/helpers'
import thunk from 'redux-thunk'


const Tabs = createBottomTabNavigator(
	{
		Decks: {
			screen: Decks,
			navigationOptions: {
				tabBarLabel: <Text style={{ fontSize: 15 }}>Decks</Text>,
				tabBarIcon: ({ tintColor }) => <Ionicons name="ios-list" size={30} color={tintColor} />
			}
		},
		CreateDeck: {
			screen: CreateDeck,
			navigationOptions: {
				tabBarLabel: <Text style={{ fontSize: 15 }}>Add Deck</Text>,
				tabBarIcon: ({ tintColor }) => <Ionicons name="ios-add" size={30} color={tintColor} />
			}
		}
	},
	{
		navigationOptions: {
			header: null
		},
		tabBarOptions: {
			activeTintColor: purple,
			style: {
				height: 56,
				backgroundColor: white,
				shadowColor: 'rgba(0, 0, 0, 0.24)',
				shadowOffset: {
					width: 0,
					height: 3
				},
				shadowRadius: 6,
				shadowOpacity: 1
			}
		}
	}
);

const MainNavigation = createStackNavigator({
	Home: {
		screen: Tabs
	},

	AddCard: {
		screen: AddCard,
		navigationOptions: {
			headerTintColor: white,
			title: 'Add Card',
			headerStyle: {
				backgroundColor: purple
			}
		}
	},
  Quiz: {
		screen: Quiz
	},
	DeckDetail: {
		screen: DeckDetail,
		navigationOptions: {
			headerTintColor: white,
			title: 'Deck Detail',
			headerStyle: {
				backgroundColor: purple
			}
		}
	}
});

const AppContainer = createAppContainer(MainNavigation);

class App extends Component {
	render() {
		return (
      <Provider store={createStore(decksReducer, applyMiddleware(thunk))}>
				<View style={{ flex: 1 }}>
					<AppStatusBar backgroundColor={purple} barStyle="light-content" />
					<AppContainer />
				</View>
			</Provider>
		);
	}
}

export default App;
