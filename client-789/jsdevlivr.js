export default function myImageLoader({ src, width, quality }) {
  if (/^https?:\/\//i.test(src)) {
    return `${src}?w=${width}&q=${quality || 75}`;
  }
  // Nếu không phải là URL đầy đủ, xử lý như bình thường
  src = src.replace("https://cdn.jsdelivr.net/gh/snail5555/akv/", "");
  src = src.replace("@latest/https%3A/cdn.jsdelivr.net/gh/snail5555/akv/", "");
  src = src.replace("@latest", "");
  let finalSrc = `https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/${src}?w=${width}&q=${quality || 75}`;
  return finalSrc.replace("@main//789bet", "@main/789bet");
}
