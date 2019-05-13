import React from 'react';

import modalViewStyle from './modalView.module.sass';
import CloseButton from '../CloseButton';

export default function ModalView({ selectedVideoId, dispatch }) {
    const closeModalHandler = () => {
        dispatch({type: 'hideModal'});
    };

    return (
        <div className={modalViewStyle.container}>
            <div>Loading...</div>
            <CloseButton onClick={closeModalHandler} className={modalViewStyle.closeButton} />
            <iframe
                title='youtube-video'
                height='75%'
                width='100%'
                src={ "https://www.youtube.com/embed/" + selectedVideoId }
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
            />
        </div>
    );
}
