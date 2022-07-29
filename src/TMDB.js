const API_KEY = '38c007f28d5b66f36b9c3cf8d8452a4b';
const API_BASE = 'https://api.themoviedb.org/3';

const baseFetch = async (endPoint) => {
    const requisition = await fetch(`${API_BASE}${endPoint}`);
    const response = await requisition.json();
    return response;
}

const TMDB = {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Netflix originals',
                items: await baseFetch(`/discover/tv?with_networks=213&api_key=${API_KEY}`)
            },
            {
                slug: 'trending',
                title: 'Recommended for you',
                items: await baseFetch(`/trending/all/week?api_key=${API_KEY}`)
            },
            {
                slug: 'toprated',
                title: 'Top rated',
                items: await baseFetch(`/movie/top_rated?api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title: 'Action',
                items: await baseFetch(`/discover/movie?with_genres=28&api_key=${API_KEY}`)
            },
            {
                slug: 'Comedy',
                title: 'Comedy',
                items: await baseFetch(`/discover/movie?with_genres=35&api_key=${API_KEY}`)
            },
            {
                slug: 'horror',
                title: 'Horror',
                items: await baseFetch(`/discover/movie?with_genres=27&api_key=${API_KEY}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await baseFetch(`/discover/movie?with_genres=10749&api_key=${API_KEY}`)
            },
            {
                slug: 'documentary',
                title: 'Documentary',
                items: await baseFetch(`/discover/movie?with_genres=99&api_key=${API_KEY}`)
            }
        ];
    },
    getMovieInfo: async (movieId, type) => {
        let info = {};

        if (movieId) {
            info = await baseFetch(`/${type}/${movieId}?api_key=${API_KEY}`)
        }
        return info;
    }
}

export default TMDB;