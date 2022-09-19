import {View, Text, StyleSheet, StatusBar } from "react-native"
import CoinView from "./screens/CoinView"
import TopBar from "./screens/TopBar"


function App() {
  return(

    <View style={styles.container}>  
    <View style={styles.statusbar} />
    <TopBar/>
    
    <CoinView   />

    </View>


  )
}

const styles = StyleSheet.create({
  statusbar: {
backgroundColor: 'red',
height: StatusBar.currentHeight


  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around'
  },

  

})

export default App