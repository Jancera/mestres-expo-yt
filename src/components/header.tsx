import { StatusBar, StyleSheet, Text, TextInput, View } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { MaterialIcons } from "@expo/vector-icons";

const Header = (props: NativeStackHeaderProps) => {
  const canGoBack = props.navigation.canGoBack();

  const handleBack = () => {
    props.navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {canGoBack ? (
        <MaterialIcons
          name="arrow-back-ios"
          size={24}
          color="black"
          onPress={handleBack}
        />
      ) : null}
      <Text style={styles.title}>Mestres</Text>

      <TextInput style={styles.input} placeholder="Pesquisar..." />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    padding: 5,
    marginLeft: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    marginLeft: 20,
  },
});

export default Header;
