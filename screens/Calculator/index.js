import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useCalculator } from '../../hooks/useCalculator';

const Calculator = () => {
    const {
        numberButtons,
        operatorButtons,
        handleOperator,
        handleEqual,
        handleClear,
        handlePress,
        displayValue
      } = useCalculator()

  return (
    <View style={styles.container}>
      <Text style={styles.display}>{displayValue}</Text>
      <View style={styles.buttonGrid}>
        {chunkArray(numberButtons, 3).map((row, rowIndex) => (
          <View key={rowIndex} style={styles.buttonRow}>
            {row.map((buttonValue) => (
              <TouchableOpacity
                key={buttonValue}
                style={styles.button}
                onPress={() => handlePress(buttonValue)}
              >
                <Text style={styles.buttonText}>{buttonValue}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
        <View style={styles.buttonRow}>
          {operatorButtons.map((operator) => (
            <TouchableOpacity
              key={operator}
              style={styles.button}
              onPress={() => handleOperator(operator)}
            >
              <Text style={styles.buttonText}>{operator}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={handleEqual}>
          <Text style={styles.buttonText}>=</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleClear}>
          <Text style={styles.buttonText}>C</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const chunkArray = (array, chunkSize) => {
  const result = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#5564eb'
  },
  display: {
    fontSize: 40,
    textAlign: 'right',
    margin: 10,
    backgroundColor: '#333c87',
    borderRadius: 9,
    color: 'white',
    textAlign: 'center',

  },
  buttonGrid: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginBottom: 10,
    gap: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: 4
  },
  button: {
    backgroundColor: '#094293',
    padding: 20,
    borderRadius: 5,
    width: '20%', // Ajusta el ancho para tres columnas
    
  },
  buttonText: {
    fontSize: 40,
    textAlign: 'center',
    color: 'white'
  },
});

export default Calculator;
