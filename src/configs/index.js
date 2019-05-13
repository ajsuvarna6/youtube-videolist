const API_KEY = 'AIzaSyCIb_S2C7qiUASO6q8094j5yKiFhzomUno';

const configs = {
    SEARCH_URL: 'https://content.googleapis.com/youtube/v3/search?key=' + API_KEY + '&part=snippet&type=video&videoEmbeddable=true',
    VIDEO_LIST: 'https://www.googleapis.com/youtube/v3/videos?part=contentDetails%2Cstatistics&key=' + API_KEY,
    MAX_RESULTS: 10
}

export default configs;