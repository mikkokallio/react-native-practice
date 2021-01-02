import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

const RepositoryItem = (props) => {
    return (
        <TouchableHighlight
            key={props.item.key}
            onShowUnderlay={props.separators.highlight}
            onHideUnderlay={props.separators.unhighlight}>
            <View style={{ backgroundColor: 'white' }}>
                <Text>Full name: {props.item.fullName}</Text>
                <Text>Description: {props.item.description}</Text>
                <Text>Language: {props.item.language}</Text>
                <Text>Forks: {props.item.forksCount}</Text>
                <Text>Stars: {props.item.stargazersCount}</Text>
                <Text>Avg rating: {props.item.ratingAverage}</Text>
                <Text>Reviews: {props.item.reviewCount}</Text>
            </View>
        </TouchableHighlight>
    );
};

export default RepositoryItem;