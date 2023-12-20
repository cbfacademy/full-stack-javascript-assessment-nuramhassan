import logo from '../assets/images/logo192.png'

export default function Header(props) {
    // function Header(){ is same as const Header= () => {}
      return (
        <nav className="nav-bar">
          <p><img src={logo} alt="logo" hieght="40"/></p>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/write-a-review">Write a Review</a>
            </li>
            <li> 
              <a href="/contact—us">Contact</a>
            </li>
          </ul>
        </nav>
    
        )
    
}