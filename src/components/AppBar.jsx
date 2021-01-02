import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
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
        <ScrollView horizontal>
            <AppBarTab link='/signin' text='Sign in' />
            <AppBarTab link='/' text='Repositories' />
        </ScrollView>
    </View>;
};

export default AppBar;