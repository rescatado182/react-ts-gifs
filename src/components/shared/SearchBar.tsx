import { useEffect, useState } from "react";

interface SearchBarProps {
    placeHolder?: string;
    onSearch?: (query: string) => void;
}

export const SearchBar = ({ placeHolder = "Buscar gifs...", onSearch }: SearchBarProps) => {
    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        const timeOutId = setTimeout(() => {
            onSearch?.(inputValue);
        }, 700);

        return () => {
            clearTimeout(timeOutId);
        }
    }, [inputValue, onSearch]);

    const handleSearchClick = () => {
        if (onSearch) {
            onSearch(inputValue);
        }
        setInputValue("");
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleSearchClick();
        }
    };

    return (
        <div className="search-container">
        <input 
            type="text" 
            className="search-input montserrat-regular" 
            placeholder={placeHolder} 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
        />

        <button className="search-button montserrat-bold" onClick={handleSearchClick}>Buscar</button>
        </div>
    )
}
