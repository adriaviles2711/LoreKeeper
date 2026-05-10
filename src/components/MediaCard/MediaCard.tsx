import "./MediaCard.css";
import { Plus } from "lucide-react";

function MediaCard() {
  return (
    <div className="media-card">
      <div className="media-poster-container">
        <img
          src="https://m.media-amazon.com/images/I/91Zwg6D7fYL.jpg"
          alt="Media Poster"
          className="media-poster"
        />
        <div className="media-see-details"><p>Ver detalles</p></div>
      </div>

      <div className="media-info">
        <h3 className="media-title">El señor de los Anillos #1</h3>
        <div className="media-data">
          <p className="media-year">2026</p>
          <p className="media-rating">8.7</p>
        </div>
        <button className="media-button"><Plus size="1em" strokeWidth={2.5} />Watchlist</button>
      </div>
    </div>
  );
}

export default MediaCard