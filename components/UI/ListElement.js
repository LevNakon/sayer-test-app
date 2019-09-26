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

    const { id, name, comments } = props;

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
                style={styles.screen}
                onPress={navigateToDetailsHandler}
            >
                <View style={styles.container}>
                    <View style={styles.title}>
                        <Text
                            numberOfLines={1} >
                            {name}
                        </Text>
                    </View>
                    <View style={styles.countContainer}>
                        <View style={styles.count}>
                            <Text style={styles.countText}>{comments}</Text>
                        </View>
                    </View>
                </View>
            </TouchableComponent>
        </Swipeable>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    container: {
        flex: 1,
        height: 50,
        paddingVertical: 40,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
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
    },
    title: {
        flex: 4,
    },
    countContainer: {
        flex: 1,
        paddingLeft: 20
    },
    count: {
        height: 50,
        width: 50,
        borderRadius: 50 / 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary
    },
    countText: {
        color: 'white',
        fontSize: 20
    }
});

export default ListElement;