import { View, Pressable, Text, StyleSheet, Alert } from "react-native";

function handlePress() {
  Alert.alert("title", "message", [
    {
      text: "ok",
      onPress: () => {
        console.log("ok pressed");
      },
    },
  ]);
  console.log("press handled!");
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    padding: "0.5rem",
    width: "calc(100% - 1rem)",
    left: 10,
    bottom: 10,
    zIndex: 999,
  },
  text: {
    display: "flex",
  },
  pressable: {
    display: "flex",
    borderColor: "#fff",
    borderRadius: "25%",
    border: "1px solid",
    backgroundColor: "pink",
    padding: "1rem",
  },
});

function Input() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Message...</Text>
      <Pressable
        style={styles.pressable}
        onPress={handlePress}
      >
        <Text>{"=>"}</Text>
      </Pressable>
    </View>
  );
}

export default Input;
