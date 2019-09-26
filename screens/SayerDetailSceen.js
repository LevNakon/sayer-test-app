import React, { useState, useCallback } from 'react';
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
    Keyboard,
    StyleSheet
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import { AntDesign } from '@expo/vector-icons';

import Colors from '../constants/Colors';
import CommentElement from '../components/UI/CommentElement';
import * as itemActions from '../store/actions/item';

const SayerDetailScreen = props => {

    let TouchableComponent = TouchableOpacity;
    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableComponent = TouchableNativeFeedback;
    }

    const dispatch = useDispatch();

    const itemId = props.navigation.getParam('id');

    const [comment, setComment] = useState('');

    const comments = useSelector(store => store.items.items)
        .find(item => item.id === itemId)
        .comments;

    const inputHandler = useCallback(commentText => {
        setComment(commentText);
    }, [comment]);

    const addCommentHandler = useCallback(() => {
        const addComment = async () => {
            await dispatch(itemActions.addComment(comment, itemId));
            setComment('');
            Keyboard.dismiss();
        };
        addComment();
    }, [dispatch, comment]);

    return (
        <View style={styles.screen}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                {comments.length === 0 ?
                    <View style={styles.center}>
                        <Text style={styles.screenText}>
                            No comments, add some)
                </Text>
                    </View> :
                    <View style={styles.screen}>
                        <FlatList
                            data={comments}
                            renderItem={({ item, index }) => <CommentElement
                                name={item.name}
                                index={index}
                            />}
                            keyExtractor={item => item.id}
                        />
                    </View>
                }
            </ScrollView>
            <View style={styles.commentContainer}>
                <View style={styles.container}>
                    <View style={styles.inputConatiner}>
                        <TextInput
                            style={styles.input}
                            value={comment}
                            onChangeText={inputHandler}
                        />
                    </View>
                    <View style={styles.buttonConatiner}>
                        <TouchableComponent onPress={addCommentHandler} >
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
        borderRadius: 1,
        backgroundColor: 'white'
    }
});

export default SayerDetailScreen;