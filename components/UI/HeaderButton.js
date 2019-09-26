import React from 'react';
import { Dimensions } from 'react-native';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../../constants/Colors';

const CustomHeaderButton = props => {
    return (
            <HeaderButton
                {...props}
                IconComponent={Ionicons}
                iconSize={Dimensions.get('screen').width > 300 ? 60 : 40}
                color={Colors.secondary}
            />
    );
};

export default CustomHeaderButton;
