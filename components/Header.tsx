import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@/context/ThemeContext";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { padding } from "@/utils/healpers";

const Header = () => {
  const colors = useTheme();

  const styles = StyleSheet.create({
    container: {
      width: "100%",
      backgroundColor: colors.light.background,
      ...padding(0, 20, 0, 20),
    },
    innerContainer: {
      flexDirection: "row",
      width: "100%",
      backgroundColor: colors.light.background,
      justifyContent: "space-between",
    },
    title: {
      fontSize: 16,
      fontWeight: "bold",
      color: colors.light.text,
      marginVertical: "auto",
      
    },
    image: {
      width: 48,
      height: 48,
      borderRadius: 50,
      overflow: "hidden",
      backgroundColor: colors.light.muted,
      marginRight: 14,
      borderWidth: 2,
      borderColor: colors.light.muted,
    },
    notificationIcon: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      width: 45,
      height: 45,
      backgroundColor: colors.light.muted,
      borderRadius: 100,
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignContent: "center",
          }}
        >
          <Image
            source={{
              uri: "https://img.freepik.com/free-photo/3d-rendering-cartoon-like-boy_23-2150797566.jpg",
            }}
            style={styles.image}
          />
          <View>
            <Text style={styles.title}>Hi, John</Text>
          </View>
        </View>
        <TouchableOpacity>
        <View style={styles.notificationIcon}>
          <FontAwesome name="bell" size={20} color={colors.light.primary} />
        </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Header;
