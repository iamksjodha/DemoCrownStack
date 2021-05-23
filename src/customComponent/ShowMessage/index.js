import {ToastAndroid, Platform} from 'react-native';

export const ShowMessage = {
  showMessage: async message => {
    if (Platform.OS === 'ios') {
      // eslint-disable-next-line no-alert
      return alert(message);
    } else {
      return ToastAndroid.showWithGravity(
        message,
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
      );
    }
  },
};
