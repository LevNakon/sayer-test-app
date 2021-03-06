import { AsyncStorage } from 'react-native';

export const ADD_ITEM = 'ADD_ITEM';
export const GET_ITEMS = 'GET_ITEMS';
export const DELETE_ITEM = 'DELETE_ITEM';
export const ADD_COMMENT = 'ADD_COMMENT';

export const addItem = (item) => {
    return async dispatch => {
        let items = await AsyncStorage.getItem('items');
        let resultData;
        if (items === null) {
            resultData = [
                {
                    id: `${item} + ${0}`,
                    name: item,
                    comments: []
                }
            ];
            await AsyncStorage.setItem('items', JSON.stringify(resultData));
        } else {
            let data = JSON.parse(items);
            resultData = [...data, { id: `${item} + ${data.length}`, name: item, comments: [] }]
            await AsyncStorage.setItem('items', JSON.stringify(resultData));
        }
        dispatch({ type: ADD_ITEM, items: resultData });
    };
};

export const addComment = (comment, itemId) => {
    return async dispatch => {
        let items = await AsyncStorage.getItem('items');
        let resultData = JSON.parse(items);
        let currentItem = resultData.find((item) => item.id === itemId);
        currentItem.comments.push({
            id: `${currentItem.id} + ${comment} + ${currentItem.comments.length}`,
            name: comment
        });
        await AsyncStorage.setItem('items', JSON.stringify(resultData));
        dispatch({ type: ADD_COMMENT, items: resultData });
    };
};

export const getItems = () => {
    return async dispatch => {
        let items = await AsyncStorage.getItem('items');
        let resultData;
        if (items === null) {
            resultData = [];
        } else {
            resultData = JSON.parse(items);
        }
        dispatch({ type: GET_ITEMS, items: resultData });
    };
};

export const deleteItem = (id) => {
    return async dispatch => {
        let items = await AsyncStorage.getItem('items');
        let resultData = JSON.parse(items);
        let newItems = resultData.filter((item) => item.id !== id);
        await AsyncStorage.setItem('items', JSON.stringify(newItems));
        dispatch({ type: DELETE_ITEM, items: newItems });
    };
};