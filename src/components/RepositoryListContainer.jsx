import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import { useHistory } from "react-router-dom";

const styles = StyleSheet.create({
    separator: {
        height: 10,
    },
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories }) => {
    const repositoryNodes = repositories
        ? repositories.edges.map((edge) => edge.node)
        : [];

    let history = useHistory();

    const onSelect = (id) => {
        history.push("/repo/" + id);
    }

    return (
        <FlatList
            data={repositoryNodes}
            ItemSeparatorComponent={ItemSeparator}
            renderItem={({ item, index, separators }) => (
                <RepositoryItem item={item} separators={separators} press={() => onSelect(item.id)} />
            )}
        />
    );
};

export default RepositoryListContainer;