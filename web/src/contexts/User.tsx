import { createContext, ReactNode, useState } from "react"

interface User {
  email: string
  name: string
  picture: string
}

interface UserContextProivder {
  user: User
  fillUser: (user: User) => void
  logoutUser: () => void
}

export const UserContext = createContext<UserContextProivder>(
  {} as UserContextProivder
)

interface UserProviderProps {
  children: ReactNode
}

export function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<User>({} as User)

  function fillUser(user: User) {
    setUser(user)
  }

  function logoutUser() {
    setUser({
      name: "",
      email: "",
      picture: "",
    })
  }
  return (
    <UserContext.Provider value={{ user, fillUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  )
}
