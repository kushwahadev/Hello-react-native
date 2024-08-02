import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

export default function ActionCard() {
    function openWebsite(websiteLink: string){
        Linking.openURL(websiteLink);
    }
  return (
    <View>
      <Text style={styles.headingText}>ActionCard</Text>
      <View style={[styles.card, styles.cardElevated]}>
       <View style={styles.headingContainer}>
       <Text style={styles.headerText}>
        learning react - native
        </Text>
       </View>
       <Image
       style={styles.cardImage}
       source={{uri:'https://images.unsplash.com/photo-1722325009084-6bfc230f0860?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D'}}/>
      <View style={styles.cardBody}>
        <Text numberOfLines={2}>
        A beautiful woman in a swimming pool exudes elegance and grace, her movements fluid and serene as she glides through the water. The sun's rays enhance her natural beauty, creating a radiant, captivating scene of summertime bliss.
        </Text>
        <Text style={styles.cardFooter}>
            <TouchableOpacity onPress={() => openWebsite('https://in.pinterest.com/pin/646829565213650581/')}>
                <Text style={styles.cardFooterBtn}>
                    Read More...
                </Text>
            </TouchableOpacity>

        </Text>

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
        width:360,
        height:360,
        borderRadius:8,
        marginVertical:12,

        marginHorizontal:16,

    },
    cardElevated:{
        backgroundColor:'#f38630',
        elevation:3,
        shadowOffset:{
            width:4,
            height:4,
        },
        shadowColor:'#a0c55f',
        shadowOpacity:0.8,
    },
    headingContainer:{
        height:10,
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',

    },
    headerText:{
        fontSize:16,
        color:'#4d6160',
        fontWeight:'bold',

    },
    cardImage:{
        height:200,
    },
    cardBody:{
        padding:10,
    },
    cardFooter:{
        padding:8,
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',

    },
    cardFooterBtn:{
        color:'#FFFFFF',
        backgroundColor:'maroon',
        borderRadius:8,
        fontSize:16,
        fontWeight:'bold',
        paddingHorizontal:20,
        paddingVertical:8,

    },
});
