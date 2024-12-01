interface Font {
  weight: number
  size: number
  letterSpacing?: number
  lineHeight?: number
}

const FONT = ({
  weight,
  size,
  letterSpacing = -0.02,
  lineHeight = 138,
}: Font): string => {
  return `
  font-weight:${weight};
  font-size:${size}px;
  letter-spacing:${letterSpacing}rem;
  line-height:${lineHeight}%
  `
}

export const fonts = {
  h1: FONT({ weight: 600, size: 26 }),
  h2: FONT({ weight: 600, size: 24 }),
  h3: FONT({ weight: 600, size: 20 }),
  h4: FONT({ weight: 600, size: 18 }),

  b1: FONT({ weight: 500, size: 18 }),
  b2: FONT({ weight: 600, size: 17 }),
  b3: FONT({ weight: 600, size: 16 }),
  b4: FONT({ weight: 500, size: 16 }),
  b5: FONT({ weight: 600, size: 15 }),
  b6: FONT({ weight: 500, size: 15 }),
  b7: FONT({ weight: 600, size: 15 }),

  d1: FONT({ weight: 500, size: 13, letterSpacing: 0 }),
  d2: FONT({ weight: 500, size: 12, letterSpacing: 0 }),
  d3: FONT({ weight: 500, size: 11, letterSpacing: 0 }),

  l1: FONT({ weight: 500, size: 15, lineHeight: 150 }),
}

export const theme = {
  Brand50: "#ebf7ff",
  Brand100: "#e0f2ff",
  Brand150: "#ddeaf4",
  Brand200: "#d2ecff",
  Brand300: "#99d4ff",
  Brand400: "#6cc1fe",
  Brand500: "#3eaeff",
  Brand600: "#0b98ff",
  Brand700: "#048ef1",
  Brand750: "#0f84d9",
  Brand800: "#0672bf",
  Brand900: "#035896",
  Brand950: "#01375e",
  Brand990: "#042741",
  Netural0: "#fff",
  Netural50: "#fbfcfc",
  Netural100: "#f9fAfB",
  Netural150: "#F4F7F9",
  Netural200: "#f2f4f6",
  Netural300: "#e4eaf0",
  Netural400: "#d0d9e2",
  Netural450: "#bbc8d6",
  Netural500: "#a2b2c2",
  Netural550: "#818D9D",
  Netural600: "#6b7684",
  Netural700: "#626d7d",
  Netural800: "#4e5968",
  Netural900: "#333d4b",
  Netural950: "#272e38",
  Netural990: "#191f28",
  Error: "#ef444c",
  Success: "#2edd6a",
  Purple: "#5950D3",
  Caution: "#E7A10A",
}

export const animation = {
  slow: { type: "spring", stiffness: 70, damping: 20 },
  basic: { type: "spring", stiffness: 200, damping: 30 },
  small: { type: "spring", stiffness: 480, damping: 50 },
  medium: { type: "spring", stiffness: 270, damping: 25 },
  large: { type: "spring", stiffness: 100, damping: 15 },
  quick: { type: "spring", stiffness: 800, damping: 55 },
  rapid: { type: "spring", stiffness: 1000, damping: 55 },
  bounce: { type: "spring", stiffness: 300, damping: 10 },
}

export default theme
