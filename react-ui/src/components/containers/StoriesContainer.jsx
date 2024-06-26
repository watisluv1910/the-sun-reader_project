import React, {useEffect, useState} from 'react';
import {getStoriesIds} from '../../services/news.service';
import {Story} from '../Story';
import {
    StoriesContainerWrapper,
} from '../../assets/styles/StoriesContainerStyles';
import {useInfiniteScroll} from '../../hooks/useInfiniteScroll';
import {useIntersectionObserver} from '../../hooks/useIntersectionObserver';
import {MAX_STORIES} from '../../data/constants';

/**
 * A component that renders a list of stories,
 * implementing infinite scroll functionality.
 *
 * @component
 * @return {React.Element} The rendered StoriesContainer component.
 */
export const StoriesContainer = () => {
    const {count} = useInfiniteScroll();
    const [storiesIds, setStoriesIds] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getStoriesIds().then((data) => setStoriesIds(data));
    }, []);

    const loadMoreStories = () => {
        setLoading(true);
    };

    const targetRef = useIntersectionObserver(loadMoreStories);

    return (
        <>
            <StoriesContainerWrapper data-test-id="stories-container">
                {storiesIds && storiesIds.slice(0, count).map((storyId) => (
                    <Story
                        key={storyId}
                        storyId={storyId}
                    />
                ))}
                {count < MAX_STORIES && loading && <div>Loading...</div>}
                <div ref={targetRef}/>
            </StoriesContainerWrapper>
        </>
    );
};
