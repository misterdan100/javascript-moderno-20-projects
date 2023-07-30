import { Outlet } from "react-router-dom"

export const AuthLayout = () => {
    
  return (
    <>
        <h1>Desde Auth Layout</h1>

        <Outlet />

    </>
  )
}
