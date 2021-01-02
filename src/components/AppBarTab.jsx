import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Constants from 'expo-constants';
import Text from './Text';
import theme from './theme';

const styles = StyleSheet.create({
    container: {
    },
    tab: {
        //
    }
});

const AppBarTab = () => {
    return <View style={styles.container}>
        <TouchableWithoutFeedback>
            <Text fontWeight='bold' color='textSecondary'>Repositories</Text>
        </TouchableWithoutFeedback>
    </View>;
};

export default AppBarTab;