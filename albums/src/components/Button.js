import React from 'react';
import {Text,Button} from 'react-native';

const Button=({onPress,children} )=>{
    const {buttonstyle,textstyle}=styles;
    return(
        <Button onPress={onPress}style={buttonstyle}>
            <Text style={textstyle}>
            {children}
            </Text>
        </Button>
    );
};
const styles={
    textstyle:{
        textAlign:center,
        color:'#007aff',
        fontSize:'14',
        fontWeight:'600',
        paddingTop:'10',
        paddin0gBottom:'10',


    },
    buttonstyle:{
        flex:1,
        borderWidth:2,
        borderRadious:4,
        borderColor:blue,
        backgroundColor:'#fff',
        alignself:'stretch',
        marginLeft:5,
        marginRight:5
    }
}
export default Button;