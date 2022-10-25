import { Routes, Route } from "react-router-dom"
import { Error } from "./pages/Error"

import Home from "./pages/Home"
import { Login } from "./pages/Login"
import { PrivateRoute } from "./Routes/PrivateRoute"

export function Router() {
  return (
    <Routes>
      <Route
        path="/home"
        element={
          <PrivateRoute redirectTo="/error">
            <Home />
          </PrivateRoute>
        }
      />
      <Route path="/" element={<Login />} />
      <Route path="error" element={<Error />} />
    </Routes>
  )
}
