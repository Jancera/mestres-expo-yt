import { Button, Image, StyleSheet, Text, View } from "react-native";
import * as FileSytem from "expo-file-system";
import { useState } from "react";

export default function HomeTab() {
  const [progress, setProgress] = useState(0);
  const [localUri, setLocalUri] = useState<string | undefined>();

  const serverImageUrl =
    "https://images.unsplash.com/photo-1537498425277-c283d32ef9db?q=80&w=2078";
  const localImageUri = FileSytem.documentDirectory + "image.jpeg";

  const downloadResumable = FileSytem.createDownloadResumable(
    serverImageUrl,
    localImageUri,
    {},
    (downloadProgress) => {
      const currentProgress =
        downloadProgress.totalBytesWritten /
        downloadProgress.totalBytesExpectedToWrite;

      console.log(currentProgress);

      setProgress(currentProgress * 100);
    },
  );

  const handleStartDownload = async () => {
    try {
      await downloadResumable.downloadAsync();
    } catch (error) {
      console.log(error);
    }
  };

  const handleVerify = async () => {
    try {
      const info = await FileSytem.getInfoAsync(localImageUri);

      if (info.exists) {
        setLocalUri(info.uri);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Progresso: {progress}</Text>

      <Button
        title="Iniciar download"
        onPress={() => {
          handleStartDownload();
        }}
      />
      <Button
        title="Verificar arquivo"
        onPress={() => {
          handleVerify();
        }}
      />

      <Image source={{ uri: localUri }} style={{ width: 200, height: 200 }} />
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
  title: {
    fontSize: 20,
  },
});
