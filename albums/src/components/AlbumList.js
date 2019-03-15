import React,{Component} from 'react';
import {ScrollView} from 'react-native';
import axios from 'axios';
import Albumdetail from './Albumdetail';


class AlbumList extends Component{
    state={albums:[]}
    componentWillMount(){
        axios.get('https://rallycoding.herokuapp.com/').then(Response=>this.setState({albums:Response.data}))
    }
    renderalbums(){
        return this.State.albums.map(album=>
        <Albumdetail key={album.title} data={album}/>)
    
    }
    render(){
    console.log(this.state);
    return(
          <ScrollView>
              {this.renderalbums()}
          </ScrollView>
    )    
}

}
const styles={
    albumlist:{

    }
}
export default AlbumList;