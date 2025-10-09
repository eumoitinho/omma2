/**
 * Gera um placeholder SVG para imagens
 * @param text Texto a ser exibido no placeholder
 * @param width Largura do SVG (padrão: 800)
 * @param height Altura do SVG (padrão: 600)
 * @returns Data URL do SVG
 */
export function getImagePlaceholder(
  text: string,
  width: number = 800,
  height: number = 600
): string {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
      <rect width="${width}" height="${height}" fill="#171717"/>
      <text
        x="50%"
        y="50%"
        dominant-baseline="middle"
        text-anchor="middle"
        font-family="system-ui, -apple-system, sans-serif"
        font-size="24"
        fill="#fbbf24"
      >${text}</text>
    </svg>
  `;

  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

/**
 * Verifica se uma imagem existe e retorna a URL ou um placeholder
 * @param imagePath Caminho da imagem
 * @param fallbackText Texto do placeholder
 * @returns URL da imagem ou placeholder
 */
export function getImageOrPlaceholder(
  imagePath: string | undefined,
  fallbackText: string
): string {
  if (!imagePath) {
    return getImagePlaceholder(fallbackText);
  }
  return imagePath;
}
