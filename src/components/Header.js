import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Header() {
  return (
    <header className="border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between">
          <div className="flex items-center">
            <a href="/">
              <span className="sr-only">Workflow</span>
              <img
                className="h-10 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark.svg?color=black"
                alt=""
              />
            </a>
          </div>
          <div className="ml-10 space-x-4">
            <ConnectButton />
          </div>
        </div>
      </nav>
    </header>
  );
}
