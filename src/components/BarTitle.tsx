// src/components/TitleBar.tsx
import { useWindowControlsOverlay } from "../utils/hooks/useWindowControlsOverlay"; // Seu hook customizado

export function TitleBar() {
  const { visible } = useWindowControlsOverlay();

  if (!visible) {
    return (
      <header className="h-[33px] bg-indigo-600 flex items-center px-4">
        <span className="text-white font-medium">Meu App (Navegador)</span>
      </header>
    );
  }

  return <header></header>;
}
