import {createContext, useContext} from 'react';

/**
 * Creates a new instance of React Context for the Bookmarks.
 *
 * @constant
 * @type {React.Context}
 */
export const ArticleBookmarksContext = createContext(undefined);

/**
 * A custom hook that allows you to access the Bookmarks Context.
 *
 * @function
 * @return {any} The current value of the Bookmarks Context.
 *
 * @example
 * const bookmarks = useBookmarksContext();
 */
export function useBookmarksContext() {
    return useContext(ArticleBookmarksContext);
}
