import React from "react";
import { StyleSheet,View } from "react-native";
import FooterButton from "../shared/FooterButton";
import { useState } from "react";

export default function Footer({discoverState,joinedState,onPress}){

    return (
       <>
            <View style={styles.footer}>
                <FooterButton text='Discover' active={discoverState} onPress={onPress}/>
                <FooterButton text='Joined' active={joinedState} onPress={onPress}/>
            </View>
       </>
    );
}

const styles = StyleSheet.create({
    footer:{
       height: 90,
       flexDirection: 'row',
       justifyContent: 'space-around',
       borderTopColor:'rgba(29, 30, 36, 0.1)',
       borderTopWidth:2,
    }
})