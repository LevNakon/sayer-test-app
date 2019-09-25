import React, { useState } from 'react';
import {
    View,
    Text,
    FlatList,
    Dimensions,
    TextInput,
    TouchableOpacity,
    TouchableNativeFeedback,
    Platform,
    ScrollView,
    StyleSheet
} from 'react-native';
import { useSelector } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';

import Colors from '../constants/Colors';

import KeyboardSpacer from 'react-native-keyboard-spacer';

const SayerDetailScreen = props => {

    let TouchableComponent = TouchableOpacity;
    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableComponent = TouchableNativeFeedback;
    }

    const [comment, setComment] = useState('');

    const comments = useSelector(store => store.items.items)
        .find(item => item.id === props.navigation.getParam('id'))
        .comments;

    return (
        <View style={styles.screen}>

            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                {comments.length === 0 ?
                    <View style={styles.center}>
                        <Text style={styles.screenText}>
                            No comments, add some)
                </Text>
                    </View> :
                    <FlatList
                        data={comments}
                    />
                }
                <View style={styles.commentContainer}>
                    <View style={styles.container}>
                        <View style={styles.inputConatiner}>
                            <TextInput
                                style={styles.input}
                                value={comment}
                                onChangeText={() => { }}
                            />
                        </View>
                        <View style={styles.buttonConatiner}>
                            <TouchableComponent onPress={() => { }} >
                                <AntDesign
                                    name='rightcircle'
                                    size={Dimensions.get('screen').width > 300 ? 40 : 20}
                                    color={Colors.primaryAccent}
                                />
                            </TouchableComponent>
                        </View>
                    </View>
                </View>
                <KeyboardSpacer />
            </ScrollView>
        </View >
    );
};

SayerDetailScreen.navigationOptions = navData => {
    const name = navData.navigation.getParam('name');
    return {
        headerTitle: name
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1
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
    },
    commentContainer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        justifyContent: 'center',
        paddingLeft: 20,
        height: 70,
        backgroundColor: '#e6e6e6'
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
        borderWidth: 0,
        // borderBottomColor: Colors.
        borderRadius: 1,
        backgroundColor: 'white'
    }
});

export default SayerDetailScreen;