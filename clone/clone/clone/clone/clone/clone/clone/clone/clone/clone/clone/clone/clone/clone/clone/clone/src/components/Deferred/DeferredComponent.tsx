import { PropsWithChildren, useEffect, useState } from "react"

const DeferredComponent = ({ children }: PropsWithChildren) => {
  const [isDeferred, setIsDeferred] = useState(false)

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setIsDeferred(true)
    }, 200)
    return () => clearTimeout(timeOut)
  }, [])

  if (!isDeferred) return <div style={{ width: "100%", height: "100vh" }}></div>
  return <>{children}</>
}

export default DeferredComponent
