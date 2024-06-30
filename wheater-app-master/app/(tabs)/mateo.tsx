import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";
import { useState } from "react";
import { Alert, ScrollView, Text, View } from "react-native";

export default function Index() {
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(true);
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const getWeather = () => {
    if (latitude === "" || longitude === "") {
      return;
    }

    setLoading(true);
    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m`
    )
      .then((response) => response.json())
      .then((data) => {
        setOutput(data.current.temperature_2m + " °C");
      })
      .catch((error) => {
        Alert.alert("Error", error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <View className="flex-1 items-center justify-center">
      <View className="w-80 bg-white shadow rounded-lg p-4 mb-4">
        <CustomInput
          type="numeric"
          label="Latitude"
          placeholder="Please enter latitude"
          value={latitude}
          onChangeText={setLatitude}
        />
        <CustomInput
          type="numeric"
          label="Longitude"
          placeholder="Please enter longitude"
          value={longitude}
          onChangeText={setLongitude}
        />
        <CustomButton
          type="success"
          onPress={() => {
            getWeather();
          }}
        >
          Submit
        </CustomButton>

        <ScrollView>
          <Text className="text-gray-700 mb-1 mt-4">
            Status : {loading === true ? "..." : "Success"}
          </Text>
          <Text className="text-gray-700 mb-1 mt-4">Temperature: {output}</Text>
        </ScrollView>
      </View>
    </View>
  );
}
