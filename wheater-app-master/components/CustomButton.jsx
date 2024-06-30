import React from "react";
import { TouchableOpacity, Text, View } from "react-native";

const buttonTypeClasses = {
  primary: "bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded",
  secondary: "bg-gray-500 hover:bg-gray-600 py-2 px-4 rounded",
  danger: "bg-red-500 hover:bg-red-600 py-2 px-4 rounded",
  warning: "bg-yellow-500 hover:bg-yellow-600 py-2 px-4 rounded",
  success: "bg-green-500 hover:bg-green-600  py-2 px-4 rounded",
  link: "text-blue-600 hover:underline",
};

const CustomButton = ({
  type = "primary",
  onPress,
  classNames = "",
  children,
}) => {
  const buttonClasses = buttonTypeClasses[type] || buttonTypeClasses.primary;

  return (
    <View className={classNames}>
      <TouchableOpacity className={buttonClasses} onPress={onPress}>
        <Text className="text-lg text-center text-white">{children}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;
