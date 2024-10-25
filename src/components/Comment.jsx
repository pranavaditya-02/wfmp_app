import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Image, KeyboardAvoidingView, Platform } from 'react-native';
import Svg, { Path } from 'react-native-svg';

// List of random usernames
const randomUsernames = ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Frank', 'Grace', 'Hannah'];

// List of avatars to be used
const avatarUrls = [
  'https://mighty.tools/mockmind-api/content/human/25.jpg',
  'https://mighty.tools/mockmind-api/content/human/59.jpg',
  'https://mighty.tools/mockmind-api/content/human/5.jpg'
];

const CommentSection = () => {
  const [comments, setComments] = useState([
    { id: 1, name: 'Hamza', avatar: avatarUrls[0], text: 'harum quidem rerum facilis est...', time: '1 day ago' },
    { id: 2, name: 'Mohammed', avatar: avatarUrls[1], text: 'Sure, Thanks', time: '12 hrs ago' }
  ]);

  const [newComment, setNewComment] = useState('');

  // Function to generate a random username
  const generateRandomUsername = () => {
    const randomIndex = Math.floor(Math.random() * randomUsernames.length);
    return randomUsernames[randomIndex];
  };

  // Function to generate a random avatar URL from the list
  const generateRandomAvatar = () => {
    const randomIndex = Math.floor(Math.random() * avatarUrls.length);
    return avatarUrls[randomIndex];
  };

  const addComment = () => {
    if (newComment.trim()) {
      const newCommentObject = {
        id: comments.length + 1,
        name: generateRandomUsername(), // Get a random username
        avatar: generateRandomAvatar(), // Get a random avatar URL
        text: newComment,
        time: 'Just now'
      };
      setComments([newCommentObject, ...comments]);
      setNewComment(''); // Clear the input after adding
    }
  };

  const renderComment = ({ item }) => (
    <View style={styles.commentContainer}>
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <View style={styles.commentContent}>
        <View style={styles.commentHeader}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.time}>{item.time}</Text>
        </View>
        <Text style={styles.commentText}>{item.text}</Text>
      </View>
    </View>
  );

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <Text style={styles.title}>Comments</Text>

      {/* Dynamic height for the comment list */}
      <View style={[
        styles.commentListContainer, 
        comments.length > 5 ? { maxHeight: 250 } : {} // Enforce scrolling if comments exceed 5
      ]}>
        <FlatList
          data={comments}
          renderItem={renderComment}
          keyExtractor={(item) => item.id.toString()}
          style={styles.commentList}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      </View>

      {/* Static Input Section */}
      <View style={styles.addCommentContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add comments"
          placeholderTextColor="gray"
          value={newComment}
          onChangeText={setNewComment}
        />
        <TouchableOpacity onPress={addComment} style={styles.sendButton}>
          {/* SVG Send Icon */}
          <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48" fill={"#4E585E"}>
            <Path d="M 5.4453125 4.0019531 A 1.50015 1.50015 0 0 0 4.109375 6.0644531 L 11.380859 24 L 4.109375 41.935547 A 1.50015 1.50015 0 0 0 6.1699219 43.841797 L 43.169922 25.341797 A 1.50015 1.50015 0 0 0 43.169922 22.658203 L 6.1699219 4.1582031 A 1.50015 1.50015 0 0 0 5.4453125 4.0019531 z M 8.3828125 8.6191406 L 39.146484 24 L 8.3828125 39.380859 L 14.011719 25.5 L 27.5 25.5 A 1.50015 1.50015 0 1 0 27.5 22.5 L 14.011719 22.5 L 8.3828125 8.6191406 z"></Path>
          </Svg>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
    flex: 1, 
    marginTop:20,
    marginBottom:20,
  },
  title: {
    fontSize: 16,
   fontFamily:'Poppins-SemiBold',
    marginBottom: 10,
    color: "black"
  },
  commentListContainer: {
    // Dynamically adjust the height based on the number of comments
  },
  commentList: {
    flexGrow: 0, // Prevent FlatList from expanding unnecessarily
  },
  commentContainer: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
    borderWidth: 2,
    borderColor: "#E5E8EB"
  },
  commentContent: {
    flex: 1,
  },
  commentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    fontFamily:'Poppins-SemiBold',
    color: "#02111A"
  },
  time: {
    color: 'gray',
    fontSize: 12,
    fontFamily:'Poppins-Medium',
  },
  commentText: {
    marginTop: 5,
    color: "#4E585E",
    marginBottom:10,
    fontFamily:'Poppins-Medium',
  },
  addCommentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop:-20,
    borderWidth: 1,
    borderColor: '#F0F3F6',
    borderRadius: 30,
    paddingLeft: 10,
    backgroundColor:"#F0F3F6",
    height:50
  },
  input: {
    flex: 1,
    height: 40,
    color: "black",
    fontFamily:'Poppins-Medium',
  },
  sendButton: {
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  sendButtonText: {
    color: '#007BFF',
    fontFamily:'Poppins-Medium',
  },
});

export default CommentSection;
