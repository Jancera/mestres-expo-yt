import { Button, StyleSheet, TextInput, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function HomeTab() {
  const key = "chave";

  const saveItem = async (value: string) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      console.log(error);
    }
  };

  const removeItem = async () => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.log(error);
    }
  };

  const getItem = async () => {
    try {
      const response = await AsyncStorage.getItem(key);

      if (response !== null) {
        alert(`O valor lido é ${response}`);
      } else {
        alert("Nenhum valor encontrado");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const mergeItem = async () => {
    const obj1 = {
      key: "value",
    };

    const obj1String = JSON.stringify(obj1);

    await AsyncStorage.setItem("obj1", obj1String);

    const obj2 = {
      name: "Jancer",
    };

    const obj2String = JSON.stringify(obj2);

    await AsyncStorage.mergeItem("obj1", obj2String);

    const item = await AsyncStorage.getItem("obj1");

    if (item !== null) {
      alert(`O valor lido após o merge é ${item}`);
      console.log(JSON.parse(item).name);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        onSubmitEditing={(event) => {
          saveItem(event.nativeEvent.text);
        }}
        placeholder="Digite um valor para salvar"
      />

      <Button
        title="Ler valor"
        onPress={() => {
          getItem();
        }}
      />
      <Button
        title="Apagar valor"
        onPress={() => {
          removeItem();
        }}
      />
      <Button
        title="Merge"
        onPress={() => {
          mergeItem();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    height: 35,
    borderColor: "gray",
    borderWidth: 0.5,
    padding: 4,
    width: "80%",
    borderRadius: 5,
    marginBottom: 20,
  },
});
