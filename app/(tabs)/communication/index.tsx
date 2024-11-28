import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Cart from "../component/cart";
import Product from "../component/produk";

const Communication = () => {
    const [totalProduct, setTotalProduct] = useState(0);
    return(
        <View style={style.container}>
            <Text style={style.textTitle}>Materi Komunikasi antar Component</Text>
            <Cart quantity={totalProduct}/>
            <Product onButtonPress={() => setTotalProduct(totalProduct + 1)} />
        </View>
    );
};

export default Communication;

const style = StyleSheet.create({
    container: {padding: 20},
    textTitle: {textAlign: 'center'},
});