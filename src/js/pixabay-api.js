const BASE_URL = 'https://pixabay.com/api/';

export function getImages(query) {
  const params = new URLSearchParams({
    key: '45497823-3ee11a5b90ff874601dfe7178',
    q: query,
    per_page: 9,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  const url = `${BASE_URL}?${params}`;

  return fetch(url).then(res => {
    if (!res.ok) {
      throw new Error(res.status);
    }
    return res.json();
  });
}
