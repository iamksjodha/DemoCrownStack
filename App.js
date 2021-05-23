import React from 'react';

import AppNavigation from './src/framework/AppNavigation';
import Loader from './src/customComponent/Loader';
import LoaderHelper from './src/customComponent/Loader/LoaderHelper';
import {HomeDetailProvider} from './src/context/HomeDetailProvider';

const App = () => (
  <>
    <HomeDetailProvider>
      <AppNavigation />
    </HomeDetailProvider>
    <Loader ref={ref => LoaderHelper.setLoader(ref)} />
  </>
);

export default App;
