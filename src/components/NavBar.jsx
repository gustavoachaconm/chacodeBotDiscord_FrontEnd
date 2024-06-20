import UserComponent from "./UserComponent";

export default function NavBar() {
  return (
    <>
      <header className="sticky top-0 z-10">
        <nav className="flex h-20 w-full items-center justify-between bg-[#202020]/50 px-44 text-xl text-white backdrop-blur-sm">
          <div className="navBtns flex gap-4 bg-transparent">
            <button className="rounded-md bg-[#01A300] px-4 py-2 text-sm text-white hover:bg-[#278a27]">
              button 1
            </button>
            <button className="rounded-md bg-[#01A300] px-4 py-2 text-sm text-white hover:bg-[#278a27]">
              button 2
            </button>
          </div>

          <div className="logoChaCode w-20 bg-transparent">
            <img
              className="h-full w-full rounded-full object-cover"
              src="/logoChaCode.png"
              alt="logoChaCode"
            />
          </div>

          <UserComponent />
        </nav>
      </header>
    </>
  );
}
