import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '7971179-456b552bdb2500af743f56cc5';
const PARAMS = 'image_type=photo&per_page=12&orientation=horizontal';

export async function getImages(searchData, page) {
  const { data } = await axios.get(
    `${BASE_URL}?key=${API_KEY}&${PARAMS}&q=${searchData}&page=${page}`
  );

  return data;
}
