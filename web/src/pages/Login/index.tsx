import { useGoogleLogin } from "@react-oauth/google"
import axios from "axios"

import logoImg from "../../assets/logoNLW.svg"
import logoGoogle from "../../assets/googleIcon.svg"
import { useUser } from "../../hooks/useUser"
import { useNavigate } from "react-router-dom"

export function Login() {
  const { user, fillUser } = useUser()
  const navigate = useNavigate()

  const login = useGoogleLogin({
    onSuccess: async (response: any) => {
      try {
        const dataInfo = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${response.access_token}`,
            },
          }
        )
        fillUser(dataInfo.data)
        navigate("/home")
      } catch (error) {
        console.error(error)
      }
    },
  })
  console.log(user)
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="" />
      <h1 className="text-5xl text-white font-black mt-32">Login</h1>

      <button
        className="w-[400px] rounded bg-white py-3 flex justify-center mt-12"
        onClick={() => login()}
      >
        <img src={logoGoogle} alt="Google" />
      </button>
    </div>
  )
}
