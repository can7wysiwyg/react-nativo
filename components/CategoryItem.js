import {View, StyleSheet, Text, Image} from "react-native"
import {elevation} from "./styles"

function CategoryItem() {
    return(<View style={[styles.container, styles.elevation]}>
        <View style={styles.imageContainer}>
            <Image source={require('./images/burger.png')} style={styles.image} />

        </View>
        <Text style={styles.text}>Burger</Text>

    </View>)
}


const styles = StyleSheet.create({

    container: {
        width: 70,
        height: 100,
        borderRadius: 70,
        marginVertical: 15,
        marginHorizontal: 25,
        backgroundColor: "white",
        alignItems: 'center',
        justifyContent: 'center'
    },
    elevation,
    image: {
        width: 35,
        height: 35
    },
    imageContainer: {
        width: 50,
        height: 50,
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 70

    },
    text: {
        fontWeight: 'bold'
    }

})

export default CategoryItem
