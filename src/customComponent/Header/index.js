import React from 'react';
import PropTypes from 'prop-types';
import {useNavigation} from '@react-navigation/native';
import {Text, View, Image, TouchableOpacity, StatusBar} from 'react-native';
import {
  responsiveFontSize,
  widthPercentageToDP,
  heightPercentageToDP,
} from '../../commonStyleSheet/ResponsiveSize';
import colors from '../../commonStyleSheet/Color';
import {flexVariable} from '../../commonStyleSheet/FlexVariable';

const Header = props => {
  const {backIcon, headertext} = props;

  const navigation = useNavigation();

  return (
    <View>
      <StatusBar backgroundColor={colors.themeColor} barStyle="light-content" />
      <View style={styles.container1}>
        {backIcon ? (
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            activeOpacity={0.5}
            style={styles.main}>
            <Image
              source={require('../../../assets/images/backArrow.png')}
              style={styles.img}
            />
          </TouchableOpacity>
        ) : (
          <View style={styles.main} />
        )}
        <TouchableOpacity
          style={styles.textcontainer}
          activeOpacity={0.7}
          onPress={props.forHomePress}>
          <Text style={styles.text}>{headertext}</Text>
        </TouchableOpacity>
        <View style={styles.main} />
      </View>
    </View>
  );
};

Header.propTypes = {
  backIcon: PropTypes.bool,
  headertext: PropTypes.string,
};

Header.defaultProp = {
  backIcon: () => false,
  headertext: () => '',
};

const styles = {
  text: {
    color: colors.colorBackground,
    fontSize: responsiveFontSize(20),
    textAlign: flexVariable.center,
  },
  container1: {
    width: '100%',
    height: heightPercentageToDP(8),
    flexDirection: flexVariable.row,
    backgroundColor: colors.themeColor,
  },
  textcontainer: {
    height: heightPercentageToDP(8),
    width: '70%',
    alignItems: flexVariable.center,
    justifyContent: flexVariable.center,
  },
  img: {
    width: widthPercentageToDP(5),
    height: heightPercentageToDP(5),
    marginLeft: widthPercentageToDP(5),
    resizeMode: 'contain',
  },
  main: {
    width: '15%',
    height: heightPercentageToDP(8),
    justifyContent: flexVariable.center,
  },
};

export default Header;
