import logoDiscrod from "../assets/icons8-logotipo-de-la-discordia-100 6.png"

export default function LoginButton() {
    return (
        <>

            <div className=' bg-greenFont text-white rounded-2xl py-1 px-10 max-sm:px-2'>
              <a className=' flex flex-row gap-6 items-center justify-center font-bold' href="https://discord.com/oauth2/authorize?client_id=1250839124466991136&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A5173%2Fprueba&scope=identify+email+guilds+applications.commands.permissions.update">
              <h1 className=" max-sm:hidden ">Login</h1>
              <img src={logoDiscrod} className="w-10"/>
              </a>

            </div>

        </>
      )
    }