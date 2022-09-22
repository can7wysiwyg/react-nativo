import { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { elevation } from "./styles";

function Search({ setTerm }) {
  const [inputt, setInputt] = useState("");

  const handleEdit = () => {
    if(!inputt) return 

    setTerm(inputt)
    setInputt("")
    
  }

  return (
    <View style={[styles.container, styles.elevation]}>
      <FontAwesome name="search" size={25} />

      <TextInput
        placeholder="restaurants, food"
        style={styles.input}
        value={inputt}
        onChangeText={(text) => {
          setInputt(text);
          
        }}
        onEndEditing={ handleEdit }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 5,
    marginHorizontal: 25,
    backgroundColor: "white",
    padding: 15,
    borderRadius: 40,
  },
  elevation,
  input: {
    fontSize: 20,
    marginLeft: 10,
  },
});

export default Search;
