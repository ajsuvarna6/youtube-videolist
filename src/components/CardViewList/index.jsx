import React, { useMemo, useEffect, useState } from 'react';
import moment from 'moment';

import { apiService } from '../../helpers/apiService';
import cardViewListStyle from './cardViewList.module.sass';
import LoadMore from './LoadMore';
import configs from '../../configs';
import { intToString, getVideoTimeFromDuration } from '../../helpers/utilities';


function useCardDetail(videoId) {
    const [isLoaded, setLoaded] = useState(false);
    const [videoDetail, setVideoDetail] = useState({});
    useEffect(() => {
        async function fetchVideoDetail() {
            const url = `${configs.VIDEO_LIST}&id=${videoId}`;
            try {
                const { items } = await apiService(url, 'GET');
                setVideoDetail({
                    time: items[0].contentDetails.duration,
                    view: items[0].statistics.viewCount
                });
                setLoaded(true);
            } catch (e) {
                console.log('error', e);
                // TODO, handle error
            }
        }
        fetchVideoDetail();
    }, [videoId]);
    return {
        leftDetail: (<span className={cardViewListStyle.time}>{
            isLoaded ? getVideoTimeFromDuration(videoDetail.time) : '...'
        }</span>),
        rightDetail: (<span className={cardViewListStyle.view}>{
            isLoaded ? intToString(videoDetail.view) + ' views' : '...'
        }</span>)
    }
}

function CardItem({ snippet, id, dispatch }) {
    const cardDetail = useCardDetail(id.videoId);
    const cardItemClickHandler = () => {
        dispatch({ type: 'openModal', payload: id.videoId });
    }
    return (
        <div className={cardViewListStyle.cardItem} onClick={cardItemClickHandler}>
            <div className={cardViewListStyle.cardItemLeft}>
                <img src={snippet.thumbnails.medium.url} alt='video-thumbnail' />
                {cardDetail.leftDetail}
            </div>
            <div className={cardViewListStyle.cardItemRight}>
                <div className={cardViewListStyle.cardItemTitle}>{snippet.title}</div>
                <div className={cardViewListStyle.channelTitle}>{snippet.channelTitle}</div>
                <span className={cardViewListStyle.infoBar}>
                    {cardDetail.rightDetail}
                    <span> - {moment(snippet.publishedAt).fromNow()}</span>
                </span>
            </div>
        </div>
    );
}

export default function CardViewList({ state: { videoList, isPaginationAvailable, query, nextPageToken }, dispatch }) {
    return useMemo(() => (
        <div className={cardViewListStyle.container}>
            {videoList.map((video) => (<CardItem key={video.etag} {...video} dispatch={dispatch} />))}
            {isPaginationAvailable
                && <LoadMore
                    key={query + Date.now()}
                    query={query}
                    nextPageToken={nextPageToken}
                    dispatch={dispatch}
                />
            }
        </div>
    ), [videoList, dispatch, isPaginationAvailable, query, nextPageToken]);
}
