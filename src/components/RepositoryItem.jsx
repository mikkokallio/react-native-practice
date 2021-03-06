import React from 'react';
import { View, Text, Image, StyleSheet, TouchableHighlight, TouchableWithoutFeedback } from 'react-native';
import * as Linking from 'expo-linking';

const styles = StyleSheet.create({
    button: {
        marginTop: 10,
        marginHorizontal: 10,
        padding: 4,
        backgroundColor: 'blue',
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: "#787878",
        borderRadius: 6,
    },
    item: {
        /*height: 150,*/
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 10,
        overflow: "hidden",
    },
    lang: {
        backgroundColor: '#0000ff',
        color: '#ffffff',
        padding: 4,
        borderRadius: 6,
        overflow: "hidden",
    },
    horizontal: {
        flexDirection: 'row',
    },
    figure: {
        padding: 10,
        flexGrow: 1,
    },
    center: {
        textAlign: 'center',
    },
    centerbold: {
        fontWeight: 'bold',
        textAlign: 'center',
    },
    left: {
        flexGrow: 0,
        padding: 10,
    },
    right: {
        flexGrow: 1,
        padding: 10
    }
});

const format = n => n > 999 ? (n / 1000).toFixed(1) + 'k' : n

const RepositoryItem = (props) => {
    if (!props.item) return null;

    const handlePress = () => {
        Linking.openURL(props.item.url);
    };

    return (
        <TouchableHighlight
            style={styles.item}
            key={props.item.key}
            onPress={props.press}
        //onShowUnderlay={!props.single && props.separators.highlight}
        //onHideUnderlay={!props.single && props.separators.unhighlight}
        >
            <View style={{ backgroundColor: '#eeeeee' }}>
                <View style={styles.horizontal}>
                    <View style={styles.left}>
                        <Image
                            style={styles.avatar}
                            source={{
                                uri: props.item.ownerAvatarUrl,
                            }}
                        />
                    </View>
                    <View style={styles.right}>
                        <Text style={{ fontWeight: 'bold' }} testID="name">{props.item.fullName}</Text>
                        <Text testID="description">{props.item.description}</Text>
                        <View style={styles.horizontal}>
                            <Text style={styles.lang} testID="language">{props.item.language}</Text>
                            <Text></Text>
                        </View>
                    </View>
                </View>
                <View style={styles.horizontal}>
                    <View style={styles.figure}>
                        <Text style={styles.centerbold} testID="star">{format(props.item.stargazersCount)}</Text>
                        <Text style={styles.center}>Stars</Text>
                    </View>
                    <View style={styles.figure}>
                        <Text style={styles.centerbold} testID="fork">{format(props.item.forksCount)}</Text>
                        <Text style={styles.center}>Forks</Text>
                    </View>
                    <View style={styles.figure}>
                        <Text style={styles.centerbold} testID="review">{format(props.item.reviewCount)}</Text>
                        <Text style={styles.center}>Reviews</Text>
                    </View>
                    <View style={styles.figure}>
                        <Text style={styles.centerbold} testID="rate">{props.item.ratingAverage}</Text>
                        <Text style={styles.center}>Rating</Text>
                    </View>
                </View>
                {props.single && <TouchableWithoutFeedback>
                    <View><Text style={styles.button} onPress={handlePress}>Open in GitHub</Text></View>
                </TouchableWithoutFeedback>}
            </View>
        </TouchableHighlight>
    );
};

export default RepositoryItem;