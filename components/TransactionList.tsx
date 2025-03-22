import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

interface Transaction {
  category: string;
  amount: number;
  color: string;
  date: string;
}

interface TransactionListProps {
  transactions: Transaction[];
}

const TransactionList: React.FC<TransactionListProps> = ({ transactions }) => {
  return (
    <View style={styles.container}>
      {transactions.map((transaction, index) => (
        <View key={index} style={styles.transactionItem}>
          {/* Category Chip */}
          <View style={[styles.chip, { backgroundColor: transaction.color }]}>
            <Text style={styles.chipText}>{transaction.category}</Text>
          </View>

          {/* Amount */}
          <Text style={styles.amount}>${transaction.amount.toFixed(2)}</Text>

          {/* Date */}
          <Text style={styles.date}>{transaction.date}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  transactionItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: Colors.light.secondary,
    borderRadius: 10,
  },
  chip: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  chipText: {
    fontSize: 14,
    fontWeight: "bold",
    color: Colors.light.background,
  },
  amount: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.light.text,
  },
  date: {
    fontSize: 14,
    color: Colors.light.mutedText,
  },
});

export default TransactionList;