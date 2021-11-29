import React, {useEffect, useState, useRef} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {useDispatch} from 'react-redux';
import {apiUrl} from '../apis/apiurl';
import {setFilmList} from '@redux/app/actions';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import axios from 'react-native-axios';
import {ww, wh} from '../helpers/responsive';

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
    marginLeft: ww(0.08),
    marginRight: ww(0.08),
    borderColor: '#6cac8c',
  },
  buttonText: {
    marginTop: wh(0.07),
    marginLeft: ww(0.06),
    fontSize: ww(0.05),
    color: '#363636',
  },
});
