import { CustomHeader } from "./shared/components/CustomHeader"
import { PreviousSearch } from "./shared/components/PreviousSearch"
import { SearchBar } from "./shared/components/SearchBar"
import { GifsResults } from "./gifs/components/GifResults"
import { useGifsSearch } from "./gifs/hooks/useGifsSearch"


export const GifsApp = () => {

    const {
        gifs,
        previousTerms,
        handleSearch,
        handleTermClicked
    } = useGifsSearch();

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
