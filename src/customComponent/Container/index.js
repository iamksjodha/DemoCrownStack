import React from 'react';
import {View} from 'react-native';

const Container = props => {
  const {children} = props;

  return <View style={styles.container}>{children}</View>;
};

const styles = {
  container: {
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
};

export default Container;
