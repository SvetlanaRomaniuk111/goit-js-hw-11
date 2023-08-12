import axios from 'axios';
const pixabayApi = axios.create({
  baseURL:
    'https://pixabay.com/api/?key=38662933-763155843aa83bb37fcf566da&per_page=40&orientation=horizontal&image_type=photo&safesearch=true',
});
export async function fetchImages(page, q, per_page = 40) {
  if (page * per_page === 480) {
    per_page = 20;
  }
  const {
    data: { hits, totalHits },
  } = await pixabayApi.get('', {
    params: {
      page,
      q,
      per_page,
    },
  });
  return { hits, totalHits };
}
