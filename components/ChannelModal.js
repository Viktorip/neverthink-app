import React from 'react';
import { StyleSheet, View, Modal, Text, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import Colors from '../constants/Colors';

const ChannelModal = props => {

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={props.visible}
        >
            <View style={styles.container}>
                <View style={styles.contentBox}>
                    <View style={styles.header}>
                        <View style={styles.headerTitle}>
                            <Image source={{ uri: props.icon }} style={styles.icon} />
                            <Text style={styles.channelName}>{props.name}</Text>
                        </View>

                    </View>

                    <Text style={styles.description}>{props.description}</Text>
                    <Text style={styles.curated}>Curated by {props.curatorName}</Text>
                    <View style={styles.buttonContainer}>
                    <TouchableOpacity  onPress={props.onClose}>
                        <Text style={styles.closeButton}>Close</Text>
                    </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        width: 40,
        height: 40,
        marginRight: 10,
    },
    contentBox: {
        backgroundColor: Colors.darkBg,
        width: '80%',
        padding: 20,
        borderColor: 'white',
        borderWidth: 2,
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    headerTitle: {
        flexDirection: 'row',
    },
    channelName: {
        fontSize: 24,
        color: 'white',
    },
    description: {
        color: 'white',
        fontSize: 16,
        marginVertical: 30,
    },
    curated: {
        color: Colors.subtle,
        fontSize: 14,
    },
    buttonContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent:'center',
        marginTop: 15,
    },
    closeButton: {
        color: Colors.subtle,
        padding: 10,
        borderColor: Colors.attention,
        borderWidth: 1,
    }
});

ChannelModal.propTypes = {
    icon: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    curatorName: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default ChannelModal;
