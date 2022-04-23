import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

function TodoItems({ index, item, handlePressDel }) {
  return (
    <View key={index} style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <Text style={{ marginBottom: 1, paddingTop: 8, paddingBottom: 8 }}>
        {index + 1} - {item}
      </Text>
      <View style={{ marginBottom: 2 }}>
        <Button title="x" color="#ff91d3" onPress={handlePressDel} />
      </View>
    </View>
  );
}

export default TodoItems;
