
import {View,  StyleSheet, StatusBar} from "react-native"
import CategoryItem from "./components/CategoryItem"
import Header from "./components/Header"
import Search from "./components/Search"

function App() {
  return(
  

  <View style={styles.container}>
    <Header />
    <Search />
    <CategoryItem />
  
  
  <StatusBar  />
  </View>)
}

const styles = StyleSheet.create({
  // container: {
  //   // flex: 1,
  //   backgroundColor: '#FFF0F5',
  //   // alignItems: 'center',
  //   // justifyContent: 'center'
    
    

  // },
  
})



export default App