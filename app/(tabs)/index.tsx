import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Alert,
  TouchableOpacity,
} from "react-native";
import { useTheme } from "@/context/ThemeContext";
import { Stack } from "expo-router";
import Header from "@/components/Header";
import { shadow } from "@/constants/Colors";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { expenseData } from "@/constants/expenses";

const HomePage = () => {
  const colors = useTheme();
  const [budget, setBudget] = useState(250); // Initial budget
  const [expenses, setExpenses] = useState(expenseData);

  const totalAmount = 500;
  // Function to handle the Add button press
  const handleAddTransaction = () => {
    const newTransaction = {
      category: "Takeout",
      amount: 50,
      color: "black",
      date: new Date().toISOString().split("T")[0], // Format date as "YYYY-MM-DD"
    };

    // Trigger Spending Coach Alert
    Alert.alert(
      "Spending Coach",
      `You spent $${
        totalAmount - budget
      } this week. Only $${budget} is left. Cool or cut back $50?`,
      [
        {
          text: "Cut Back",
          onPress: () => {
            // Cancel the transaction (do nothing)
          },
          style: "cancel",
        },
        {
          text: "Cool",
          onPress: () => {
            // Deduct the money and add the transaction at the beginning of the list
            setBudget((prevBudget) => prevBudget - newTransaction.amount);
            setExpenses((prevExpenses) => [newTransaction, ...prevExpenses]); // Prepend the new transaction
          },
        },
      ]
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.light.background,
      padding: 16,
    },
    title: {
      fontSize: 14,
      fontWeight: "500",
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
      ...shadow.heavy,
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
    },
    addButton: {
      padding: 20,
      backgroundColor: colors.light.muted,
      borderRadius: 12,
      marginRight: 12,
    },
  });

  return (
    <>
      <Stack.Screen
        options={{
          header: () => <Header />,
        }}
      />
      <View style={styles.container}>
        {/* Title and Add Button */}
        <View style={styles.topContainer}>
          <View>
            <Text style={styles.title}>This week's budget</Text>
            <Text style={styles.budget}>${budget}<Text style={{fontSize: 20}}>/ </Text><Text style={{fontSize: 14}}>$500</Text></Text>
          </View>
          <TouchableOpacity
            style={styles.addButton}
            onPress={handleAddTransaction}
          >
            <FontAwesome6 name="add" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <Text style={styles.text}>This week, you spent</Text>

        {/* Horizontal Scrollable Cards */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {expenses.map((expense, index) => (
            <View key={index} style={styles.card}>
              <Text style={styles.cardAmount}>${expense.amount}</Text>
              <Text style={styles.cardText}>{expense.category}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </>
  );
};

export default HomePage;
