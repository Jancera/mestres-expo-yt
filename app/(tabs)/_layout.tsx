import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { TouchableOpacity } from "react-native";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={
        {
          // tabBarShowLabel: false,
          // tabBarLabelStyle: {
          //   fontSize: 20,
          //   fontWeight: "bold",
          //   color: "green",
          // },
          // tabBarActiveTintColor: "#22ffb5",
          // tabBarInactiveTintColor: "red",
          // tabBarActiveBackgroundColor: "yellow",
          // tabBarInactiveBackgroundColor: "blue",
          // tabBarHideOnKeyboard: true,
          // tabBarButton: (props) => <TouchableOpacity {...props} />,
          // tabBarItemStyle: {
          //   borderWidth: 1,
          // },
          // tabBarStyle: {
          //   borderWidth: 1,
          //   backgroundColor: "red",
          // },
        }
      }
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Início",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
          // tabBarLabel: "mestres",
          // tabBarBadge: 2,
          // tabBarBadgeStyle: {
          //   fontSize: 20,
          //   backgroundColor: "grey",
          //   color: "yellow",
          // },
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Ajustes",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="cog" color={color} />
          ),
          // tabBarLabel: "mestres",
        }}
      />
    </Tabs>
  );
}
