/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
import React from react
import {AppRegistry} from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';


const App=()=>(
    <view style={{flex:1}}>
    <Header headerText={'Albums'} />
    <AlbumList/>
    </view>
)
AppRegistry.registerComponent('albums', () => App);
