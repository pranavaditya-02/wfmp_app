import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Svg, { Path, Rect } from 'react-native-svg';

const Checkbox = ({ checked }) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Rect
      x="1"
      y="1"
      width="22"
      height="22"
      rx="3"
      stroke={checked ? '#004080' : '#D9DBDD'} 
      strokeWidth="2"
      fill={checked ? '#004080' : 'none'}
    />
    {checked && (
      <Path
        d="M6 12L10 16L18 8"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    )}
  </Svg>
);

const ChecklistItem = ({ text, checked, onPress, showSeparator }) => (
  <View>
    <TouchableOpacity style={styles.itemRow} onPress={onPress}>
      <Checkbox checked={checked} />
      <Text style={styles.itemText}>{text}</Text>
    </TouchableOpacity>
    {showSeparator && <View style={styles.separator} />}
  </View>
);

const Checklist = () => {
  const [items, setItems] = useState([
    { text: 'Creating IA for project management', checked: false },
    { text: 'Flow chart ideation', checked: false },
    { text: 'UI layout setup', checked: true },
    { text: 'Basic UI components', checked: false },
  ]);

  const toggleChecked = (index) => {
    const newItems = [...items];
    newItems[index].checked = !newItems[index].checked;
    setItems(newItems);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Check list 04</Text>
      {items.map((item, index) => (
        <ChecklistItem
          key={index}
          text={item.text}
          checked={item.checked}
          onPress={() => toggleChecked(index)}
          showSeparator={index < items.length - 1} // Show separator only between items
        />
      ))}
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
    shadowOpacity: 0.1,
    shadowRadius: 4,
    
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  itemText: {
    marginLeft: 10,
    color: '#000',
  },
  separator: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginVertical: 10,
  },
});

export default Checklist;
