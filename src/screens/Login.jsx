// src/screens/Login.js
import React, { useState } from "react";
import {
  View,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import Colabo from "../assets/images/Colabo";
import Login from "../assets/images/Login";
import Loginbg from "../assets/images/Loginbg";
import CustomTextInput from "../components/Textinput";
import LoginButton from "../components/Loginbutton";
import RightArrowIcon from "../assets/icons/Rightarrow";
import EyeComponent from "../assets/icons/Eye";

const { width, height } = Dimensions.get("window");

const LoginScreen = ({ onLogin }) => {
  // Accept onLogin as prop
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleLoginPress = () => {
    console.log("Log in button pressed");
    onLogin(); // Call onLogin when the user presses the login button
    // Optionally, you can add your login logic here
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <View style={styles.container}>
      <Loginbg style={styles.background} />

      {/* Image Container */}
      <View style={styles.imageContainer}>
        <Login style={styles.loginImage} />
        <Colabo style={styles.colaboImage} />
      </View>

      {/* Form Container */}
      <View style={styles.formContainer}>
        <Text style={styles.loginTitle}>Login to your account</Text>

        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Your work email</Text>
          <CustomTextInput
            placeholder="Enter your email"
            height={50}
            width={width * 0.85}
            borderColor="#ccc"
            borderRadius={8}
          />
        </View>

        <View style={styles.inputGroup}>
          <View style={styles.passwordLabelContainer}>
            <Text style={styles.inputLabel}>Your password</Text>
            <TouchableOpacity>
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
          <CustomTextInput
            placeholder="Your password"
            height={50}
            width={width * 0.85}
            borderColor="#ccc"
            borderRadius={8}
            secureTextEntry={!passwordVisible}
            rightIcon={
              <TouchableOpacity
                onPress={togglePasswordVisibility}
                style={{ padding: 5, marginRight: 5 }}
              >
                <EyeComponent width={24} height={24} />
              </TouchableOpacity>
            }
          />
        </View>

        <View style={styles.buttonContainer}>
          <LoginButton
            text="Log in"
            SvgIcon={<RightArrowIcon />}
            backgroundColor="#00BFA6"
            textColor="#fff"
            onPress={handleLoginPress} // Call the login handler
            height={52}
            width={width * 0.83}
            borderRadius={10}
            fontSize={16}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00B7A814", // Transparent background color
    justifyContent: "center",
    alignItems: "center",
  },
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: height * 0.4, // Reserve 40% of the height for images
  },
  loginImage: {
    marginTop: 40,
  },
  colaboImage: {
    marginTop: 30,
    marginLeft: 12,
  },
  formContainer: {
    backgroundColor: "#FFFFFF",
    width: "100%",
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 30,
  },
  loginTitle: {
    textAlign: "center",
    fontSize: 20,
    color: "#4a4a4a",
    fontFamily: "Poppins-SemiBold",
    marginBottom: 10,
    marginRight: 90,
  },
  inputGroup: {
    marginBottom: 10,
  },
  inputLabel: {
    color: "#535353",
    fontFamily: "Poppins-Medium",
    fontSize: 12,
    marginTop: 8,
    marginBottom: 8,
    marginHorizontal: 8,
  },
  passwordLabelContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  forgotPasswordText: {
    color: "#00bfa5",
    fontFamily: "Poppins-Medium",
    fontSize: 12,
    marginTop: 10,
  },

  buttonContainer: {
    marginTop: 80,
    alignItems: "center",
  },
});

export default LoginScreen;
