import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useTheme } from "@/context/ThemeContext";
import { Stack } from "expo-router";

const Profile = () => {
  const colors = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.light.background,
      alignItems: "center",
      justifyContent: "center",
      padding: 20,
    },
    text: {
      fontSize: 24,
      fontWeight: "bold",
      color: colors.light.text,
    },
  });

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.container}>
        <Text style={styles.text}>Profile</Text>
      </View>
    </>
  );
};

export default Profile;