import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { colors } from '../constant/colors';

const LoadingComponent = () => {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="large" color={colors.textPrimary} />
      {/* <Text  size={"large"} style={styles.loadingText}>Loading...</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: colors.textPrimary
  },
});

export default LoadingComponent;
