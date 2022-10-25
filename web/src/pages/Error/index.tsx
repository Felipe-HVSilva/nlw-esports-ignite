import { Link } from "react-router-dom"

export function Error() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <h1 className="text-5xl text-white font-bold">Erro não identificado !</h1>
      <Link to="/" className="text-xl text-white mt-4">
        Volte para página de{" "}
        <p className="inline-block font-bold hover:underline">Login</p>
      </Link>
    </div>
  )
}
