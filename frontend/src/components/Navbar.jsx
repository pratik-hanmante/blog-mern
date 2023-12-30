import { Link } from "react-router-dom"
import { BsSearch } from "react-icons/bs";



const Navbar = () => {
  return (
    <div className='flex items-center justify-between px6 md:px-[200px] py-4'>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-800 transition duration-300 ease-in-out transform hover:text-blue-500 font-sans">
      <Link to='/'>
        <span className="text-gray-500">B</span>log<span className="text-gray-500">H</span>ub
      </Link>
    </h1>
        <div className="flex items-center space-x-2 bg-white border-2 border-gray-300 rounded-full p-2 w-72 focus-within:border-blue-500 transition duration-300 ease-in-out">
  <span className="text-gray-500">
    <BsSearch />
  </span>
  <input
    type="text"
    placeholder="Search your interests"
    className="appearance-none bg-transparent border-none w-full focus:outline-none"
  />
</div>

        <div className="flex items-center justify-center space-x-4 md:space-x-4">
            <h3><Link to='/login'>Login</Link></h3>
            <h3><Link to='/register'>Register</Link></h3>
        </div>
    </div>
  )
}

export default Navbar