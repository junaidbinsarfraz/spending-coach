import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";
import { useTheme } from "@/context/ThemeContext";

interface TransactionCardProps {
  amount: number;
  category: string;
}

const TransactionCard: React.FC<TransactionCardProps> = ({ amount, category }) => {
  const colors = useTheme()
  const styles = StyleSheet.create({
    card: {
      width: 200,
      height: 150,
      borderRadius: 15,
      justifyContent: "center",
      alignItems: "center",
      marginRight: 16,
      padding: 16,
      shadowColor: Colors.light.text,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
      backgroundColor: colors.light.secondary
    },
    cardAmount: {
      fontSize: 48,
      fontWeight: "bold",
      color: Colors.light.primary,
      marginBottom: 20,
    },
    cardText: {
      fontSize: 18,
      fontWeight: "bold",
      color: Colors.light.background,
      textAlign: "center",
    },
  });
  
  return (
    <View style={[styles.card]}>
      <Text style={styles.cardAmount}>${amount}</Text>
      <Text style={styles.cardText}>{category}</Text>
    </View>
  );
};

export default TransactionCard;