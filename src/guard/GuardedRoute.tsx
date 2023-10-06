import { Navigate, Outlet } from 'react-router-dom'

interface IGuardedRouteProps {
  isRouteAccessible: boolean
  redirectRoute: string
}

const GaurdedRoute = ({ isRouteAccessible, redirectRoute }: IGuardedRouteProps) => {
  return isRouteAccessible ? <Outlet /> : <Navigate to={redirectRoute} replace />
}

export default GaurdedRoute
