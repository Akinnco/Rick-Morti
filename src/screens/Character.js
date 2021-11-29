import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import axios from 'react-native-axios';
import {wh, ww} from '../helpers/responsive';

const Character = ({route}) => {
  const [charter, setCharter] = useState({});
  const {char} = route.params;

  useEffect(() => {
    let config = {
      method: 'get',
      url: `${char}`,
      headers: {},
    };
    axios(config)
      .then(response => {
        setCharter(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        style={styles.imageStyle}
        source={{uri: charter.image}}
      />

      <ScrollView style={styles.detailArea}>
        <View style={styles.nameArea}>
          <Text style={styles.nameText}>{charter.name}</Text>
        </View>
        <View style={styles.nameArea}>
          <Text style={styles.detail}>Gender :</Text>
          <Text style={styles.genderText}>{charter.gender}</Text>
        </View>
        <View style={styles.nameArea}>
          <Text style={styles.detail}>Species :</Text>
          <Text style={styles.genderText}>{charter.species}</Text>
        </View>
        <View style={styles.nameArea}>
          <Text style={styles.detail}>Status :</Text>
          <Text style={styles.genderText}>{charter.status}</Text>
        </View>
        <View style={styles.locationArea}>
          <Text style={styles.detail}>Location :</Text>
          <View style={styles.locationDetail}>
            <Text style={styles.genderText}>{charter?.location?.name}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Character;

const styles = StyleSheet.create({
  container: {flex: 1},
  imageStyle: {width: ww(1), height: wh(0.5)},
  nameArea: {flexDirection: 'row', alignSelf: 'center'},
  nameText: {fontSize: ww(0.1), color: 'black'},
  genderArea: {flexDirection: 'row', marginTop: wh(0.04)},
  genderText: {
    fontSize: ww(0.08),
    color: '#666666',
    marginLeft: ww(0.04),
  },
  location: {flexDirection: 'row'},
  detail: {fontSize: ww(0.06), marginTop: ww(0.04), marginLeft: -ww(0.08)},
  locationDetail: {width: ww(0.5), height: wh(0.2)},
  locationArea: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginLeft: ww(0.3),
  },
});
