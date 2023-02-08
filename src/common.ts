import { useState, useEffect } from "react";

/**
 * Vite does not fully support dynamic imports
 */
function getImport(path:string) {
  if(path.startsWith('flags/')){
    return import(`./assets/flags/${path.substring(6)}.svg`);
  } else {
    return import(`./assets/${path}.svg`);
  }
}

export function useSvgAsset(path: string) {
  const [src, setSrc] = useState<string>()
  useEffect(() => {
    getImport(path)
      .then(im => setSrc(im.default));
  }, [])
  return src;
}
