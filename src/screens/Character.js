import React, {useEffect, useState, useRef} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import axios from 'react-native-axios';

const Character = ({route}) => {
  const [charter, setCharter] = useState({});
  const {char} = route.params;

  console.log(char);

  useEffect(() => {
    let config = {
      method: 'get',
      url: `${char}`,
      headers: {},
    };
    axios(config)
      .then(response => {
        console.log(response.data);
        setCharter(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <View>
      {/* <Image style={{width: 100, height: 100}} source={{uri: charter.image}} /> */}

      <View style={{flexDirection: 'row'}}>
        <Text>Name:</Text>
        <Text>{charter.name}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text>Gender:</Text>
        <Text>{charter.gender}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text>Location</Text>
        <Text>{charter?.location?.name}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text>Species</Text>
        <Text>{charter.species}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text>Status</Text>
        <Text>{charter.status}</Text>
      </View>
    </View>
  );
};

export default Character;

const styles = StyleSheet.create({});
