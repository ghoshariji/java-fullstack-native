import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Animated, Pressable } from 'react-native';

const CustomToast = ({ visible, message, onHide }) => {
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    if (visible) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start(() => {
        setTimeout(() => {
          hideToast();
        }, 2000); // Toast will disappear after 2 seconds
      });
    } else {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [visible]);

  const hideToast = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Pressable onPress={onHide}>
      <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
        <Text style={styles.message}>{message}</Text>
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 10,
    borderRadius: 5,
  },
  message: {
    color: '#ffffff',
  },
});

export default CustomToast;
