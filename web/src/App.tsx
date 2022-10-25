import { BrowserRouter } from "react-router-dom"
import { Router } from "./Router"
import { GoogleOAuthProvider } from "@react-oauth/google"
import { UserProvider } from "./contexts/User"

import "./styles/main.css"

export function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <GoogleOAuthProvider clientId="75893986971-un9a1tteuphbunho3be4j9pnancm8vi3.apps.googleusercontent.com">
          <Router />
        </GoogleOAuthProvider>
      </UserProvider>
    </BrowserRouter>
  )
}
