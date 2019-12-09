import React from 'react';
import { StyleSheet, View, Text, Image, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import Colors from '../constants/Colors';


const Channel = props => {

    return (
        <TouchableOpacity style={{ ...styles.container, ...props.style }} onPress={() => props.onSelect(props.id)}>
            <View style={styles.topContainer}>
                <Image source={{ uri: props.icon }} style={styles.icon} />
                <TouchableWithoutFeedback onPress={() => props.onInfoClick(props.id)}>
                    <View style={styles.infoTouch}>
                        <Image source={require('./../assets/threedots.png')} style={styles.dots} />
                    </View>
                </TouchableWithoutFeedback>
            </View>
            <Text style={styles.title}>{props.name}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,
        margin: 5,
        width: 100,
        height: 100,
        maxWidth: '30%',
        justifyContent: 'space-between',
        backgroundColor: Colors.darkBg,
    },
    icon: {
        width: 20,
        height: 20,
    },
    dots: {
        width: 5,
        height: 18,
    },
    title: {
        color: 'white',
    },
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    infoTouch: {
        width: 20,
        height: 22,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

Channel.propTypes = {
    icon: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired,
    onInfoClick: PropTypes.func.isRequired,
    style: PropTypes.shape({}),
};

export default Channel;
