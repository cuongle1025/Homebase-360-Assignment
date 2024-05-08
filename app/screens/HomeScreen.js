import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useAppContext } from '../context/AppContext';
import AddUserModal from '../components/AddUserModal';
import SuccessModal from '../components/SuccessModal';

export default function HomeScreen() {
  const { addUserModal, setAddUserModal, user } = useAppContext();

  return (
      <View style={styles.container}>
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
          <Text style={{color: "white", fontSize: 32, fontWeight: "bold"}}>Home Screen</Text>
          {user && 
            <Text style={{color: "white", fontSize: 30, fontWeight: "400"}}>Hello {user.firstName} {user.lastName}</Text>
          }
        </View>
        <View style={{flex: 1, justifyContent: "flex-start"}}>
          <View style={{borderColor: "white", borderWidth: 2, borderRadius: 10}}>
            <Button
              onPress={() => setAddUserModal(!addUserModal)}
              title={user ? "Edit User" : "Add User"}
              color="white"
            />
          </View>
        </View>
        <AddUserModal/>
        <SuccessModal/>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
