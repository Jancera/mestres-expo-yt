import { Button, StyleSheet, TextInput, View } from "react-native";
import { setItemAsync, getItemAsync, deleteItemAsync } from "expo-secure-store";

export default function HomeTab() {
  const KEY = "key";

  const save = async (key: string, value: string) => {
    await setItemAsync(key, value);

    alert("Item salvo com sucesso");
  };

  const readValue = async (key: string) => {
    const result = await getItemAsync(key);

    if (result) {
      alert(`Item referente a ${key} é ${result}`);
    } else {
      alert("Item não encontrado");
    }
  };

  const deleteValue = async (key: string) => {
    await deleteItemAsync(key);

    alert("Item removido com sucesso");
  };

  return (
    <View style={styles.container}>
      {/* <Text style={{ fontSize: 40, fontFamily: EPoppinsFonts.BOLD }}>
        Hello from Home
      </Text>
      <Link href={"profile"}>Perfil</Link>
      <Link href={"edit"}>Edit</Link> */}

      <TextInput
        style={styles.input}
        onSubmitEditing={(event) => {
          save(KEY, event.nativeEvent.text);
        }}
        placeholder="Digite um valor para salvar"
      />

      <View style={styles.buttonsContainer}>
        <Button
          title="Ler valor"
          onPress={() => {
            readValue(KEY);
          }}
        />
        <Button
          title="Apagar valor"
          onPress={() => {
            deleteValue(KEY);
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#999999",
    width: 300,
    padding: 5,
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonsContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    height: "15%",
  },
});
