import React from 'react';
import {Text,View} from 'react-native';

const Header=(props)=>{
    return (
        <View style={styles.viewstyle}>
            <Text style={styles.textstyle}>{props.headerText}</Text>
        </View>
    )

};
const styles={
    viewstyle:{
        backgroundcolor:'red',
        justifyContent:'center',
        alignItem:'center',
        paddingTop:15,
        height:60,
        saddowOfset:{width:0,height:0},
        saddowOpacity:0.2,
    },
    textstyle:{
        fontSize:20
    }
};
export default header;
