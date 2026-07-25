import React, { useState, useEffect } from 'react';
import { getAuth, signOut, EmailAuthProvider, deleteUser, reauthenticateWithCredential } from 'firebase/auth';
import { ScrollView, View, SafeAreaView, Alert } from 'react-native';
import AppLoading from '../components/InnerLoading';
import CustomButton from '../components/CustomButton';
import Languages from '../languages';
import LanguageContext from '../languages/LanguageContext';
import { Button, Paragraph, Dialog, Portal, TextInput, Title } from 'react-native-paper';

const auth = getAuth();

export default function Profile(props) {

  const contextState = React.useContext(LanguageContext);
  const language = contextState.language;
  const Strings = Languages[language].texts;

  const [isLoaded, setIsLoaded] = useState(false);
  const [user, setUser] = useState([]);
  const [visible, setVisible] = useState(false);
  const [password, setPassword] = useState('');

  const onChangeScreen = (screen) => {
    props.navigation.navigate(screen);
  };

  const deleteAccount = () => {

    if (password) {

      let credential = EmailAuthProvider.credential(
        auth.currentUser.email,
        password
      );

      reauthenticateWithCredential(auth.currentUser, credential).then(() => {

        deleteUser(user).then(() => {
          // User deleted.
        }).catch((error) => {
          Alert.alert(Strings.ST32);
        });

      }).catch((error) => {
        Alert.alert(Strings.ST32);
      });
    }
  };

  const hideDialog = () => setVisible(false);

  useEffect(() => {

    setUser(auth.currentUser);
    setIsLoaded(true);

  }, []);

  if (isLoaded) {

    return (

      <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
        <SafeAreaView>

          <View style={{ marginHorizontal: 30, marginVertical: 40 }}>
            {/* <CustomButton Icon="cart-outline" Label={Strings.ST54} Click={() => onChangeScreen("orders")} /> */}
            <CustomButton Icon="bookmark-outline" Label={Strings.ST110} Click={() => onChangeScreen("about")} />
            <CustomButton Icon="file-document-outline" Label={Strings.ST8} Click={() => onChangeScreen("terms")} />
            <CustomButton Icon="logout" Label={Strings.ST9} Click={() => signOut(auth)} />
            <CustomButton Icon="account-cancel-outline" Label={Strings.ST141} Click={() => setVisible(true)} />
            <CustomButton Icon="cog-outline" Label={Strings.ST108} Click={() => onChangeScreen("settings")} />

            <Portal>
              <Dialog visible={visible} onDismiss={hideDialog}>
                <Dialog.Content>
                  <Title>{Strings.ST144}</Title>
                  <Paragraph style={{ marginVertical: 10 }}>{Strings.ST145}</Paragraph>
                  <TextInput
                    value={password}
                    mode="outlined"
                    secureTextEntry={true}
                    onChangeText={text => setPassword(text)}
                  />
                </Dialog.Content>
                <Dialog.Actions style={{ marginBottom: 8, marginTop: -20, marginHorizontal: 8 }}>
                  <Button onPress={() => hideDialog()}>{Strings.ST142}</Button>
                  <Button onPress={() => deleteAccount()}>{Strings.ST143}</Button>
                </Dialog.Actions>
              </Dialog>
            </Portal>

          </View>
        </SafeAreaView>
      </ScrollView>

    );

  } else {
    return (
      <AppLoading />
    );
  }

}

