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
        <TouchableWithoutFeedback onPress={() => props.press()}>
        <View>{!props.link && <View><Text fontWeight='bold' color='primary'>{props.text}</Text></View>}

            {props.link && <Link to={props.link}>
                <View><Text fontWeight='bold' color='primary'>{props.text}</Text></View>
            </Link>}</View>
        </TouchableWithoutFeedback>
    </View>;
};

export default AppBarTab;