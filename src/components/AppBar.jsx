import React from 'react';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Text from './Text';
import AppBarTab from './AppBarTab'
import theme from './theme';

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        paddingLeft: 10,
        backgroundColor: theme.colors.backgroundTab,
        height: 100,
    },
    tab: {
        //
    }
});

const AppBar = () => {
    return <View style={styles.container}>
        <AppBarTab/>
    </View>;
};

export default AppBar;