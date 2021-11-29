import React, {useEffect, useState, useRef} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {apiUrl} from '../apis/apiurl';
import axios from 'react-native-axios';

const DetailScreen = ({route}) => {
  const {filmId} = route.params;
  const [filmList, setFilmList] = useState();
  useEffect(() => {
    let config = {
      method: 'get',
      url: `${apiUrl}/episode/${filmId}`,
      headers: {},
    };
    console.log('filmIdddd', filmId);
    axios(config)
      .then(response => {
        console.log(JSON.stringify(response.data));
        setFilmList(response.data.info);
        console.log('FİLMLİSTTTTT', filmList);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <View>
      <Text>asds</Text>
      {filmList?.map((item, index) => (
        <Text>{item.name}</Text>
      ))}
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({});
