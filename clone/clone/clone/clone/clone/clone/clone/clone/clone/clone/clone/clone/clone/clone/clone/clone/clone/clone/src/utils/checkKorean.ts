export const checkKorean = (str: string) => {
  const charCode = str.charCodeAt(str.length - 1)
  const consonantCode = (charCode - 44032) % 28
  return consonantCode === 0 ? `${str}를` : `${str}을`
}
