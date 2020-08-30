/* eslint-disable no-undef */
import React, {Component} from 'react';
// eslint-disable-next-line prettier/prettier
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Comment extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.img_container}>
          <Image source={require('./assets/img1.jpeg')} style={styles.img} />
        </TouchableOpacity>
        <View style={styles.body}>
          <TouchableOpacity style={styles.name_container}>
            <View style={styles.line1}>
              <Text style={styles.name}>{'Ashwin Ghagre'}</Text>
              <Text style={styles.time_ago}>{'- 8h ago'}</Text>
            </View>

            <Text style={styles.message}>
              {'Ashwin you are going to kill tonight'}
            </Text>
          </TouchableOpacity>
          <View style={styles.button_container}>
            <TouchableOpacity style={styles.like_container}>
              <Text style={styles.like}>{'Like'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.reply_container}>
              <Text style={styles.reply}>{'Reply'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.icon_container}>
              <Icon name="heart" size={10} style={styles.icon} />
              <Text style={styles.like_count}>{'1'}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderColor: 'lightgray',
    borderWidth: 0.5,
    height: 90,
    alignItems: 'center',
    marginTop: 10,
  },
  img_container: {
    position: 'relative',
    top: -18,
    marginLeft: 7,
  },
  img: {
    height: 35,
    width: 35,
    borderRadius: 17,
  },
  name_container: {
    marginLeft: 15,
  },
  line1: {
    flexDirection: 'row',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  time_ago: {
    color: 'gray',
    fontSize: 11,
    marginTop: 5,
    marginLeft: 15,
  },
  message: {
    fontSize: 14,
    marginTop: 7,
  },
  button_container: {
    flexDirection: 'row',
    marginLeft: 15,
    marginTop: 10,
  },
  like_container: {},
  like: {
    fontSize: 12,
    color: 'gray',
    fontWeight: 'bold',
  },
  reply_container: {marginLeft: 15},
  reply: {color: 'gray', fontSize: 12, fontWeight: 'bold'},
  icon_container: {flexDirection: 'row', marginLeft: 15},
  icon: {color: 'red', marginTop: 4},
  like_count: {color: 'gray', fontSize: 12, marginLeft: 3},
});
