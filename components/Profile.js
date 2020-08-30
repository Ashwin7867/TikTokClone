/* eslint-disable no-undef */
import React, {Component} from 'react';
// eslint-disable-next-line prettier/prettier
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class Profile extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.back_img_container}>
          <Image
            style={styles.back_img}
            source={require('../assets/img4.jpeg')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.profile_img_container}>
          <Image
            style={styles.profile_img}
            source={require('../assets/img1.jpeg')}
          />
        </TouchableOpacity>
        <Text style={styles.name}>{'Apoorva Ghagre'}</Text>
        <Text style={styles.slug}>{'@apooashu77'}</Text>
        <TouchableOpacity style={styles.followers_container}>
          <Text style={styles.followers}>{'100k Followers'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.location_container}>
          <Icon name="map-marker" size={13} style={styles.location} />
          <Text style={styles.location_text}>{'Delhi, India'}</Text>
        </TouchableOpacity>
        <View style={styles.button_container}>
          <TouchableOpacity style={styles.following_btn}>
            <Icon name="check" size={13} style={styles.check} />
            <Text style={styles.following}>{'Following'}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.request_post}>
            <Text style={styles.request_post_text}>{'Request a Post'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1, flexDirection: 'column', alignItems: 'center'},
  back_img_container: {
    alignSelf: 'center',
  },
  back_img: {
    height: 180,
    width: 360,
  },
  profile_img_container: {position: 'relative', top: -60},
  profile_img: {
    borderRadius: 60,
    height: 120,
    width: 120,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
    marginTop: -55,
  },
  slug: {
    color: 'gray',
    fontSize: 13,
  },
  followers_container: {
    width: 350,
    alignSelf: 'center',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  followers: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 7,
  },
  location_container: {
    flexDirection: 'row',
    marginTop: 6,
  },
  location: {
    color: 'gray',
    marginRight: 5,
  },
  location_text: {
    color: 'gray',
    fontSize: 12,
  },
  button_container: {
    flexDirection: 'row',
    marginTop: 10,
  },
  following_btn: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    alignContent: 'center',
    justifyContent: 'center',
    height: 35,
    width: 105,
    paddingTop: 5,
  },
  check: {color: 'black', marginRight: 8, fontWeight: 'bold', paddingTop: 5},
  following: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 17,
  },
  request_post: {
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 10,
    height: 35,
    width: 135,
    marginLeft: 25,
  },
  request_post_text: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 17,
    textAlign: 'center',
    paddingTop: 4,
  },
});
