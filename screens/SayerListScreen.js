import React from 'react';
import {
    View,
    Text,
    Platform,
    Dimensions,
    SafeAreaView,
    StyleSheet
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import Colors from '../constants/Colors';
import HeaderButton from '../components/UI/HeaderButton';

const SayerListScreen = props => {
    return (
        <View>
            <Text>SayerListScreen</Text>
        </View>
    );
};

SayerListScreen.navigationOptions = navData => {
    return {
        headerLeft: (
            <View style={styles.header}>
                <Text style={styles.mainText}>Sayer</Text>
                <Text style={styles.secondaryText}>World's most used time waster</Text>
            </View>
        ),
        headerRight: (
            <SafeAreaView>
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item
                        title='Add'
                        iconName={Platform.OS === 'android' ? 'md-add-circle' : 'ios-add-circle'}
                        onPress={() => navData.navigation.navigate('SayerCreate')}
                        show='always'
                    />
                </HeaderButtons>
            </SafeAreaView>
        )
    };
};

const styles = StyleSheet.create({
    header: {
        flex: 1,
        backgroundColor: Platform.OS === 'android' ? Colors.primary : '',
        paddingLeft: 30,
        paddingVertical: 30
    },
    mainText: {
        color: Platform.OS === 'android' ? 'white' : Colors.primary,
        fontFamily: 'open-sans-bold',
        fontSize: Dimensions.get('screen').width > 300 ? 30 : 25
    },
    secondaryText: {
        color: Platform.OS === 'android' ? 'white' : Colors.primary,
        fontSize: Dimensions.get('screen').width > 300 ? 18 : 14
    }
});

export default SayerListScreen;