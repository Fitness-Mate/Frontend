interface Font {
  weight: number
  size: number
  letterSpacing?: number
  lineHeight?: number
}

const FONT = ({
  weight,
  size,
  letterSpacing = -0.0002,
  lineHeight = 138,
}: Font): string => {
  return `
  font-weight:${weight};
  font-size:${size}rem;
  letter-spacing:${letterSpacing}rem;
  line-height:${lineHeight}%
  `
}

export const fonts = {
  h1: FONT({ weight: 600, size: 2.6 }),
  h2: FONT({ weight: 600, size: 2.4 }),
  h3: FONT({ weight: 600, size: 2.0 }),
  h4: FONT({ weight: 600, size: 1.8 }),

  b1: FONT({ weight: 500, size: 1.8 }),
  b2: FONT({ weight: 600, size: 1.7 }),
  b3: FONT({ weight: 600, size: 1.6 }),
  b4: FONT({ weight: 500, size: 1.6 }),
  b5: FONT({ weight: 600, size: 1.5 }),
  b6: FONT({ weight: 500, size: 1.5 }),
  b7: FONT({ weight: 600, size: 1.5 }),

  d1: FONT({ weight: 500, size: 1.3, letterSpacing: 0 }),
  d2: FONT({ weight: 500, size: 1.2, letterSpacing: 0 }),
  d3: FONT({ weight: 500, size: 1.1, letterSpacing: 0 }),

  l1: FONT({ weight: 500, size: 1.5, lineHeight: 1.5 }),
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
  Netural550: "#818d9d",
  Netural600: "#6b7684",
  Netural700: "#626d7d",
  Netural800: "#4e5968",
  Netural900: "#333d4b",
  Netural950: "#272e38",
  Netural990: "#191f28",
  Error: "#ef444c",
  ErrorWeak: "#FFF5F5",
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
