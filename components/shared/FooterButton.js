import React from "react";
import { StyleSheet,TouchableOpacity,Text,View ,Image} from "react-native";

export default function FooterButton({text,onPress,active}){

    if(active == true){
        return (
            <TouchableOpacity onPress={onPress}>
                <View style={styles.buttonActive}>
                    <Image source={ require (`../../assets/images/discoverIcon.png`) } style = {styles.iconActive}/>
                    <Text style={styles.button__textActive}>{text}</Text>
                </View>
            </TouchableOpacity>
        );
    }else return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.buttonNotActive}>
                <Image source={ require (`../../assets/images/discoverIcon.png`) } style = {styles.iconNotActive}/>
                <Text style={styles.button__textNotActive}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonActive:{
        borderRadius:100,
        width:131,
        height:48,
        backgroundColor: '#E9B741',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'row',
        marginTop:10,      
    },
    iconActive :{
        width:22.11,
        height:22.11,
        tintColor:'white',
        marginRight:10
    },
    button__textActive:{
        fontFamily: "OpenSansSemiBold",
        fontSize:18, 
        color:"white"
    },
    buttonNotActive:{
        borderRadius:100,
        width:131,
        height:48,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'row',
        marginTop:10,
        borderColor:"#E9B741" ,
        borderWidth:1    
    },
    iconNotActive :{
        width:22.11,
        height:22.11,
        tintColor:'black',
        marginRight:10
    },
    button__textNotActive:{
        fontFamily: "OpenSansSemiBold",
        fontSize:18, 
        color:"black"
    }
})