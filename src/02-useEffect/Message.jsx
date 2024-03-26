import { useEffect } from "react"

export const Message = () => {
    useEffect(() => {
      console.log("Message Mounted")
    
      return () => {
        console.log("Message Unmounted")
      }
    }, [])
    


  return (
    <>
        <h3>usuario ya existe</h3>
    </>
  )
}
