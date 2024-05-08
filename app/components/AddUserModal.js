import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, TextInput, Button, KeyboardAvoidingView, Platform } from 'react-native';
import { useAppContext } from '../context/AppContext';

export default function AddUserModal() {
    const { addUserModal, setAddUserModal, setSuccessModal, setUser } = useAppContext();
    const [formData, setFormData] = useState({firstName: "", lastName: "", email: ""});
    const [errorText, setErrorText] = useState("");
    const [isSaving, setIsSaving] = useState(false);

    const handleOnChange = (text, input) => {
        setFormData(prevFormData => ({...prevFormData, [input]: text}));
        setErrorText(false);
      };

    const onSubmit = () => {
        let emailValidator = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (!formData.firstName || !formData.lastName || !formData.email) {
            setErrorText("Please fill out all the inputs!");
        } else if (emailValidator.test(formData.email) === false) {
            setErrorText("Invalid email")
        } 
        else {
        setErrorText(false);
        setIsSaving(true);
        mockAPICall = setTimeout(() => {
            setAddUserModal(!addUserModal);
            setUser(formData);
            setFormData({firstName: "", lastName: "", email: ""});
            setIsSaving(false);
            setSuccessModal(true);
        }, 1000);
        }
    }

    return (
        <View>
            <Modal
            animationType="slide"
            presentationStyle="pageSheet"
            visible={addUserModal}
            onRequestClose={() => {
                setAddUserModal(!addUserModal)
                setErrorText(false);
            }}>
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    style={{ flex: 1}}
                >
                    <View style={styles.container}>
                        {errorText &&
                            <View style={{alignItems: "center", marginBottom: 10}}>
                                <Text style={{color: "red", fontSize: 16}}>{errorText}</Text>
                            </View>
                        }
                        <Text style={{color: "black", fontSize: 30}}>First Name</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={text => handleOnChange(text, "firstName")}
                            value={formData.firstName}
                        />
                        <Text style={{color: "black", fontSize: 30}}>Last Name</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={text => handleOnChange(text, "lastName")}
                            value={formData.lastName}
                        />
                        <Text style={{color: "black", fontSize: 30}}>Email</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={text => handleOnChange(text, "email")}
                            value={formData.email}
                        />
                        <View style={{borderColor: "black", borderWidth: 2, borderRadius: 10, marginTop: 50}}>
                            <Button
                            onPress={onSubmit}
                            title={isSaving ? "Saving" : "Save"}
                            color="black"
                            />
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </Modal>
        </View>
    )}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    input: {
        height: 40,
        width: "70%",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginVertical: 10
      },
});