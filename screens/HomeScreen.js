import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Platform,
    StatusBar,
    ImageBackground,
    Image
} from "react-native";

export default class HomeScreen extends Component {
    render() {
        return (
          <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <ImageBackground source={require('../assets/bg.png')} style={styles.backgroundImage}>
                    <View style={styles.titleBar}>
                        <Text style={styles.titleText}>Formulaster</Text>
                    </View>

                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("Algebra1")
                    }>
                        <Text style={styles.routeText}>Algebra 1</Text>
                        <Text style={styles.knowMore}>{"Subject List --->"}</Text>
                        <Image source={require("../assets/alg1bg.png")} style={styles.iconImage1}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("Geometry")
                    }>
                        <Text style={styles.routeText}>Geometry</Text>
                        <Text style={styles.knowMore}>{"Subject List --->"}</Text>
                        <Image source={require("../assets/geobg1.png")} style={styles.iconImage2}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("Algebra2")
                    }>
                        <Text style={styles.routeText}>Algebra 2</Text>
                        <Text style={styles.knowMore}>{"Subject List --->"}</Text>
                        <Image source={require("../assets/alg2bg.png")} style={styles.iconImage2}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("Trigonometry")
                    }>
                        <Text style={styles.routeText}>Trigonometry</Text>
                        <Text style={styles.knowMore}>{"Subject List --->"}</Text>
                        <Image source={require("../assets/trigbg.png")} style={styles.iconImage1}></Image>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("Precal")
                    }>
                        <Text style={styles.routeText}>Pre-Calc</Text>
                        <Text style={styles.knowMore}>{"Subject List --->"}</Text>
                        <Image source={require("../assets/precalbg.png")} style={styles.iconImage2}></Image>
                    </TouchableOpacity>
                    


                </ImageBackground>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    backgroundImage: {
        height:1000
    },
    routeCard: {
        flex: 0.4,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 50,
        borderRadius: 30,
        backgroundColor: 'white'
    },
    titleBar: {
        flex: 0.15,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        fontSize: 40,
        fontWeight: "bold",
        color: "white"
    },
    routeText: {
        fontSize: 27,
        fontWeight: "bold",
        color: "black",
        marginTop: 75,
        paddingLeft: 30
    },
    knowMore: {
        paddingLeft: 30,
        color: "red",
        fontSize: 15
    },
    bgDigit: {
        position: "absolute",
        color: "rgba(183, 183, 183, 0.5)",
        fontSize: 150,
        right: 20,
        bottom: -15,
        zIndex: -1
    },
    iconImage1: {
        position: "absolute",
        height: 200,
        width: 200,
        resizeMode: "contain",
        right: 10,
        top: -55
    },
    iconImage2: {
        position: "absolute",
        height: 200,
        width: 150,
        right: 20,
        top: -60,
    },
    iconImage3: {
        position: "absolute",
        resizeMode: "contain",
        right: 20,
        top: -60,
    }
});