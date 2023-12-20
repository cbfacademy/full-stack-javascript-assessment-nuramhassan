import cbf from '../assets/images/cbf.png'
import bluecube from '../assets/images/bluecube.png'

export default function Home(){
    return (
        <>
            <h1> Welcome to Rainbow Noir! </h1>
            <ul className="productBox">
                <li>
                <a href='/companies/101' className='productBox'><img src={cbf} alt="cbf" hieght="40"/></a>
                </li>
                <li>
                <a href='/companies/102' className='productBox'><img src={bluecube} alt="bluecube" hieght="40"/></a>
                </li>

            </ul>
        </>
    )
}