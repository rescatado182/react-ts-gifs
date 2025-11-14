
import { useState } from "react"
import { CustomHeader } from "./components/shared/CustomHeader"
import { PreviousSearch } from "./components/shared/PreviousSearch"
import { SearchBar } from "./components/shared/SearchBar"
import { GifsResults } from "./gifs/components/GifResults"
import { getGifsByQuery } from "./gifs/actions/get-gifs-by-query.action"
import type { Gif } from "./gifs/interfaces/gif.interface"


export const GifsApp = () => {

    const [gifs, setGifs] = useState<Gif[]>([]);
    const [previousTerms, setPreviousTerms] = useState<string[]>([]);

    const handleTermClicked = (term: string) => {
        console.log(`Term clicked: ${term}`);
    }

    const handleSearch = async (query: string = '') => {
        query = query.trim().toLowerCase();
        if (query.length === 0) return;

        if (previousTerms.includes(query)) return;

        setPreviousTerms((prevTerms) => [query, ...prevTerms].slice(0, 7));

        const gifsQuery = await getGifsByQuery(query);

        setGifs(gifsQuery);
    }

    return (
        <>
            {/* Header */}
            <CustomHeader title="Gifs App - Buscador de Apps" subtitle="Descubre y comparte el Gif perfecto" />

            {/* Search */}
            <SearchBar placeHolder="Busca el gif que quieras..." onSearch={handleSearch} />

            {/* Previous Searches */}
            <PreviousSearch searches={previousTerms} onLabelClicked={handleTermClicked} />

            {/* Gif Results */}
            <GifsResults gifs={gifs} />

        </>
    )
}
