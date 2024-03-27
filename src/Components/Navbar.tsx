import { IoReorderThreeOutline } from "react-icons/io5";
const Navbar = () => {
  const handleClick = () => {
    alert("we are working on it");
  };
  return (
    <div className=" bg-black">
      <div className=" container flex items-center justify-between py-4 text-white">
        <h2 className=" text-2xl">Zold</h2>
        <ul className=" items-center gap-8 hidden sm:flex">
          <li>Home</li>
          <li>Portfolio</li>
          <li>Blog</li>
          <li>Shop</li>
        </ul>
        <IoReorderThreeOutline
          onClick={handleClick}
          className=" text-2xl sm:hidden"
        />
      </div>
    </div>
  );
};

export default Navbar;
