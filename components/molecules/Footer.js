import React from "react";
import { StyleSheet,View } from "react-native";
import FooterButton from "../shared/FooterButton";

export default function Footer({discoverState,joinedState,onPressLeft,onPressRight}){

    return (
       <>
            <View style={styles.footer}>
                <FooterButton text='Discover' active={discoverState} onPress={onPressLeft}/>
                <FooterButton text='Joined' active={joinedState} onPress={onPressRight}/>
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