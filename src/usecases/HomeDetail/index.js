import React, {useContext} from 'react';

import HomeDetailScreen from '../../entities/HomeDetailScreen';
import {HomeDetailContext} from '../../context/HomeDetailProvider';

const HomeDetail = ({navigation}) => {
  const [homeDetailState] = useContext(HomeDetailContext);

  return <HomeDetailScreen homeDetailData={homeDetailState} />;
};
export default HomeDetail;
