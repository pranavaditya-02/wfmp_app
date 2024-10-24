import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
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

  const toggleBottomSheet = () => {
    setBottomSheetVisible(!isBottomSheetVisible);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log expense 02</Text>

      <TouchableOpacity style={styles.addButton} onPress={toggleBottomSheet}>
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

      {/* Expense Bottom Sheet Modal */}
      <ExpenseBottomSheet 
        isVisible={isBottomSheetVisible} 
        onClose={toggleBottomSheet} 
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
    margin: 10,
  },
  expenseName: {
    color: '#4E585E',
    fontSize: 14,
    fontWeight: "500"
  },
  expenseDate: {
    color: '#6A7175',
    fontSize: 12,
    marginLeft: 10,
  },
  addButton: {
    position: 'absolute',
    right: 15,
    top: 15,
  },
  separator: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginVertical: 5,
  },
});

export default LogExpense;
