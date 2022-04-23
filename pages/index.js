import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { useState } from "react";
import TodoItems from "./components/TodoItems";

export default function App(props) {
  const [list, setList] = useState([]);
  const [textBox, setTextBox] = useState([]);
  const handleText = (e) => {
    setTextBox(e);
  };
  const handlePress = () => {
    setList([...list, textBox]);
    setTextBox("");
  };

  return (
    <View style={styles.globalHolder}>
      <View style={styles.container}>
        <Text accessibilityRole="header" style={styles.text}>
          ToDo List
        </Text>

        <View style={{ flexDirection: "row" }}>
          <TextInput placeholder="Type here..." onChangeText={handleText} value={textBox} />
          {textBox.length <= 4 ? (
            <Button disabled title="+" color="red" />
          ) : (
            <Button title="+" color="#4a4a4a" onPress={handlePress} />
          )}
        </View>

        {textBox.length <= 4 && (
          <View
            style={{
              width: "82%",
              justifyContent: "center",
              flexDirection: "row",
              backgroundColor: "rgba(51, 51, 51, 0.7)",
              borderRadius: 10,
              marginTop: 10,
              height: 20,
            }}
          >
            <Text style={{ color: "#ffffff" }}>Write at least 5 letters</Text>
          </View>
        )}

        <View style={{ justifyContent: "flex-start", width: "100%", marginTop: 10 }}>
          {list.map((item, index) => (
            <TodoItems
              item={item}
              index={index}
              handlePressDel={() => {
                setList([...list.slice(0, index), ...list.slice(index + 1)]);
              }}
            />
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  globalHolder: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: 500,
    height: "80vh",
    marginTop: "auto",
    marginBottom: "auto",
    marginRight: "auto",
    marginLeft: "auto",
    backgroundColor: "#c2f2ff",
    borderRadius: 20,
  },
  container: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "flex-start",
    // width: "100%",
    maxWidth: 200,
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: 40,
  },
  text: {
    alignItems: "center",
    fontSize: 34,
    marginBottom: 44,
    color: "#fff",
    backgroundColor: "black",
    width: "90%",
    textAlign: "center",
    borderRadius: 10,
    padding: 2,
  },
});
