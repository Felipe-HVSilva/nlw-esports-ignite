import { useEffect, useState } from "react"
import { googleLogout } from "@react-oauth/google"

import * as Dialog from "@radix-ui/react-dialog"
import axios from "axios"

import logoImg from "../../assets/logoNLW.svg"
import { GameBanner } from "../../components/GameBanner"
import { CreateAdBanner } from "../../components/CreateAdBanner"
import { CreateAdModal } from "../../components/CreateAdModal"
import { useNavigate } from "react-router-dom"
import { useUser } from "../../hooks/useUser"

interface Game {
  id: string
  title: string
  bannerUrl: string
  _count: {
    ads: number
  }
}

function Home() {
  const { user, logoutUser } = useUser()
  const [games, setGames] = useState<Game[]>([])
  const navigate = useNavigate()

  function logout() {
    logoutUser()
    navigate("/")
  }

  useEffect(() => {
    axios("http://localhost:3333/games").then((response) =>
      setGames(response.data)
    )
  }, [])

  console.log(user.name)

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center mt-20">
      <img src={logoImg} alt="" />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu{" "}
        <span className="text-transparent bg-nlw-gradient bg-clip-text">
          duo
        </span>{" "}
        está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        {games.map((game) => (
          <GameBanner
            key={game.id}
            bannerUrl={game.bannerUrl}
            title={game.title}
            adsCount={game._count.ads}
          />
        ))}
      </div>

      <Dialog.Root>
        <CreateAdBanner />
        <CreateAdModal />
      </Dialog.Root>

      <button className="text-2xl text-white mt-8 font-bold" onClick={logout}>
        Sair
      </button>
    </div>
  )
}

export default Home
