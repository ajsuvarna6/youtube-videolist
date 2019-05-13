import React, { useState } from 'react';
import searchStyle from './search.module.sass';

import CloseButton from '../CloseButton';
import { ReactComponent as BackIcon } from '../../assets/svg/backIcon.svg';
import configs from '../../configs';
import { apiService } from '../../helpers/apiService';

export default function Search({ state, dispatch }) {
    const [searchInProgress, setProgress] = useState(false);
    const dispatchSearchAction = (payload = '') => {
        dispatch({ type: 'search', payload });
    };

    const handleInputSearchChange = (e) => {
        dispatchSearchAction(e.target.value);
    };

    const getSearchResult = async (e) => {
        if (e.which === 13 && !searchInProgress) {
            setProgress(true);
            try {
                const url = `${configs.SEARCH_URL}&q=${state.searchValue}&maxResults=10`;
                const searchList = await apiService(url, 'GET');
                console.log('searchList', searchList);
                dispatch({ type: 'updateVideoList', payload: { ...searchList, query: state.searchValue} })
            } catch (e) {
                console.log('error', e);
                // TODO, handle error
            }
            setProgress(false);
        }
    }
    return (
        <div className={searchStyle.container}>
            <span className={searchStyle.backIcon}>
                <BackIcon />
            </span>
            <input
                type='text'
                value={state.searchValue}
                onChange={handleInputSearchChange}
                placeholder='Press enter to search...'
                className={searchStyle.searchInput}
                onKeyPress={getSearchResult}
            />
            { state.query && <CloseButton onClick={() => dispatchSearchAction()} />}
        </div>
    );
}
