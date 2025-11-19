import { useRef, useState } from 'react'
import { getGifsByQuery } from '../actions/get-gifs-by-query.action';
import type { Gif } from '../interfaces/gif.interface';


export const useGifsSearch = () => {

    // Set state
    const [gifs, setGifs] = useState<Gif[]>([]);
    const [previousTerms, setPreviousTerms] = useState<string[]>([]);

    // Cache
    const gifsCache = useRef<Record<string, Gif[]>>({});

    // Handlers
    const handleTermClicked = async (term: string) => {
        if (gifsCache.current[term]) {
            setGifs(gifsCache.current[term]);
            return;
        }
        const gifs = await getGifsByQuery(term);
        setGifs(gifs);
    }

    const handleSearch = async (query: string = '') => {
        query = query.trim().toLowerCase();
        if (query.length === 0) return;

        if (previousTerms.includes(query)) return;

        setPreviousTerms((prevTerms) => [query, ...prevTerms].slice(0, 7));

        const gifsQuery = await getGifsByQuery(query);

        setGifs(gifsQuery);

        gifsCache.current[query] = gifsQuery;
    }
    
    return {
        // Properties
        gifs,
        previousTerms,

        // Methods
        handleSearch,
        handleTermClicked
    }
}
