import React, { useState } from 'react';

import cardViewStyle from './cardViewList.module.sass';
import { apiService } from '../../helpers/apiService';
import configs from '../../configs';

export default function LoadMore({ query, dispatch, nextPageToken }) {
    const [isLoading, setLoading] = useState(false);
    const fetchMoreVideos = async () => {
        setLoading(true);
        try {
            const url = `${configs.SEARCH_URL}&q=${query}&maxResults=10&pageToken=${nextPageToken}`;
            const searchList = await apiService(url, 'GET');
            dispatch({ type: 'nextPageVideoList', payload: searchList });
        } catch (e) {
            console.log('error', e);
            // TODO, handle error
        }
        setLoading(false);
    }
    return (
        <div className={cardViewStyle.loadMoreContainer}>
            {isLoading && <span>Loading...</span>}
            {!isLoading && (
                <button
                    onClick={fetchMoreVideos}
                    className={cardViewStyle.loadMore}
                    type='button'
                >
                    Load More
                </button>
            )}
        </div>
    );
}
