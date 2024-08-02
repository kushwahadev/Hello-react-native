import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>FancyCard</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
        source={{uri:'https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800'}}
        style={styles.cardImage}
        />
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Daintree Rainforest</Text>
            <Text style={styles.cardPlace}>Queensland, Australia</Text>
            <Text style={styles.cardLabel}>One of the oldest rainforests, rich in biodiversity.</Text>
            <Text style={styles.cardDescription}>Majestic forests with towering trees stretch as far as the eye can see, providing a perfect escape from the hustle and bustle of daily life.  one feels a profound connection to nature and its timeless beauty.</Text>
        </View>

      </View>

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
    card:{
        width:350,
        height:360,
        borderRadius:6,
        marginVertical:12,
        marginHorizontal:16,
    },
    cardElevated:{

    },
    cardImage:{
        height:200,
        borderTopLeftRadius:16,
        borderTopRightRadius:16,
    },
    cardBody:{
        flex:1,
        flexGrow:1,
        paddingHorizontal:12,

        backgroundColor:'#FFFFFF',
    },
    cardTitle:{
        color:'#212121',
        fontSize:20,
        fontWeight:'bold',


    },
    cardPlace:{
        color:'#212121',

    },
    cardLabel:{
        color:'#212121',

    },
    cardDescription:{
        color:'#212121',

    },
});
