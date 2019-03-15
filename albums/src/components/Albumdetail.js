import React from 'react';
import {Text,View,Image,Linking} from 'react-native';
import Card from './Card';
import Cardsection from './Cardsection';
import Button from './Button';

const Albumdetail=(album)=>{
    const{title,artist,thumbnail_image,image,url}=album;
    const{section1,section2,section3,section4,imageStyle }=styles;
<Card>
    <Cardsection>
        <View style={section3}>
            <Image style={section2}
             source={{uri: thumbnail_image }}/>
        </View>
        <View  style={section1}>
        <Text style={section4}>{title}</Text>
        <Text>{artist}</Text>
        </View>
    </Cardsection>
    <Cardsection>
        <Image 
        style={imageStyle}
        source={{uri:image}}
        />
    </Cardsection>
    <Cardsection>
        <Button onPress={()=>Linking.openURL(url)} >
        Buy Now
        </Button>
    </Cardsection>
</Card>    
};
const styles={
    section1:{
        justifyContent:'space-around',
        flexDirection:'column',
    },
    section2:{
        height:50,
        width:50,
    },
    section3:{
        justifyContent:'Center',
        alignItem:'Center',
        marginLeft:10,
        marginRight:10,
    },
    section4:{
        fontSize:20,

    },
    imageStyle:{
        height:40,
        flex:1,
        width:null,
    }

}

export default Albumdetail; 