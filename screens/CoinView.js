import { View, Text, StyleSheet, Image } from "react-native"

function CoinView() {

    let date = new Date()
    let now = date.toLocaleDateString()

    return(<View style={styles.container}>
        <Image style={{ width: '100%', height: '30%'}} 
        source={{uri: 'https://collectionimages.npg.org.uk/large/mw62796/Marilyn-Monroe.jpg'}}
        />

        <Text style={styles.text}>Marilyn Monroe {now}</Text>
        
    </View>)
}

const styles = StyleSheet.create({
    container: {

    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around', // center, space-around
    marginTop: 5,
    marginBottom: 5

    },
    text: {
        color: 'black',
        top: '50%',
        right: '20%'

      }
})


export default CoinView