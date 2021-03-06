import axios from 'axios';

const fetchData = <T>(url: string): Promise<T> => 
  axios.get<T>(url).then(axiosResponse => axiosResponse.data);

export default fetchData;
