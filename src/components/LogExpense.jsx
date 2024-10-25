import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import Svg, { Circle, Path } from 'react-native-svg';
import ExpenseBottomSheet from './ExpenseBottomSheet'; // Make sure to import your ExpenseBottomSheet

const AddIcon = () => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Circle cx="12" cy="12" r="10" stroke="#F53D3D" strokeWidth="2" />
    <Path
      d="M12 8V16M8 12H16"
      stroke="#F53D3D"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const LogExpense = () => {
  const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);
  const [expenses, setExpenses] = useState([]);

  const toggleBottomSheet = () => {
    setBottomSheetVisible(!isBottomSheetVisible);
  };

  const handleExpenseSubmit = (expense) => {
    setExpenses(prevExpenses => [...prevExpenses, expense]);
    toggleBottomSheet(); // Close the bottom sheet after submission
  };

  const renderSeparator = () => (
    <View style={styles.separator} />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log expense</Text>

      <TouchableOpacity style={styles.addButton} onPress={toggleBottomSheet}>
        <AddIcon />
      </TouchableOpacity>

      <FlatList
        data={expenses}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.expenseRow}>
            <Text style={styles.expenseName}>{item.name}</Text>
            <Text style={styles.expenseDate}>• {item.date.toLocaleDateString()} • {item.amount} {item.currency}</Text>
          </View>
        )}
        ItemSeparatorComponent={renderSeparator} // Add separator component
      />

      {/* Expense Bottom Sheet Modal */}
      <ExpenseBottomSheet 
        visible={isBottomSheetVisible} 
        onClose={toggleBottomSheet} 
        onSubmit={handleExpenseSubmit} // Pass the submit function
      />
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
   // Align items to both ends
    marginVertical: 10,
  },
  expenseName: {
    color: '#4E585E',
    fontSize: 14,
    fontWeight: "500",
  },
  expenseDate: {
    color: '#6A7175',
    fontSize: 12,
    marginVertical:0,
    marginHorizontal:5,
  },
  addButton: {
    position: 'absolute',
    right: 15,
    top: 15,
  },
  separator: {
    height: 1,
    backgroundColor: '#E0E0E0', // Color of the separator
    marginVertical: 5,
  },
});

export default LogExpense;
