import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function ElevatedCard() {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCard</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>
                Tap
            </Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>
                me
            </Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>
                To
            </Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>
                Scroll
            </Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>
                more....
            </Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>
                🤣
            </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8,
        color:'chocolate',

    },
    container:{
        padding:8,
    },
    card:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        margin:8,
        borderRadius:4,
        width:100,
        height:100,

    },
    cardElevated:{
        backgroundColor:'#CAD5E2',
        elevation:4,

    },
});
