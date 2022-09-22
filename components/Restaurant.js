import axios from "axios"
import { StyleSheet, View, Text } from "react-native"


function Restaurant() {

    const searchRestaurants = async() => {
        const res = await axios.get("https://foodbukka.herokuapp.com/api/v1/search?q=jollof")
        console.log(res);
    }
    searchRestaurants()

    return(<View style={styles.container}>
<Text style={styles.header}>Top Restaurants</Text>

    </View>)
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 25,
        marginVertical: 10,
        flex: 1
    },
    header: {
        fontWeight: "bold",
        fontSize: 20,
        paddingBottom: 10,
        height: 100
    }
})

export default Restaurant