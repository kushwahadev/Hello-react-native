import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function ContactList() {

      const actress = [
        {
          id: 1,
          name: 'Sara Ali Khan',
          status: 'Online',
          image: 'https://i.pinimg.com/474x/46/1e/0f/461e0ff8f9a6b551aa25946f90118b95.jpg',
        },
        {
          id: 2,
          name: 'Janhvi Kapoor',
          status: 'Offline',
          image:'https://i.pinimg.com/474x/72/16/09/7216098a128ab56514cf623ded9ef7fd.jpg',
        },
        {
          id: 3,
          name: 'Ananya Panday',
          status: 'Away',
          image:'https://i.pinimg.com/736x/73/4b/cf/734bcfed2cada296735b53669a874497.jpg',
        },
        {
          id: 4,
          name: 'Tara Sutaria',
          status: 'Online',
          image:'https://i.pinimg.com/474x/9e/e9/dc/9ee9dcb4b1807248b2da8448d73a803d.jpg',
        },
        {
          id: 5,
          name: 'Kiara Advani',
          status: 'Busy',
          image:'https://i.pinimg.com/474x/b4/9b/31/b49b315cfeb7b30c3b345a46737aa49f.jpg',
        },
        {
          id: 6,
          name: 'Bhumi Pednekar',
          status: 'Offline',
          image:'https://i.pinimg.com/474x/db/ff/ac/dbffac2226551fafa022830fe94be9ff.jpg',
        },
        {
          id: 7,
          name: 'Kriti Sanon',
          status: 'Online',
          image:'https://i.pinimg.com/474x/0f/0d/ca/0f0dca6aeb41ca3abcedd842aa417a81.jpg',
        },
        {
          id: 8,
          name: 'Sanya Malhotra',
          status: 'Away',
          image:'https://i.pinimg.com/474x/14/66/2d/14662d5336e1ac53957fa49f773629f7.jpg',
        },
        {
          id: 9,
          name: 'Mrunal Thakur',
          status: 'Busy',
          image:'https://i.pinimg.com/474x/70/27/e1/7027e1a56f76e63519ffa75fe7b5522b.jpg',
        },
        {
          id: 10,
          name: 'Nushrat Bharucha',
          status: 'Online',
          image:'https://i.pinimg.com/474x/f3/72/47/f37247a597a744239c72d58fe4db15bb.jpg',
        },
      ];



  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView style={styles.container} scrollEnabled={true} horizontal={true}>
        {
            actress.map(({id,name,status,image}) => (
                <View key={id} style={styles.userCard} >
                    <Image source={{uri : image}} style={styles.userImage}/>
                    <View style={styles.cardAbout}>
                    <Text style={styles.userName}>{name}</Text>
                    <Text style={styles.userStatus}>{status}</Text>

                    </View>
                </View>
            ))

        }

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8,
        color:'maroon',
    },
    container:{
        paddingHorizontal:16,
    },
    userCard:{
        flex:1,
        flexDirection:'column',
        padding:8,
    },
    userImage:{
        width:300,
        height:500,
        borderRadius:8,
        elevation:3,
    },
    userName:{
        color:'#f96a00',
        fontSize:20,
        fontWeight:'bold',
        marginBottom:5,
    },
    userStatus:{
        color:'#429867',
    },
    cardAbout:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
        marginTop:10,
        paddingHorizontal:10,
    },
});

