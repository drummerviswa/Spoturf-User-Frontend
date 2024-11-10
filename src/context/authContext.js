import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null); // Changed from [] to null if it's an object
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(""); // To store error messages

  // Load user data from localStorage on initial load
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // Parse the stored user data
      setIsAuthenticated(true);
    }
    setLoading(false); // No need for loading as a dependency
  }, []);

  // Registration function to send OTP
  const register = async (mobileNo) => {
    try {
      const response = await axios.post(
        "http://localhost:8800/customer/auth/register",
        { mobileNo }
      );
      return response.data; // Returns OTP sent message or response data
    } catch (error) {
      console.error("Failed to send OTP for registration:", error);
      setErrorMessage("Registration failed. Please try again.");
      throw new Error("Failed to send OTP");
    }
  };

  // Function to verify OTP and complete registration
  const verifyRegisterOtp = async (userData) => {
    try {
      const response = await axios.post(
        "http://localhost:8800/customer/auth/verify-register-otp",
        userData
      );
      setUser(response.data); // Set user data on successful registration
      setIsAuthenticated(true);
      localStorage.setItem("user", JSON.stringify(response.data)); // Store as string
      return response.data;
    } catch (error) {
      console.error("OTP verification failed:", error);
      setErrorMessage("OTP verification failed. Please try again.");
      throw new Error("OTP verification failed");
    }
  };

  // Login function to send OTP
  const login = async (mobileNumber) => {
    try {
      const response = await axios.post(
        "http://localhost:8800/customer/auth/login",
        { mobileNo: mobileNumber }
      );
      return response.data;
    } catch (error) {
      console.error("Login failed:", error);
      setErrorMessage("Login failed. Please try again.");
      throw error;
    }
  };

  // Function to verify OTP and complete login
  const verifyOtp = async (mobileNo, otp) => {
    try {
      const response = await axios.post(
        "http://localhost:8800/customer/auth/verify-login-otp",
        { mobileNo, otp }
      );
      console.log("Login success");
      setUser(response.data.accessToken);
      setUserData(response.data.details); // Store user details
      setIsAuthenticated(true);
      localStorage.setItem("user", JSON.stringify(response.data.accessToken)); // Store token
      return response.data.accessToken;
    } catch (error) {
      console.error("OTP verification failed:", error);
      setErrorMessage("OTP verification failed. Please try again.");
      throw error;
    }
  };

  // Logout function
  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    setUserData(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider
      value={{
        register,
        verifyRegisterOtp,
        login,
        verifyOtp,
        logout,
        user,
        userData,
        isAuthenticated,
        loading,
        errorMessage, // Added to pass error message to the components
      }}
    >
      {loading ? <div>Loading...</div> : children}
    </AuthContext.Provider>
  );
};
