export const transformBodyData = (getbodyData: {
  height: number
  bodyFat: number
  muscleMass: number
}) => {
  let bodyFigure = ""

  if (getbodyData.bodyFat <= 15) {
    if (getbodyData.muscleMass <= 30) {
      bodyFigure = "마름"
    } else {
      bodyFigure = "근육질"
    }
  } else if (getbodyData.bodyFat <= 18) {
    bodyFigure = "보통"
  } else if (getbodyData.bodyFat <= 20) {
    bodyFigure = "통통"
  } else {
    bodyFigure = "뚱뚱"
  }

  return {
    height: getbodyData.height,
    bodyFigure,
  }
}
