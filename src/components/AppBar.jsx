import React from 'react';
import { View, StyleSheet, ScrollView, Text, TouchableWithoutFeedback } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab'
import theme from './theme';
import { useQuery } from '@apollo/client';
import { GET_AUTHORIZED_USER } from "../graphql/queries";
import { useContext } from 'react';
import AuthStorageContext from '../contexts/AuthStorageContext';
import { useApolloClient } from '@apollo/client';
import useSignOut from '../hooks/useSignOut';

const isLoggedIn = () => {
    const { loading, error, data } = useQuery(GET_AUTHORIZED_USER, {
        //
    });
    console.log('logged in?', data)

    return data && data.authorizedUser;
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        paddingLeft: 10,
        backgroundColor: theme.colors.backgroundTab,
    },
});

const logOut = async () => {
    console.log('got here!')
    const authStorage = useContext(AuthStorageContext);
    const client = useApolloClient();
    await authStorage.removeAccessToken();
    client.resetStore();
}

const AppBar = () => {
    const [signOut] = useSignOut();

    const onPress = async () => {
        try {
            await signOut();
        } catch (e) {
            console.log(e);
        }
    }

    return <View style={styles.container}>
        <ScrollView horizontal>
            {!isLoggedIn() && <AppBarTab link='/signin' text='Sign in' />}
            {isLoggedIn() && <AppBarTab press={onPress} text='Sign out' />}
            <AppBarTab link='/' text='Repositories' />
        </ScrollView>
    </View>;
};

export default AppBar;