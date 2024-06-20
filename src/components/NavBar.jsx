export default function NavBar(){
    return (<>
    <nav className="flex justify-between items-center bg-blue-950 text-white text-xl h-20 px-44">
        <div className="flex gap-4 w-20 items-center">
        <img className="w-full h-full object-cover" src="/public/logo.png" alt="" />
        <h2>Code</h2>
        <div className="flex gap-4">
            <button className=" text-black bg-[#D9D9D9] w-32 border-2 border-black rounded-lg p-3 ">button 1</button>
            <button className="text-black bg-[#D9D9D9] w-32 border-2 border-black rounded-lg p-3 ">button 2</button>
        </div>
        </div>

        <div className="flex gap-4">

        <div >
            idioma
        </div>
        <div>
            premiun
        </div>
        <div className="w-12 border-solid rounded-[100%] ">
            <ul>
            <img className="rounded-full" src="https://cdn.prod.website-files.com/610bb663a35dd3364ddbf08c/63219b2e6e6a367eb5621951_react-skeleton-header-min.png" alt="" />

            </ul>
        </div>
        </div>
    </nav>
    </>)
}