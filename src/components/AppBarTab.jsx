import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Link } from "react-router-native";
import Text from './Text';

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    tab: {
        //
    }
});

const AppBarTab = (props) => {
    return <View style={styles.container}>
        <TouchableWithoutFeedback>
            <Link to={props.link}>
                <View><Text fontWeight='bold' color='primary'>{props.text}</Text></View>
            </Link>
        </TouchableWithoutFeedback>
    </View>;
};

export default AppBarTab;



<Text>About</Text>

