import { Tabs, useNavigation } from "expo-router";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Alert } from "react-native";

const TabLayout = () => {
  const navigation = useNavigation();
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Openweather",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="mateo"
        options={{
          title: "Mateo",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "code-working" : "code-working-outline"}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
