import React, { useState, useCallback } from 'react';
import {
    View,
    AsyncStorage,
    KeyboardAvoidingView,
    Platform,
    Dimensions,
    TouchableOpacity,
    TouchableNativeFeedback,
    TextInput,
    StyleSheet
} from 'react-native';
import { useDispatch } from 'react-redux';

import { AntDesign } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import * as itemActions from '../store/actions/item';

const SayerCreateScreen = props => {

    let TouchableComponent = TouchableOpacity;
    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableComponent = TouchableNativeFeedback;
    }

    const [item, setItem] = useState('');

    const dispatch = useDispatch();

    const inputHandler = useCallback(itemText => {
        setItem(itemText);
    }, [item]);

    const saveItemHandler = useCallback(() => {
        const addItem = async () => {
            await dispatch(itemActions.addItem(item));
            props.navigation.navigate('SayerList');
        }
        addItem();
    }, [dispatch, item]);

    return (
        <KeyboardAvoidingView
            behavior='padding'
            keyboardVerticalOffset={50}
            style={styles.screen}>
            <View style={styles.container}>
                <View style={styles.inputConatiner}>
                    <TextInput
                        style={styles.input}
                        value={item}
                        onChangeText={inputHandler}
                    />
                </View>
                <View style={styles.buttonConatiner}>
                    <TouchableComponent onPress={saveItemHandler} >
                        <AntDesign
                            name='rightcircle'
                            size={Dimensions.get('screen').width > 300 ? 40 : 20}
                            color={Colors.primaryAccent}
                        />
                    </TouchableComponent>
                </View>
            </View>
        </KeyboardAvoidingView >
    );
};

SayerCreateScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Create new item'
    }
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 20
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
    },
    inputConatiner: {
        flex: 3
    },
    buttonConatiner: {
        flex: 1,
        alignItems: 'center'
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: Colors.primaryAccent
    }
});

export default SayerCreateScreen;