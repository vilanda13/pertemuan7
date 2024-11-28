import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const Story = props => {
  return(
    <View style={{alignItems: 'center', marginRight: 20}}>
    <Image source={{uri: props.gambar}} style={{width: 100, height: 100, borderRadius: 100/2}}></Image>
      <Text style={{maxWidth:60, textAlign: 'center'}}>{props.judul}</Text>
    </View>
  )
}
const PropsDinamis = () => {
  return (
    <View>
      <Text>Materi Component Dinamis dengan Props</Text>
      <ScrollView horizontal>
       <View style={{flexDirection: 'row'}}>

                    <Story judul="Youtube Channel" gambar="https://i.pinimg.com/736x/6d/03/8d/6d038d37d7bc127b5df1a331dce3f974.jpg" />
                    <Story judul="Kelas Online" gambar="https://i.pinimg.com/736x/b9/a3/3f/b9a33fe24f15f4665ed1868244989880.jpg" />
                    <Story judul="Kabayan Coding" gambar="https://i.pinimg.com/736x/b0/7a/66/b07a66c301afab9e609385aab00fc093.jpg" />
                    <Story judul="Shoot" gambar="https://i.pinimg.com/736x/f4/6a/93/f46a935fa901a0210f27f4cc40283c28.jpg" />
                    <Story judul="Food" gambar="https://i.pinimg.com/736x/00/41/81/0041811c432ddaeb75faa5cf49d20e15.jpg" />
                    <Story judul="Tamiya" gambar="https://i.pinimg.com/736x/c6/f3/38/c6f33868ab4fd43d81361e9b441adb10.jpg" />
                </View>
            </ScrollView>
        </View>
    );
};

export default PropsDinamis;

const styles = StyleSheet.create({
    greenText: {
        color: 'green', // Teks akan berwarna hijau
        textAlign: 'center',
        maxWidth: 50,
    },
});
