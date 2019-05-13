import React, { useReducer } from 'react';
import Search from '../Search';
import CardViewList from '../CardViewList';
import ModalView from '../ModalView';
import { reducer, initialState } from '../../reducer';

function useVideoListReducer() {
    const [state, dispatch] = useReducer(reducer, initialState);
    return {
        state,
        dispatch
    };
}

export default function Home() {
    const reducerState = useVideoListReducer();
    const { state: { selectedVideoId, openModal }, dispatch } = reducerState;
    return (
        <React.Fragment>
            <Search {...reducerState} />
            <CardViewList {...reducerState} />
            {openModal ? <ModalView selectedVideoId={selectedVideoId} dispatch={dispatch} /> : null}
        </React.Fragment>
    );
}
