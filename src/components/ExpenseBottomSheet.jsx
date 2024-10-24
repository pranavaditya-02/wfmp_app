import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,  
  Switch,
  TouchableWithoutFeedback,
} from 'react-native';
import Modal from 'react-native-modal';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';

const ExpenseBottomSheet = ({ isVisible, onClose }) => {
    
  const [expenseName, setExpenseName] = useState('');
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('AED');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [billable, setBillable] = useState(false);
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleSave = () => {
    // Handle saving the expense
    console.log('Expense Saved:', {
      expenseName,
      amount,
      currency,
      category,
      description,
      billable,
      date,
    });
    onClose(); // Close the modal after saving
  };

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  return (
    <Modal isVisible={isVisible} style={styles.modal}>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.overlay} />
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback>
        <View style={styles.modalContent}>
          <Text style={styles.title}>Create expense</Text>

          <Text style={styles.label}>Expense name *</Text>
          <TextInput
            style={styles.input}
            value={expenseName}
            onChangeText={setExpenseName}
          />

          <Text style={styles.label}>Date *</Text>
          <TouchableOpacity onPress={() => setShowDatePicker(true)}>
            <Text style={styles.input}>{date.toLocaleDateString()}</Text>
          </TouchableOpacity>
          {showDatePicker && (
            <DateTimePicker
              value={date}
              mode="date"
              display="default"
              onChange={onDateChange}
            />
          )}

          <Text style={styles.label}>Currency *</Text>
          <Picker
            selectedValue={currency}
            onValueChange={(itemValue) => setCurrency(itemValue)}
            style={styles.picker}>
            <Picker.Item label="AED" value="AED" />
            <Picker.Item label="USD" value="USD" />
            {/* Add more currencies as needed */}
          </Picker>

          <Text style={styles.label}>Amount *</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={amount}
            onChangeText={setAmount}
          />

          <Text style={styles.label}>Category *</Text>
          <Picker
            selectedValue={category}
            onValueChange={(itemValue) => setCategory(itemValue)}
            style={styles.picker}>
            <Picker.Item label="Select category" value="" />
            <Picker.Item label="Travel" value="Travel" />
            <Picker.Item label="Food" value="Food" />
            {/* Add more categories as needed */}
          </Picker>

          <View style={styles.billableContainer}>
            <Text>Billable</Text>
            <Switch
              value={billable}
              onValueChange={setBillable}
            />
          </View>

          <Text style={styles.label}>Description</Text>
          <TextInput
            style={[styles.input, styles.descriptionInput]}
            multiline
            numberOfLines={4}
            value={description}
            onChangeText={setDescription}
          />

          <TouchableOpacity style={styles.uploadButton}>
            <Text style={styles.uploadButtonText}>Upload receipt</Text>
          </TouchableOpacity>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
              <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent overlay
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: '70%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color:"black"
  },
  label: {
    marginTop: 10,
    marginBottom: 5,
    fontSize: 14,
    color:"black"
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    height: 40,
    color:"black"
  },
  descriptionInput: {
    height: 80,
    color:"black"
  },
  picker: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    color:"black"
  },
  billableContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    color:"black"
  },
  uploadButton: {
    borderColor: '#007bff',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    alignItems: 'center',
    color:"black"
  },
  uploadButtonText: {
    color: '#007bff',
    color:"black"
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    
  },
  cancelButton: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginRight: 5,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: 'black',
  },
  saveButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginLeft: 5,
    alignItems: 'center',
  },
  saveButtonText: {
    color: 'white',
  },
});

export default ExpenseBottomSheet;
