import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useTheme } from "@/context/ThemeContext";
import { Stack } from "expo-router";
import Header from "@/components/Header";
import { shadow } from "@/constants/Colors";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const HomePage = () => {
  const colors = useTheme();

  
  const expenses = [
    { category: "Subscriptions", amount: 10 },
    { category: "Movies", amount: 50 },
    { category: "Something A", amount: 30 },
    { category: "Something B", amount: 13.5 },
    { category: "Other Things", amount: 30 },
  ];

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.light.background,
      padding: 16,
    },
    title: {
      fontSize: 14,
      fontWeight: "bold",
      color: colors.light.mutedText,
    },
    cardContainer: {
      flexDirection: "row",
    },
    card: {
      width: 200,
      height: 150,
      borderRadius: 15,
      backgroundColor: colors.light.secondary,
      justifyContent: "center",
      alignItems: "center",
      marginRight: 16,
      padding: 16,
      ...shadow.heavy
    },
    cardText: {
      fontSize: 18,
      fontWeight: "bold",
      color: colors.light.background,
      textAlign: "center",
    },
    budget: {
      fontSize: 68,
      fontWeight: "bold",
      color: colors.light.text,
      marginBottom: 20,
    },
    cardAmount: {
      fontSize: 48,
      fontWeight: "bold",
      color: colors.light.primary,
      marginBottom: 20,
    },
    text: {
      fontSize: 16,
      color: colors.light.text,
      marginBottom: 12,
    },
    topContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      
    }
  });

  return (
    <>
      <Stack.Screen
        options={{
          header: () => <Header />,
        }}
      />
      <View style={styles.container}>
        {/* Title */}
        <View style={styles.topContainer}>
          <View>
          <Text style={styles.title}>Your budget for this week</Text>
          <Text style={styles.budget}>$250</Text>
          </View>
          <View style={{ padding: 20, backgroundColor: colors.light.muted, borderRadius: 12, marginRight: 12}}>
          <FontAwesome6 name="add" size={24} color="black" />
          </View>
        </View>
        <Text style={styles.text}>This week, you spent</Text>
        {/* Horizontal Scrollable Cards */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {expenses.map((expense, index) => (
            <View key={index} style={styles.card}>
              <Text style={styles.cardAmount}>
                ${expense.amount} 
              </Text>
              <Text style={styles.cardText}>
                {expense.category}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </>
  );
};

export default HomePage;