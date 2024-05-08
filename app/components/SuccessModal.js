import React from 'react';
import { View, Text, StyleSheet, Modal } from 'react-native';
import { useAppContext } from '../context/AppContext';

export default function SuccessModal() {
    const { successModal, setSuccessModal } = useAppContext();

    return (
        <View>
            <Modal
            animationType="slide"
            presentationStyle="pageSheet"
            visible={successModal}
            onRequestClose={() => {
                setSuccessModal(!successModal)
            }}>
                <View style={styles.container}>
                    <Text style={{color: "black", fontSize: 30}}>Data successfully saved</Text>
                </View>
            </Modal>
        </View>
    )}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
});