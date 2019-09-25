import React, { useCallback } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TouchableNativeFeedback,
    Platform,
    StyleSheet
} from 'react-native';
import Swipeable from 'react-native-swipeable-row';
import { useDispatch } from 'react-redux';

import Colors from '../../constants/Colors';
import * as itemActions from '../../store/actions/item';

const ListElement = props => {
    let TouchableComponent = TouchableOpacity;
    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableComponent = TouchableNativeFeedback;
    }

    const dispatch = useDispatch();
    const { id, name } = props;

    const deleteItemHandler = useCallback(() => {
        dispatch(itemActions.deleteItem(id));
    }, [dispatch, id]);

    const navigateToDetailsHandler = () => {
        props.navigation.navigate('SayerDetail', {
            id,
            name
        });
    };

    return (
        <Swipeable
            rightButtons={[
                <TouchableComponent
                    style={styles.btnContainer}
                    onPress={deleteItemHandler}
                >
                    <View style={styles.button}>
                        <Text style={styles.textColor}>Delete</Text>
                    </View>
                </TouchableComponent>
            ]}
            rightButtonWidth={100}
        >
            <TouchableComponent
                style={{ flex: 1 }}
                onPress={navigateToDetailsHandler}
            >
                <View style={styles.container}>
                    <Text
                        numberOfLines={1} >
                        {name}
                    </Text>
                </View>
            </TouchableComponent>
        </Swipeable>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 50,
        padding: 40,
        justifyContent: 'center',
        borderBottomWidth: 0.5,
        borderBottomColor: '#e1e1e1'
    },
    button: {
        width: 100,
        height: 50,
        paddingVertical: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.secondary
    },
    textColor: {
        color: 'white',
        fontFamily: 'open-sans-bold',
        fontSize: 15
    },
    btnContainer: {
        flex: 1,
        alignItems: 'flex-start'
    }
});

export default ListElement;