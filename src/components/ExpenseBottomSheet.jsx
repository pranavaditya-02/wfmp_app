import React, { useState } from 'react';
import {
  Modal,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Downarrowicon from '../assets/icons/DownArrow';
import CalendarIcon from '../assets/icons/CalenderIcon';
import ShareIcon from '../assets/icons/Upload';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as DocumentPicker from 'react-native-document-picker';


const ExpenseBottomSheet = ({ visible, onClose, onSubmit }) => {
  const [expenseName, setExpenseName] = useState('');
  const [expenseDate, setExpenseDate] = useState(new Date());
  const [expenseAmount, setExpenseAmount] = useState('');
  const [currency, setCurrency] = useState('AED');
  const [category, setCategory] = useState('Education');
  const [isCurrencyDropdownVisible, setIsCurrencyDropdownVisible] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleSubmit = () => {
    if (!expenseName || !expenseAmount) {
      alert('Please fill in all fields');
      return;
    }

    const expense = {
      name: expenseName,
      date: expenseDate,
      amount: expenseAmount,
      currency,
      category,
      file: uploadedFile,
    };
    onSubmit(expense);
    resetForm();
  };

  const resetForm = () => {
    setExpenseName('');
    setExpenseDate(new Date());
    setExpenseAmount('');
    setCurrency('AED');
    setCategory('Education');
    setUploadedFile(null);
  };

  const handleFileUpload = async () => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      setUploadedFile(result[0]);
    } catch (error) {
      if (DocumentPicker.isCancel(error)) {
        console.log('File selection was canceled');
      } else {
        console.error('File selection error:', error);
      }
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <KeyboardAvoidingView
          style={styles.modalContent}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <Text style={styles.modalTitle}>Create Expense</Text>

          {/* Input fields */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Expense Name</Text>
            <TextInput
              placeholder="Enter expense name"
              value={expenseName}
              onChangeText={setExpenseName}
              style={styles.input}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Date</Text>
            <View style={styles.row}>
              <TextInput
                placeholder="Enter date"
                value={expenseDate.toLocaleDateString()}
                style={[styles.input, { flex: 1 }]}
                onFocus={() => setShowDatePicker(true)}
              />
              <TouchableOpacity onPress={() => setShowDatePicker(true)}>
                <CalendarIcon />
              </TouchableOpacity>
            </View>
            {showDatePicker && (
              <DateTimePicker
                value={expenseDate}
                mode="date"
                display="default"
                onChange={(event, selectedDate) => {
                  const currentDate = selectedDate || expenseDate;
                  setShowDatePicker(false);
                  setExpenseDate(currentDate);
                }}
              />
            )}
          </View>

          <View style={styles.amountCurrency}>
            <View style={styles.inputContainer1}>
              <Text style={styles.label}>Currency</Text>
              <TouchableOpacity
                onPress={() => setIsCurrencyDropdownVisible(!isCurrencyDropdownVisible)}
                style={styles.row}>
                <TextInput
                  placeholder="Currency"
                  value={currency}
                  editable={false}
                  style={[styles.input, { flex: 1 }]}
                />
                <Downarrowicon />
              </TouchableOpacity>
              {isCurrencyDropdownVisible && (
                <View style={styles.dropdown}>
                  <FlatList
                    data={['AED', 'INR', 'EUR']}
                    keyExtractor={(item) => item}
                    renderItem={({ item }) => (
                      <TouchableOpacity
                        onPress={() => {
                          setCurrency(item);
                          setIsCurrencyDropdownVisible(false);
                        }}>
                        <Text style={styles.dropdownItemText}>{item}</Text>
                      </TouchableOpacity>
                    )}
                  />
                </View>
              )}
            </View>

            <View style={styles.inputContainer1}>
              <Text style={styles.label}>Amount</Text>
              <TextInput
                placeholder="Enter Amount"
                value={expenseAmount}
                onChangeText={setExpenseAmount}
                keyboardType="numeric"
                style={styles.input}
              />
            </View>
          </View>

          {/* Upload File Section */}
          <View style={styles.uploadContainer}>
            <TouchableOpacity style={styles.uploadButton} onPress={handleFileUpload}>
              <ShareIcon />
              <Text style={styles.uploadButtonText}>
                {uploadedFile ? uploadedFile.name : 'Upload File'}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonRow}>
            <TouchableOpacity
              style={[styles.button, styles.cancelButton]}
              onPress={onClose}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.submitButton]}
              onPress={handleSubmit}>
              <Text style={styles.buttonText1}>Save</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
 modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 16,
    paddingBottom: 0,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  label: {
    fontSize: 12,
    fontWeight: '500',
    color: 'grey',
    paddingLeft: 10,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    padding: 2,
    width: '100%',
  },
  inputContainer1: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    padding: 2,
    width: '48%',
  },
  input: {
    paddingLeft: 10,
    height: 40,
    borderWidth: 0,
    color: 'black',
  },
  amountCurrency: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dropdown: {
    position: 'absolute',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    width: '100%',
    marginTop: 5,
  },
  dropdownItemText: {
    color: 'black',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
    paddingBottom: 16,
  },
  button: {
    borderRadius: 5,
    padding: 10,
    width: '48%',
  },
  cancelButton: {
    borderColor: '#0C356A',
    borderWidth: 1,
  },
  submitButton: {
    backgroundColor: '#0C356A',
    height: 48,
  },
  buttonText: {
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
  },
  buttonText1: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  uploadContainer: {
    marginVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%', // Increase to full width or set to a specific value
  },
  uploadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#0C356A',
    borderStyle: 'dotted', // Dotted border
    width: '100%', // Adjust this to control the width as needed
  },
  uploadButtonText: {
    marginLeft: 8,
    color: 'black',
    fontFamily: 'Poppins-Medium',
  },
});

export default ExpenseBottomSheet;