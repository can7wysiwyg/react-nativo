import {View, Text, StyleSheet} from "react-native"

function TopBar({title}) {
    return(<View style={styles.container}>
        <Text style={{fontFamily: 'monospace'}}>{title}</Text>
        
    </View>)
}

const styles = StyleSheet.create({
    container: {
    alignSelf: 'stretch',
    height: 52,
    flexDirection: 'row', // row
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'space-between', // center, space-around
    paddingLeft: 10,
    paddingRight: 10
 }
})

export default TopBar