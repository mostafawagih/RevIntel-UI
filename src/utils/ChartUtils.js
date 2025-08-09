const hexToRgba = (hex, alpha = 1) => {
  const h = hex.replace("#", "");
  const bigint = parseInt(
    h.length === 3
      ? h
          .split("")
          .map((c) => c + c)
          .join("")
      : h,
    16
  );
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export const toRgba = (color, alpha) => {
  if (!color) return `rgba(53,162,235,${alpha})`; // fallback
  if (color.startsWith("#")) return hexToRgba(color, alpha);
  if (color.startsWith("rgb(")) {
    // rgb(r,g,b) -> rgba(r,g,b,a)
    return color.replace(/^rgb\((.+)\)$/i, `rgba($1, ${alpha})`);
  }
  if (color.startsWith("rgba(")) {
    // replace existing alpha
    return color.replace(
      /^rgba\((\d+),\s*(\d+),\s*(\d+),\s*([^)]+)\)$/i,
      `rgba($1, $2, $3, ${alpha})`
    );
  }
  // last resort: just use as-is (browser will parse named colors), and fade with CSS opacity-like trick
  return color;
};
