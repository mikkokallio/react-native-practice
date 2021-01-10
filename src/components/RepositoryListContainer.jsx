import React from 'react';
import { FlatList, View, StyleSheet, TouchableOpacity } from 'react-native';
import RepositoryItem from './RepositoryItem';
import { useHistory } from "react-router-dom";

//The user should be able to access the view by pressing a repository in the reviewed repositories list. 
//You can achieve this by for example wrapping the RepositoryItem with a TouchableOpacity component in the RepositoryList component 
//and using history.push method to change the route in an onPress event handler. You can access the history object with the useHistory hook.
//history.push("/");

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
                <TouchableOpacity onPress={() => onSelect(item.id)}>
                    <RepositoryItem item={item} separators={separators} />
                </TouchableOpacity>
            )}
        />
    );
};

export default RepositoryListContainer;