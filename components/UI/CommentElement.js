import React from 'react';
import {
    View,
    Text,
    Dimensions,
    StyleSheet
} from 'react-native';

import Colors from '../../constants/Colors';

const CommentElement = props => {
    const { name, index } = props;

    return (
        <View style={styles.screen}>
            <View style={styles.container}>
                <View style={styles.screen}>
                    <View
                        style={{ ...styles.rectangle, backgroundColor: index % 2 !== 0 ? '#ae7d93' : Colors.primaryAccent }}
                    />
                </View>
                <View style={styles.textContainer}>
                    <Text multiline >
                        {name}
                    </Text>
                </View>
            </View >
        </View >
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderBottomWidth: 0.5,
        borderBottomColor: '#e1e1e1'
    },
    rectangle: {
        width: Dimensions.get('screen').width > 300 ? 70 : 40,
        height: Dimensions.get('screen').width > 300 ? 70 : 40
    },
    textContainer: {
        flex: 3,
        paddingLeft: 20
    }
});

export default CommentElement;