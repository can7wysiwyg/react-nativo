import { View, StyleSheet, StatusBar, FlatList } from "react-native";
import CategoryItem from "./components/CategoryItem";
import Header from "./components/Header";
import Search from "./components/Search";
import { commonCat } from "./components/data";
import { useState } from "react";



function App() {
const[term, setTerm] = useState("Burger")


 
  

  return (
    <View style={styles.container}>
      <Header />
      <Search setTerm={setTerm} term={term} />
      <View style={{ marginLeft: 25 }}>
        <FlatList
          data={commonCat}
          renderItem={({ item, index }) => {
            return (
              <CategoryItem
                name={item.name}
                image={item.image}
                index={index}
                active={term === item.name}
                handlePress ={ () => setTerm(item.name)}
                
                
              />
            );
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
        />
      </View>

      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   // flex: 1,
  //   backgroundColor: '#FFF0F5',
  //   // alignItems: 'center',
  //   // justifyContent: 'center'
  // },
});

export default App;
