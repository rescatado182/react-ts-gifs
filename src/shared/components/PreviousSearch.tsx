import type { FC } from "react";

interface PreviousSearchProps {
  searches: string[];

  onLabelClicked?: (term: string) => void;
}

export const PreviousSearch: FC<PreviousSearchProps> = ({ searches, onLabelClicked }) => {
  return (
        <div className="previous-search">
            <h2>Búsquedas Anteriores</h2>
            <ul className="previous-search-list">
                {searches.map((search, index) => (
                <li key={index} className="montserrat-regular" 
                    onClick={() => onLabelClicked?.(search)}>
                    {search}
                </li>
                ))}
            </ul>
        </div>
  )
}
