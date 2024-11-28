import { StyleSheet, View, Text, Image } from 'react-native'
import React from 'react'
import cart from './keranjang.jpg'

const Cart = (props) => {
  return (
    <View>
       <View style={styles.cartWrapper}>
            <Image source={cart} style={styles.iconCart}></Image>
            <Text style={styles.notif}>{props.quantity}</Text>     
        </View>
        <Text style={styles.text}>Keranjang belanja</Text>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
    wrapper: {padding: 20, alignItems: 'center'},
    cartWrapper: {borderWidth:1, borderColor: '#4398D1', width: 93, height: 93, borderRadius: 93 / 2, justifyContent: 'center', alignItems: 'center', position: 'relative'},
    iconCart: {width:50, height:50},
    text: {fontSize: 12, color: '777777', fontWeight:'700', marginTop: 8},
    notif: {fontSize: 12, color: 'white', backgroundColor: '#6FCF97', padding: 5, borderRadius: 25, width: 24, height: 24, position: 'absolute', top:0, right:0 }
})