import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Svg, { Path, Rect } from 'react-native-svg';
import CardHeader from './CardHeader';

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
       <CardHeader title="Check list" badgeCount={items.length} />
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
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    borderWidth: 1,
    borderColor: '#fff',
    margin: 16,
    marginBottom:-2,

    
  },
  title: {
    fontSize: 16,
    fontFamily:'Poppins-SemiBold',
    marginBottom: 10,
    color: 'black',
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    fontFamily:'Poppins-Medium',
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
