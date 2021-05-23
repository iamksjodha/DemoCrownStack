import React, {useState, forwardRef, useImperativeHandle} from 'react';
import {Modal, Platform} from 'react-native';
import LottieView from 'lottie-react-native';

import * as loader from '../../../assets/loader.json';
import styles from './styles';

const Loader = forwardRef((props, ref) => {
  const [loaderState, setLoaderState] = useState(false);
  let animator = null;
  let timeout = null;

  useImperativeHandle(ref, () => ({
    updateStatus(status) {
      setLoaderState(status);
      if (status) {
        timeout = setTimeout(() => setLoaderState(false), 30000);
      } else {
        clearTimeout(timeout);
      }
    },
  }));

  return loaderState ? (
    Platform.OS === 'android' ? (
      <Modal visible={loaderState} transparent>
        <LottieView
          ref={ref => {
            animator = ref;
          }}
          source={loader}
          loop={false}
          speed={1.5}
          autoPlay
        />
      </Modal>
    ) : (
      <LottieView
        ref={ref => {
          animator = ref;
        }}
        source={loader}
        speed={1.5}
        autoPlay
        style={styles.loader}
        loop
      />
    )
  ) : null;
});

export default Loader;
