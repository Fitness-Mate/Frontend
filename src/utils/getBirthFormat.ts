export const getBirthFormat = (str: string) => {
  const number = str.trim().replace(/[^0-9]/g, "")

  if (number.length < 5) {
    return number
  }
  if (number.length < 8) {
    return number.replace(/(\d{4})(\d{1})/, "$1-$2")
  }
  if (number.length < 9) {
    return number.replace(/(\d{4})(\d{2})(\d{1})/, "$1-$2-$3")
  }

  return number.replace(/(\d{4})(\d{2})(\d{2})/, "$1-$2-$3")
}
