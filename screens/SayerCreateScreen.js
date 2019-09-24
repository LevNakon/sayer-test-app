import React, { useState } from 'react';
import {
    View,
    Text,
    Platform,
    SafeAreaView,
    TextInput,
    StyleSheet
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/UI/HeaderButton';
import Colors from '../constants/Colors';

const SayerCreateScreen = props => {
    const [item, setItem] = useState('');

    return (
        <View style={styles.screen}>
            <View style={}>
                <TextInput
                    style={styles.input}
                    value={item}
                    onChangeText={setItem}
                />
            </View>
            <View>
                {/* <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item
                        title='Add item'
                        iconName={Platform.OS === 'android' ? 'md-arrow-dropright-circle' : 'ios-arrow-dropright-circle'}
                        onPress={() => { }}
                        show='always'
                    />
                </HeaderButtons> */}
            </View>
        </View >
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: Colors.primaryAccent
    }
});

export default SayerCreateScreen;