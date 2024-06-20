import { IoIosArrowDown } from "react-icons/io";

export default function UserComponent() {
    //Este componente recibira el userName y el UserImage por parametro
  return (
    <>
      <div className="userInfo flex items-center bg-transparent">
        <div className="userName flex items-center gap-4 bg-transparent px-4">
          <span className="bg-transparent text-sm">userName</span>
          <span className="cursor-pointer bg-transparent">
            <IoIosArrowDown className="bg-transparent text-2xl" />
          </span>
        </div>
        <div className="userImage w-14 bg-transparent">
          <img
            className="h-full w-full object-cover"
            src="https://i.pinimg.com/originals/e2/7c/87/e27c8735da98ec6ccdcf12e258b26475.png"
            alt="userLogo"
          />
        </div>
       
      </div>
    </>
  );
}
