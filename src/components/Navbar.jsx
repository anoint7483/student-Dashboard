

const Navbar = () =>{
    return(
        <nav className="navBar">
            <div className="logo">
                {/* <img src="assets/images/react.svg" alt="" /> */}
            </div>
            <ul>
                <li><a href="">Dashboard</a></li>
                <li><a href="">Payment Info</a></li>
                <li><a href="">Registration</a></li>
                <li><a href="">Courses</a></li>
                <li><a href="">Drop semester</a></li>
                <li><a href="">Result</a></li>
                <li><a href="">Notice</a></li>
                <li><a href="">Shedule</a></li>
            </ul>
            <div className="logout"><a href="">Logout</a></div>
        </nav>
    )
}

export default Navbar;