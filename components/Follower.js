/* eslint-disable no-undef */
import React, { Component } from 'react';
// eslint-disable-next-line prettier/prettier
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Follower extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.img_container}>
          <Image source={require('./assets/img1.jpeg')} style={styles.img} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.name_container}>
          <Text style={styles.name}>{'Ashwin Ghagre'}</Text>
          <Text style={styles.slug}>{'@ashwinapoo7'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer}>
          <Icon name="user-plus" color={'red'} style={styles.follow} size={15} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 10,
    borderWidth: 0.5,
    borderColor: 'lightgray',
    height: 70
  },
  img_container: {
    marginLeft: 5,
    marginTop: 5
  },
  img: {
    height: 55,
    width: 55,
    borderRadius: 30,
  },
  name_container: {
    flexDirection: 'column',
    marginLeft: 15,
    marginTop: 5
  },
  name: {
    fontWeight: 'bold',
    fontSize: 19,
  },
  slug: {
    color: 'gray',
    fontSize: 13,
  },
  buttonContainer: {
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 10,
    width: 50,
    height: 23,
    position: 'absolute',
    right: 15,
    top: 16
  },
  follow: {
    alignSelf: 'center'
  }
});
