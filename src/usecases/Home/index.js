import React, {useEffect, useState, useContext} from 'react';

import HomeScreen from '../../entities/HomeScreen';
import {ShowMessage} from '../../customComponent/ShowMessage';
import LoaderHelper from '../../customComponent/Loader/LoaderHelper';
import HomeService from '../../api/services/HomeService';
import {HomeDetailContext} from '../../context/HomeDetailProvider';

const Home = ({navigation}) => {
  const [, updateHomeDetailState] = useContext(HomeDetailContext);

  const [homeData, setHomeData] = useState([]);

  useEffect(() => {
    getHomeSearch();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //get home search api data
  const getHomeSearch = async () => {
    LoaderHelper.loaderStatus(true);
    await HomeService.home().then(async result => {
      try {
        setHomeData(result.results);
        LoaderHelper.loaderStatus(false);
      } catch (error) {
        LoaderHelper.loaderStatus(false);
        ShowMessage.showMessage(error);
      }
    });
  };

  //navigate to home to home details screen
  const handlePress = detail => {
    updateHomeDetailState(detail);
    navigation.navigate('HomeDetail');
  };

  return <HomeScreen homeData={homeData} handlePress={handlePress} />;
};
export default Home;
