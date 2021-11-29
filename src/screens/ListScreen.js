import React, {useEffect, useState, useRef} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {useDispatch} from 'react-redux';
import {apiUrl} from '../apis/apiurl';
import {setFilmList} from '@redux/app/actions';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import axios from 'react-native-axios';

const ListScreen = ({navigation}) => {
  const dispatch = useDispatch();
  // const filmList = useSelector(state => state.app.filmList);
  const [filmListt, setFilmListt] = useState();

  useEffect(() => {
    let config = {
      method: 'get',
      url: `${apiUrl}/episode`,
      headers: {},
    };

    axios(config)
      .then(response => {
        dispatch(setFilmList(response.data));
        setFilmListt(response.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <ScrollView style={styles.container}>
      {filmListt?.map((item, index) => (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('DetailScreen', {
              filmId: item.id,
            })
          }
          key={index}
          style={styles.button}>
          <Text style={styles.buttonText}>Rick and Morty ({item.name})</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default ListScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFAEBC',
  },
  button: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    marginLeft: 25,
    marginRight: 25,
    borderColor: '#6cac8c',
  },
  buttonText: {
    marginTop: 50,
    marginLeft: 20,
    fontSize: 20,
    color: '#363636',
  },
});
