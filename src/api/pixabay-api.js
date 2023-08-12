import axios from 'axios';
const pixabayApi = axios.create({
  baseURL:
    'https://pixabay.com/api/?key=38662933-763155843aa83bb37fcf566da&orientation=horizontal&image_type=photo&safesearch=true',
});
export async function fetchImages(page, q, per_page = 40) {
  const {
    data: { hits, totalHits },
    config: { params },
  } = await pixabayApi.get('', {
    params: {
      page,
      q,
      per_page,
    },
  });
  return { hits, totalHits, params };
}
