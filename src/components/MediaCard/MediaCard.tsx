import { Plus } from "lucide-react";

function MediaCard() {
  return (
    <div className="bg-bg-secondary border-2 border-solid border-transparent w-xs rounded-xl shadow-glow-off cursor-pointer m-5 overflow-hidden group transition-all hover:shadow-glow hover:border-primary">
      <div className="w-full aspect-5/3 overflow-hidden relative">
        <img
          src="https://m.media-amazon.com/images/I/91Zwg6D7fYL.jpg"
          alt="Media Poster"
          className="w-full h-full object-cover block transition-transform group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
          <p className="text-primary text-lg font-semibold">Ver detalles</p>
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-text-primary line-clamp-2 overflow-hidden text-xl transition-colors group-hover:text-primary">
          El señor de los Anillos #1
        </h3>
        <div className="flex items-center justify-between font-semibold text-sm">
          <p className="text-text-secondary">2026</p>
          <p className="text-primary">8.7</p>
        </div>
        <button className="w-full py-2 px-0 mt-2.5 bg-transparent border-2 border-solid border-text-secondary rounded-lg text-text-secondary text-xs font-semibold cursor-pointer flex items-center justify-center gap-1.5 transition-colors hover:border-primary hover:text-primary hover:bg-primary/10">
          <Plus size="1em" strokeWidth={2.5} />
          Watchlist
        </button>
      </div>
    </div>
  );
}

export default MediaCard;
