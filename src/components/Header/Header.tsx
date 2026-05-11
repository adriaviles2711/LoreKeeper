import { ScrollText } from "lucide-react";

function Header() {
  return (
    <div className="flex items-center bg-bg-secondary px-7.5 py-2.5">
      <div className="flex items-center font-display text-3xl">
        <div className="p-2 bg-primary rounded-lg flex items-center justify-center mr-2.5 shadow-glow">
          <ScrollText size="0.8em" strokeWidth={2.5} />
        </div>
        <span>LORE</span>
        <span className="text-primary">KEEPER</span>
      </div>
    </div>
  );
}

export default Header;
