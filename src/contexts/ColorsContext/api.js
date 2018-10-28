import Network from 'utils/network';
import qs from 'qs';

export default {
  fetchColors: page => {
    const queryParams = qs.stringify({ page }, { addQueryPrefix: true });
    return Network.get(`/products${queryParams}`);
  },
};
