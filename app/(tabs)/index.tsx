import { StyleSheet, View } from "react-native";
import WebView from "react-native-webview";

export default function HomeTab() {
  return (
    <View style={{ height: 200 }}>
      <WebView
        source={{
          uri: "https://www.mestresdaweb.com.br",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
