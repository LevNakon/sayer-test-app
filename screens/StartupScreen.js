import React, { useEffect } from 'react';
import {
    View,
    ActivityIndicator,
    StyleSheet,
    AsyncStorage
} from 'react-native';
import { useDispatch } from 'react-redux';

import Colors from '../constants/Colors';
import * as itemActions from '../store/actions/item';

const StartupScreen = props => {
    const dispatch = useDispatch();

    useEffect(() => {
        const tryGetDataFromStorage = async () => {
            await dispatch(itemActions.getItems());
            props.navigation.navigate('Sayer');
        };

        tryGetDataFromStorage();
    }, [dispatch]);

    return (
        <View style={styles.screen}>
            <ActivityIndicator size="large" color={Colors.secondary} />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Colors.primary,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default StartupScreen;
