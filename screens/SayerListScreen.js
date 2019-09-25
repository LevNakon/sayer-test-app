import React, { useEffect } from 'react';
import {
    View,
    Text,
    Platform,
    Dimensions,
    SafeAreaView,
    FlatList,
    StyleSheet
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';

import Colors from '../constants/Colors';
import HeaderButton from '../components/UI/HeaderButton';
import ListElement from '../components/UI/ListElement';

const SayerListScreen = props => {

    const items = useSelector(store => store.items.items);

    return (
        <View style={styles.screen}>
            {items.length === 0 ?
                <View style={styles.center}>
                    <Text style={styles.screenText}>
                        No items, add some)
                </Text>
                </View> :
                <FlatList
                    data={items}
                    renderItem={(({ item }) => <ListElement id={item.id} name={item.name} />)}
                    keyExtractor={item => item.id}
                />
            }
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
    screen: {
        flex: 1
    },
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
        fontSize: Dimensions.get('screen').width > 300 ? 18 : 16
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    screenText: {
        fontFamily: 'open-sans-bold',
        fontSize: Dimensions.get('screen').width > 300 ? 20 : 25,
        color: Colors.primaryAccent
    }
});

export default SayerListScreen;