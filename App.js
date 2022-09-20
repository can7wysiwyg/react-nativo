
import {View,  StyleSheet, StatusBar, FlatList} from "react-native"
import CategoryItem from "./components/CategoryItem"
import Header from "./components/Header"
import Search from "./components/Search"


function App() {

  const commonCat = [
    {
      id:1,
      name: 'Burger',
      image: require('./components/images/burger.png')
    },
    {
      id:2,
      name: 'Pizza',
      image: require('./components/images/pizza.png')
    },
    {
      id:3,
      name: 'Dessert',
      image: require('./components/images/cake.png')
    },
    {
      id:4,
      name: 'Pasta',
      image: require('./components/images/pasta.png')
    },
    {
      id:5,
      name: 'Drink(s)',
      image: require('./components/images/smoothies.png')
    },
    {
      id:6,
      name: 'Steak',
      image: require('./components/images/steak.png')
    },




  ]

  return(
  

  <View style={styles.container}>
    <Header />
    <Search />
    <View style= {{marginLeft: 25}}>

    <FlatList data={commonCat} renderItem={({item, index}) => {
      
      return <CategoryItem name={item.name} image={item.image} index={index} />
    } } horizontal showsHorizontalScrollIndicator={false} keyExtractor={(item) =>  item.id } />

    </View>
    
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