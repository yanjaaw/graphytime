import { ConnectButton } from "@rainbow-me/rainbowkit";
import { MdOutlineTableChart } from "react-icons/md";

export default function Header() {
  return (
    <header className="border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <MdOutlineTableChart className="w-10 h-10" />
            <span className="font-medium">Graphiqly</span>
          </a>
          <div className="ml-10 space-x-4"><ConnectButton /></div>
        </div>
      </nav>
    </header>
  );
}
