import { ReactElement } from "react"
import { Navigate } from "react-router-dom"
import { useUser } from "../hooks/useUser"

interface PrivateRouteProps {
  children: ReactElement
  redirectTo: string
}

export function PrivateRoute({ children, redirectTo }: PrivateRouteProps) {
  const { user } = useUser()

  return user.name ? children : <Navigate to={redirectTo} />
}
