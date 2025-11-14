import type { FC } from "react";
import type { Gif } from "../../mock-data/gifs.mock";

interface GifsResultsProps {
  gifs: Gif[];
}

export const GifsResults: FC<GifsResultsProps> = ({ gifs = [] }) => {
  return (
    <div className="gifs-container">
    {
        gifs.map((gif) => (
            <div key={gif.id} className="gif-card">
                <img src={gif.url} alt={gif.title} width={gif.width} height={gif.height} />
                <h3 className="montserrat-regular">{gif.title}</h3>
                <p>
                    {gif.width} x {gif.height} (1.5mb)
                </p>
            </div>
    ))}
</div>
  )
}
