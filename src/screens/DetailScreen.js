import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {apiUrl} from '../apis/apiurl';
import axios from 'react-native-axios';
import {ww, wh} from '../helpers/responsive';

const DetailScreen = ({route, navigation}) => {
  const {filmId} = route.params;
  const [filmList, setFilmList] = useState([]);
  useEffect(() => {
    let config = {
      method: 'get',
      url: `${apiUrl}/episode/${filmId}`,
      headers: {},
    };
    axios(config)
      .then(response => {
        setFilmList(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.nameArea}>
        <Text style={styles.nameText}>{filmList.name}</Text>
      </View>
      <View style={styles.dateArea}>
        <Text style={styles.dateText}>{filmList.air_date}</Text>
      </View>
      <ScrollView style={styles.scroll}>
        {filmList?.characters?.map((char, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate('Character', {char})}>
            <Text style={styles.charText}>{char}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {backgroundColor: '#FFAEBC', flex: 1},
  nameArea: {alignItems: 'center', marginTop: wh(0.02), width: ww(1)},
  nameText: {fontSize: ww(0.1), color: '#363636', fontWeight: '600'},
  dateArea: {marginTop: wh(0.01)},
  dateText: {
    alignSelf: 'flex-end',
    color: '#363636',
    fontSize: ww(0.04),
  },
  scroll: {
    borderWidth: 1,
    backgroundColor: '#ffff68',
    marginLeft: ww(0.04),
    marginRight: ww(0.04),
    marginTop: ww(0.08),
    borderRadius: ww(0.04),
    paddingTop: wh(0.04),
    marginBottom: wh(0.04),
  },
  charText: {
    fontSize: wh(0.017),
    borderBottomWidth: 1,
    marginTop: wh(0.04),
    alignSelf: 'center',
    color: '#363636',
  },
});
