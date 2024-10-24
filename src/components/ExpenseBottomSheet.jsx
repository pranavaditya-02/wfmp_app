import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Modal from 'react-native-modal';
import { Picker } from '@react-native-picker/picker';
import Svg, { Path } from 'react-native-svg';

const ExpenseBottomSheet = ({ isVisible, onClose }) => {
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [currency, setCurrency] = useState('AED');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [expenseName, setExpenseName] = useState('');
  const [isBillable, setIsBillable] = useState(false); // State for billable option

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    setDate(selectedDate || date);
  };

  const toggleBillable = () => {
    setIsBillable(!isBillable);
  };

  return (
    <Modal isVisible={isVisible} onBackdropPress={onClose} style={styles.modal}>
      <View style={styles.container}>
        <Text style={styles.title}>Create expense</Text>

        {/* Expense Name */}
        <TextInput
          style={styles.input}
          placeholder="Expense name *"
          value={expenseName}
          onChangeText={setExpenseName}
          placeholderTextColor="#4E585E" // Set placeholder text color
        />

        {/* Date Picker */}
        <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.input}>
          <Text style={styles.dateText}>{date.toLocaleDateString()}</Text>
          <Svg height="20" width="20" viewBox="0 0 24 24" fill="none">
            <Path
              d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11zm-7-5h5v2h-5v-2zm-6 2h5v-2H6v2zm0-4h12v-2H6v2z"
              fill="#000"
            />
          </Svg>
        </TouchableOpacity>
        {showDatePicker && (
          <DateTimePicker
            value={date}
            mode="date"
            display="default"
            onChange={handleDateChange}
          />
        )}

        {/* Currency and Amount */}
        <View style={styles.row}>
          <View style={styles.currencyContainer}>
            <Picker
              selectedValue={currency}
              style={styles.picker}
              onValueChange={itemValue => setCurrency(itemValue)}>
              <Picker.Item label="AED" value="AED" />
              {/* Add more currencies as needed */}
            </Picker>
          </View>
          <TextInput
            style={styles.amountInput}
            placeholder="Amount"
            value={amount}
            onChangeText={setAmount}
            keyboardType="numeric"
            placeholderTextColor="#4E585E" // Set placeholder text color
          />
        </View>

        {/* Category */}
        <Picker
          selectedValue={category}
          style={styles.input}
          onValueChange={itemValue => setCategory(itemValue)}>
          <Picker.Item label="Select category" value="" />
          <Picker.Item label="Travel" value="travel" />
          <Picker.Item label="Food" value="food" />
          <Picker.Item label="Accommodation" value="accommodation" />
          {/* Add more categories as needed */}
        </Picker>

        {/* Billable Option with Custom Radio Button */}
        <View style={styles.row}>
          <TouchableOpacity onPress={toggleBillable} style={styles.radioButton}>
            <View style={[styles.radioOuter, isBillable && styles.radioSelected]}>
              {isBillable && <View style={styles.radioInner} />}
            </View>
            <Text style={styles.radioLabel}>Billable</Text>
          </TouchableOpacity>
        </View>

        {/* Description */}
        <TextInput
          style={styles.descriptionInput} // Use the new style for description input
          placeholder="Description"
          multiline={true}
          placeholderTextColor="#4E585E" // Set placeholder text color
        />

        {/* Upload Receipt */}
        <TouchableOpacity style={styles.uploadContainer}>
          <Svg height="20" width="20" viewBox="0 0 24 24" fill="none">
            <Path
              d="M9 19h6v-2H9v2zm3-14C9.24 5 7 7.24 7 10c0 3.31 4.14 7.27 4.29 7.43l.71.71.71-.71C12.86 17.27 17 13.31 17 10c0-2.76-2.24-5-5-5zm0 9c-1.71 0-3-1.29-3-3s1.29-3 3-3 3 1.29 3 3-1.29 3-3 3zm1-3h-2V7h2v4zm5 7h-2v2h4v-4h-2v2z"
              fill="#000"
            />
          </Svg>
          <Text style={styles.uploadText}>Upload receipt</Text>
        </TouchableOpacity>

        {/* Buttons */}
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.cancelButton}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.saveButton}>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  container: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
  },
  input: {
    backgroundColor: '#F5F7F9',
    borderWidth: 1,
    borderColor: '#E4EAEE',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    color: 'black',
  },
  dateText: {
    color: 'black',
    padding: 12,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  currencyContainer: {
    width: '48%',
    borderWidth: 1,
    borderColor: '#E4EAEE',
    borderRadius: 8,
    backgroundColor: '#F5F7F9',
    color: 'black',
  },
  picker: {
    height: 50,
    width: '100%',
    color: 'black',
  },
  amountInput: {
    width: '48%',
    borderWidth: 1,
    borderColor: '#E4EAEE',
    borderRadius: 8,
    padding: 12,
    backgroundColor: '#F5F7F9',
    color: 'black',
  },
  descriptionInput: { // New style for description input
    backgroundColor: '#F5F7F9',
    borderWidth: 1,
    borderColor: '#E4EAEE',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    height: 100, // Increased height for the description input
    color: 'black',
  },
  uploadContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    borderWidth: 1,
    borderColor: '#E4EAEE',
    borderRadius: 8,
    marginBottom: 20,
    color: 'black',
  },
  uploadText: {
    marginLeft: 8,
    fontSize: 16,
    color: 'black',
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioOuter: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#D9DBDD',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  radioInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#000',
  },
  radioSelected: {
    borderColor: '#002957',
  },
  radioLabel: {
    fontSize: 16,
    color: 'black',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cancelButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#E4EAEE',
    borderRadius: 8,
    padding: 12,
    width: '48%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  saveButton: {
    backgroundColor: '#007BFF',
    borderRadius: 8,
    padding: 12,
    width: '48%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
  },
});

export default ExpenseBottomSheet;
