/* eslint-disable prettier/prettier */
import React, { Component, Fragment } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
//import Icon1 as Icon from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/FontAwesome';

import Video from 'react-native-video';
const { width, height } = Dimensions.get('window');

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Video
          source={{
            uri:
              'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
          }}
          style={styles.backgroundVideo}
          muted={false}
          repeat={true}
          resizeMode={'cover'}
          rate={1.0}
          ignoreSilentSwitch={'obey'}
        />
        <View style={styles.headers}>
          <TouchableOpacity style={styles.initials}>
            <Text style={styles.initials_text}>{'AG'}</Text>
          </TouchableOpacity>
          <View style={styles.searchContainer}>
            <Icon name="search" size={25} style={styles.search} />
          </View>
        </View>
        <View style={styles.vid_info_container}>
          <TouchableOpacity style={styles.like_container}>
            <Icon name="heart" size={32} style={styles.like} />
            < Text style={styles.like_text} > 10k</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.gift_container}>
            <Icon name="gift" size={28} style={styles.gift} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.whatsapp_container}>
            <Icon name="whatsapp" size={30} style={styles.whatsapp} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.download_container}>
            <Icon name="download" size={25} style={styles.download} />
            <Text style={styles.download_text}>{'100k'}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.collab_container}>
            <Icon name="retweet" size={26} style={styles.collab} />
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <View style={styles.line1}>
            <TouchableOpacity style={styles.name_container}>
              <Text style={styles.name}>{'Apoorva Ghagre'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.follow_container}>
              <Text style={styles.follow_text}>{'+ Follow'}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.line2}>
            <TouchableOpacity style={styles.view_container}>
              <Text style={styles.viewer_text}>{'25.1k Views'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.comments_container}>
              <Icon name="comment" size={15} style={styles.comments} />
              <Text style={styles.comment_text}>{'114 Comments'}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'gray' },
  backgroundVideo: {
    height: height,
    position: 'absolute',
    top: 0,
    left: 0,
    alignItems: 'stretch',
    bottom: 0,
    right: 0,
    flex: 1,
  },
  headers: {
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 20,
  },
  initials: {
    borderRadius: 16,
    height: 33,
    width: 33,
    backgroundColor: 'green',
    borderColor: 'white',
    borderWidth: 2,
  },
  initials_text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17,
    textAlign: 'center',
  },
  searchContainer: {
    marginLeft: 20,
  },
  search: { color: 'white' },
  vid_info_container: {
    position: 'absolute',
    top: 140,
    right: 25,
    flexDirection: 'column',
  },
  like_container: {
    marginTop: 10,
    flexDirection: 'column'
  },
  like: { color: 'red' },
  like_text: { fontSize: 13, color: 'white' },
  gift_container: { marginTop: 28 },
  gift: { color: 'white' },
  whatsapp_container: { marginTop: 29 },
  whatsapp: { color: 'white' },
  download_container: { marginTop: 29 },
  download: { color: 'white' },
  download_text: { fontSize: 12, color: 'white' },
  collab_container: { marginTop: 29 },
  collab: { color: 'white' },
  footer: {
    position: 'absolute',
    bottom: 70,
    left: 15,
  },
  line1: {
    flexDirection: 'row',
  },
  name_container: {},
  name: { color: 'white', fontWeight: 'bold', fontSize: 21 },
  ago_container: {},
  ago: { color: 'white' },
  follow_container: {
    borderWidth: 1.3,
    borderColor: 'white',
    borderRadius: 10,
    height: 30,
    width: 90,
    marginLeft: 15
  },
  follow_text: {
    fontWeight: 'bold',
    fontSize: 17,
    color: 'white',
    textAlign: 'center'
  },
  line2: { flexDirection: 'row', marginTop: 10 },
  view_container: {},
  viewer_text: { color: 'white' },
  comments_container: { flexDirection: 'row', marginLeft: 25 },
  comments: { color: 'white', marginRight: 3 },
  comment_text: { color: 'white' },
});

// styled-component
