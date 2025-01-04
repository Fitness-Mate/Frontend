/* 
SSL/TLS 인증서 설치(도메인 사용 불가피) 대신에
https 사용을 우회하기 위한 Vercel Functions 사용
*/

export default async function handler(req, res) {
  // 백엔드 서버의 URL
  const backendUrl = "http://43.202.36.104:8080"

  // 클라이언트로부터의 요청을 백엔드로 전달
  const response = await fetch(`${backendUrl}${req.url}`, {
    method: req.method,
    headers: {
      ...req.headers,
      "Content-Type": "application/json",
    },
    body: req.method !== "GET" ? JSON.stringify(req.body) : null,
  })

  // 백엔드 서버의 응답을 프론트엔드로 전달
  const data = await response.json()
  res.status(response.status).json(data)
}
