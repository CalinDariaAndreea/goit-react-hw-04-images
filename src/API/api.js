import axios from 'axios';

const getProducts = async (query, page) => {
  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '42481427-12d08fa9cedf5ba58e5021062';

  try {
    const response = await axios.get(
      `${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    );

    const { hits, totalHits } = response.data;

    if (hits.length === 0) {
      return {
        message: 'Sorry, there are no images matching your request...',
        images: [],
        isLastPage: true,
      };
    }

    const modHits = hits.map(({ id, tags, webformatURL, largeImageURL }) => ({
      id,
      tags,
      webformatURL,
      largeImageURL,
    }));

    return {
      message: '',
      images: modHits,
      isLastPage: page < Math.ceil(totalHits / 12),
    };
  } catch (error) {
    return {
      message: 'Error fetching products. Please try again.',
      images: [],
      isLastPage: true,
    };
  }
};

export default getProducts;