import React, {Component} from 'react';
import {Text, View, AppRegistry, Image, Button, StyleSheet} from 'react-native';

const sampleContact = {
  Name: 'Aniket Kumar',
  Address: '123 Main Street',
  'Phone Number': '212-898-4823',
  'Favourite Food': 'Pizza',
  Hobbies: 'Tennis, Frisbee',
};

const firstName = sampleContact.Name.split(' ')[0];

class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.profileContainer}>
          <Image
            source={require('./unnamed.png')}
            style={styles.profileImage}
          />
          <Text style={[styles.profileText]}>{firstName}</Text>
        </View>
        {Object.keys(sampleContact).map((key) => {
          return (
            <View key={key} style={styles.contactRowContainer}>
              <Text style={[styles.text, styles.contactKey]}>{key}</Text>
              <Text style={[styles.text, styles.contactValue]}>
                {sampleContact[key]}
              </Text>
            </View>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginVertical: '10%',
  },
  text: {
    fontSize: 15,
  },
  profileImage: {
    height: 140,
    width: 140,
    borderRadius: 70,
    marginBottom: 20,
  },

  profileText: {
    fontSize: 27,
    fontWeight: '100',
  },

  profileContainer: {
    backgroundColor: 'lavender',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  contactRowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'lightgray',
    borderBottomWidth: 1,
  },
  contactKey: {
    fontWeight: 'bold',
    width: 130,
    marginLeft: 10,
  },
  contactValue: {
    paddingVertical: 24,
  },
});

export default Profile;
