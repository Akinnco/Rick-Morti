import React, {useEffect, useState, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {apiUrl} from '../apis/apiurl';
import axios from 'react-native-axios';

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
            {console.log('---+++--++--++', char)}
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {backgroundColor: '#FFAEBC', flex: 1},
  nameArea: {alignItems: 'center', marginTop: 15, width: '90%'},
  nameText: {fontSize: 25, color: '#363636', fontWeight: '600'},
  dateArea: {marginTop: 10},
  dateText: {
    alignSelf: 'flex-end',
    color: '#363636',
    fontSize: 20,
  },
  scroll: {
    backgroundColor: 'yellow',
    marginLeft: 15,
    marginRight: 15,
    marginTop: 20,
    borderWidth: 1,
    borderRadius: 15,
    height: 500,
    paddingTop: 10,
    marginBottom: 20,
  },
  charText: {
    marginTop: 10,
    alignSelf: 'center',
    color: '#363636',
    borderBottomWidth: 1,
  },
});
