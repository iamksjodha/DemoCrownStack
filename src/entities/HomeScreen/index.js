import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, FlatList} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import FastImage from 'react-native-fast-image';

import styles from './styles';
import Header from '../../customComponent/Header';
import Container from '../../customComponent/Container';
import Strings from '../../constants/strings';
import NoImage from '../../../assets/images/No_Image.jpg';

const HomeScreen = props => {
  const {homeData, handlePress} = props;
  return (
    <View style={styles.viewContainer}>
      <Header headertext={Strings.HOME_HEADER_TITLE} />

      <Container>
        <FlatList
          data={homeData}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.childContainer}
              onPress={() => handlePress(item)}>
              <FastImage
                style={styles.imageStyle}
                source={
                  item?.artworkUrl100
                    ? {
                        uri: item?.artworkUrl100,
                        priority: FastImage.priority.high,
                      }
                    : NoImage
                }
                resizeMode={FastImage.resizeMode.contain}
              />
              <Text style={styles.textStyle}>{item?.trackName}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </Container>
    </View>
  );
};

HomeScreen.propTypes = {
  homeData: PropTypes.array.isRequired,
  handlePress: PropTypes.func.isRequired,
};

HomeScreen.defaultProp = {
  homeData: () => [],
  handlePress: () => {},
};

export default HomeScreen;
