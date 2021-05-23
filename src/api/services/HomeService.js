import {ApiConfig} from '../apiConfig/ApiConfig';
import {ApiCallGet} from '../apiConfig/ApiCall';

const HomeService = {
  /**
   * calling home api
   **/

  home: async () => {
    const {baseUrl, homeSearch} = ApiConfig;

    const url = baseUrl + homeSearch;

    const headers = {
      'Content-Type': 'application/json',
    };

    return ApiCallGet(url, headers);
  },
};

export default HomeService;
