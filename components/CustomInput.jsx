import { Text, TextInput, View } from "react-native";

const CustomInput = ({ ...props }) => {
  const { type, label, placeholder, value, onChangeText } = props;
  return (
    <View className="mb-4">
      <Text className="text-gray-700 mb-1">{props.label}</Text>
      <TextInput
        className="border border-gray-300 rounded-md p-2 w-full"
        keyboardType={type}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default CustomInput;
