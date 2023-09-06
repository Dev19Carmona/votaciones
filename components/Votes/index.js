import React from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import { Field, Formik } from "formik";
import { RadioButton, Text } from "react-native-paper";
import { Icon } from "react-native-elements";

const Votes = ({ candidates = [], votes = {} }) => {
  return (
    <View style={styles.container}>
      <View>
        {candidates.map((candidate, i) => (
          <View key={i} style={styles.candidate}>
            <Text style={{ fontSize: 15 }}>{candidate}</Text>
            <Text style={{ fontSize: 15 }}>
              {votes[candidate] ? votes[candidate] : "0"}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  candidate: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "70%"
  },
  container: {
    height: "95%",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    margin: 10,
    padding: 30,
    flex: 1,
    alignItems: "center",
  },
});

export default Votes;
