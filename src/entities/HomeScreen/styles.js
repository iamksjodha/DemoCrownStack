import {StyleSheet} from 'react-native';
import colors from '../../commonStyleSheet/Color';
import {
  heightPercentageToDP,
  responsiveFontSize,
} from '../../commonStyleSheet/ResponsiveSize';
import {flexVariable} from '../../commonStyleSheet/FlexVariable';

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: colors.colorBackground,
  },
  imageStyle: {
    width: '100%',
    height: heightPercentageToDP(25),
  },
  textStyle: {
    marginTop: heightPercentageToDP(2),
    fontSize: responsiveFontSize(17),
    color: colors.themeColor,
    textAlign: flexVariable.center,
  },
  childContainer: {
    marginBottom: heightPercentageToDP(2),
  },
});

export default styles;
