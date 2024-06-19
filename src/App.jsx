function App() {


  return (
    <>
      <div className=' container h-screen content-center'>
        <div className='flex justify-center'>
          <a className='border-2 border-black rounded-lg p-3 ' href="https://discord.com/oauth2/authorize?client_id=1250839124466991136&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A5173%2Fprueba&scope=identify+email+guilds+applications.commands.permissions.update">Inicia sesión con Discord</a>
        </div>
      </div>
    </>
  )
}

export default App
