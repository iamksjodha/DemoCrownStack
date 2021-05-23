import React from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';
import FastImage from 'react-native-fast-image';

import styles from './styles';
import Header from '../../customComponent/Header';
import Container from '../../customComponent/Container';
import Strings from '../../constants/strings';
import NoImage from '../../../assets/images/No_Image.jpg';
import {ScrollView} from 'react-native-gesture-handler';

const HomeDetailScreen = props => {
  const {homeDetailData} = props;
  return (
    <View style={styles.viewContainer}>
      <Header backIcon headertext={Strings.HOME_DETAIL_HEADER_TITLE} />

      <ScrollView>
        <Container>
          <FastImage
            style={styles.imageStyle}
            source={
              homeDetailData?.artworkUrl100
                ? {
                    uri: homeDetailData?.artworkUrl100,
                    priority: FastImage.priority.high,
                  }
                : NoImage
            }
            resizeMode={FastImage.resizeMode.contain}
          />
          <Text style={[styles.textStyle, styles.alignStyle]}>
            {homeDetailData?.trackName}
          </Text>
          <Text style={[styles.textStyle, styles.alignStyle]}>
            {homeDetailData?.artistName}
          </Text>
          <Text style={styles.textStyle}>
            {homeDetailData?.longDescription}
          </Text>
        </Container>
      </ScrollView>
    </View>
  );
};

HomeDetailScreen.propTypes = {
  homeDetailData: PropTypes.object.isRequired,
};

HomeDetailScreen.defaultProp = {
  homeDetailData: () => {},
};

export default HomeDetailScreen;
