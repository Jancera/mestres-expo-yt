import { Button, StyleSheet, Text, View } from "react-native";
import * as Clipboard from "expo-clipboard";

export default function HomeTab() {
  const pixCopyPaste = "198749549813584935.gov.br";

  const handleCopyKey = async () => {
    await Clipboard.setStringAsync(pixCopyPaste);

    // Dar feedback
  };

  const handleCopyText = async () => {
    const text = await Clipboard.getStringAsync();

    console.log(text);
  };

  return (
    <View style={styles.container}>
      <Text>Chave pix: {pixCopyPaste}</Text>
      <Button title="Copiar chave" onPress={handleCopyKey} />
      <Button title="Colar texto" onPress={handleCopyText} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
