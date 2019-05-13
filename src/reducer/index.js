import configs from "../configs";

export const initialState = {
    searchValue: '',
    query: '',
    videoList: [],
    nextPageToken: '',
    selectedVideoId: '',
    openModal: false,
    isPaginationAvailable: false
};

export function reducer(state, { type, payload }) {
    switch (type) {
        case 'search': {
            return {
                ...state,
                searchValue: payload
            };
        }
        case 'updateVideoList': {
            return {
                ...state,
                query: payload.query,
                videoList: payload.items,
                nextPageToken: payload.nextPageToken,
                isPaginationAvailable: payload.items.length === configs.MAX_RESULTS
            };
        }

        case 'nextPageVideoList': {
            return {
                ...state,
                videoList: [...state.videoList, ...payload.items],
                nextPageToken: payload.nextPageToken,
                isPaginationAvailable: payload.items.length === configs.MAX_RESULTS
            };
        }

        case 'openModal': {
            return {
                ...state,
                openModal: true,
                selectedVideoId: payload
            };
        }
        case 'hideModal': {
            return {
                ...state,
                openModal: false,
                selectedVideoId: ''
            };
        }
        default:
            return state;
    }
}