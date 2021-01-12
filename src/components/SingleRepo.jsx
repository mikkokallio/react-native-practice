import React from 'react';
import useOneRepo from '../hooks/useOneRepo';
import RepositoryItem from './RepositoryItem';
import { useParams } from "react-router-dom";
import { FlatList, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    circle: {
        color: '#20238a',
        fontWeight: 'bold',
        padding: 6,
        borderRadius: 25,
        borderWidth: 5,
        width: 50,
        height: 50,
        borderColor: "#20238a",
        overflow: "hidden",
        textAlign: 'center',
    },
    horizontal: {
        flexDirection: 'row',
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

const SingleRepo = () => {
    const { id } = useParams();
    const { repository } = useOneRepo(id);
    const reviewNodes = repository
        ? repository.reviews.edges.map((edge) => edge.node)
        : [];
    return (
        <FlatList
            data={reviewNodes}
            renderItem={({ item }) => <ReviewItem review={item} />}
            keyExtractor={({ id }) => id}
            ListHeaderComponent={() => <RepositoryItem item={repository} single />}
        />
    );
};

const ReviewItem = ({ review }) => {
    return (
        <View style={{ backgroundColor: '#eeeeee' }}>
            <View style={styles.horizontal}>
                <View style={styles.left}>
                    <Text style={styles.circle}>{review.rating}</Text>
                </View>
                <View style={styles.right}>
                    <Text style={{ fontWeight: 'bold' }}>{review.user.username}</Text>
                    <Text>{review.createdAt}</Text>
                    <Text>{review.text}</Text>
                </View>
            </View>
        </View>
    )
};

export default SingleRepo;