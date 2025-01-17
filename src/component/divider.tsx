import React from 'react';
import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';
import { fontSizes } from '../constant/dimensions';

const DividerWithText = ({ text = 'or' }: { text?: string }) => {

     const { width } = useWindowDimensions();
      const isTablet = width > 600;
  return (
    <View style={[styles.container, isTablet && {marginVertical:0}]}>
      <View style={[styles.line]} />
      <Text style={styles.text}>{text}</Text>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  text: {
    marginHorizontal: 10,
    fontSize: fontSizes.xl,
    color: '#666',
  },
});

export default DividerWithText;
