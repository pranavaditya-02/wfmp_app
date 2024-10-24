import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Svg, { Circle, Path } from 'react-native-svg';

const AddIcon = () => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Circle cx="12" cy="12" r="10" stroke="#FF9000" strokeWidth="2" />
    <Path
      d="M12 8V16M8 12H16"
      stroke="#FF9000"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const LogExpense = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log expense 02</Text>

      <TouchableOpacity style={styles.addButton}>
        <AddIcon />
      </TouchableOpacity>

      <View style={styles.expenseRow}>
        <Text style={styles.expenseName}>Expense name</Text>
        <Text style={styles.expenseDate}>• 04/09/23 • 1050 AED</Text>
      </View>
      <View style={styles.separator} />

      <View style={styles.expenseRow}>
        <Text style={styles.expenseName}>Note buying</Text>
        <Text style={styles.expenseDate}>• 01/09/23 • 241 AED</Text>
      </View>
      {/* Removed separator after the last expense row */}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: '#000',
    
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: "black",
  },
  expenseRow: {
    flexDirection: 'row',
   
    marginBottom: 5,
  },
  expenseName: {
    color: '#4E585E',
    fontSize: 14,
    fontWeight:"500"
  },
  expenseDate: {
    color: '#6A7175',
    fontSize: 12,
    marginLeft: 10, // Added margin for spacing between name and date
  },
  addButton: {
    position: 'absolute',
    right: 15,
    top: 15, // Adjusted to position at the top
  },
  separator: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginVertical: 5, // Adds space between the separator and expense rows
  },
});

export default LogExpense;
