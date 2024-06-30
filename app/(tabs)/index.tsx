import { Alert, ScrollView, Text, View } from "react-native";
import CustomInput from "@/components/CustomInput";
import CustomButton from "@/components/CustomButton";
import { BASE_URL, API_KEY } from "@/constants/Core";
import { useEffect, useState } from "react";

export default function Index() {
  const [output, setOutput] = useState("");
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState("");

  useEffect(() => {
    getCity();
  }, [setCity]); //BRILLIANT

  const getCity = () => {
    if (city === "") {
      setLocation("");
      setOutput("");

      return;
    }

    setLoading(true);
    fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`)
      .then((response) => response.json())
      .then((data) => {
        setOutput(JSON.stringify(data.main.temp, undefined, 2) + " °C");
        setLocation(data.name + ", " + data.sys.country);
      })
      .catch((error) => {
        Alert.alert("Error", error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <View className="flex-1 items-center justify-center p-4 mt-10">
      <View className="w-96 bg-white shadow rounded-lg p-4 mb-4">
        <CustomInput
          type="text"
          label="City"
          placeholder="Please enter City"
          value={city}
          onChangeText={(text: string) => setCity(text)}
        />
        <CustomButton type="success" onPress={getCity}>
          Get Location
        </CustomButton>
        <ScrollView>
          <Text className="text-gray-700 mb-1 mt-4">
            Status : {loading === true ? "..." : "Success"}
          </Text>
          <Text className="text-gray-700 mb-1 mt-4">Temperature: {output}</Text>
          <Text className="text-gray-700 mb-1 mt-4">Location: {location}</Text>
        </ScrollView>
      </View>
    </View>
  );
}
