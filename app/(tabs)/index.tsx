import React, {Component} from "react";
import {Text, View, Image} from "react-native";

const MateriFlexBox = () => {
    return (
      <View>
        <View 
          style={{
            flexDirection: 'row', 
            backgroundColor: 'white', 
            alignItems: 'center',
            justifyContent: 'space-between',
            }}>
            <View style={{backgroundColor: 'red', width: 50, height: 80 }} />
            <View style={{backgroundColor: 'yellow', width: 50, height: 80 }} />
            <View style={{backgroundColor: 'green', width: 50, height: 80 }} />
            <View style={{backgroundColor: 'purple', width: 50, height: 80 }} />
            <View style={{backgroundColor: 'blue', width: 50, height: 80 }} />
            <View style={{backgroundColor: 'orange', width: 50, height: 80 }} />
            <View style={{backgroundColor: 'pink', width: 50, height: 80 }} />
            <View style={{backgroundColor: 'grey', width: 50, height: 80 }} />
            <View style={{backgroundColor: 'Azure', width: 50, height: 80 }} />
            <View style={{backgroundColor: 'Dark green', width: 50, height: 80 }} />
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <Text>Beranda</Text>
            <Text>Video</Text>
            <Text>Playlist</Text>
            <Text>Komunitas</Text>
            <Text>Channel</Text>
            <Text>Tentang</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
          <Image
            source={{
              uri:
              'https://i.pinimg.com/736x/ec/f8/7a/ecf87ae9e1dac579491b93adb025edd3.jpg',
            }}
            style={{width: 100, height: 100, borderRadius: 50, marginRight: 14}}></Image>
            <View>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>
              Vilanda Harsono
            </Text>
            <Text>160 centimeter</Text>
            </View>
          </View>
      </View>
    );
  };


  export default MateriFlexBox;

