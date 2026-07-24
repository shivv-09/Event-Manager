import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className=" font-sans flex items-center justify-between ml-[-1rem]  bg-olive-100 px-6 py-4 shadow-lg">
      <div className="flex items-center gap-2 text-xl font-semibold text-slate-800">
        <h1>Event<span className="text-purple-900" >Hub</span></h1>
        
      </div>

      <ul className="flex items-center gap-9 text-sm font-medium text-slate-500">
        <li><Link to='/' className="hover:text-purple-950">Home</Link></li>
        <li><Link to='/event' className="hover:text-purple-950">Events</Link></li>
        <li><Link to='/add-event' className="hover:text-purple-950">Add Event</Link></li>
      </ul>

      <div className="flex items-center gap-3">
        <button className="rounded-[3rem] text-purple-900 px-4 py-1 border-1 transition hover:bg-purple-50 shadow-sm">
          Login
        </button>
        
      </div>
    </nav>
  )
}

export default Navbar