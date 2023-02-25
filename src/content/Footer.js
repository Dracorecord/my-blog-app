import '../css/footer.css'
import {Link} from 'react-router-dom';

function Footer() {
    return(
        <div class="footer-dark">
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 col-md-3 item">
                        <h3>Services</h3>
                        <ul>
                            <li><Link to ="/" className="nav-link active" >Home</Link></li>
                            <li><Link to ="/members" className="nav-link active" >Members</Link></li>
                            <li><Link to ="/about" className="nav-link active" >About</Link></li>
                        </ul>
                    </div>
                    <div class="col-sm-6 col-md-3 item">
                        <h3>Locations</h3>
                        <ul>
                            <li><a href="#">Philippines</a></li>
                            <li><a href="#">U.S.A</a></li>
                            <li><a href="#">Singapore</a></li>
                        </ul>
                    </div>
                    <div class="col-md-6 item text">
                        <h3>Mobile Legends</h3>
                        <p>Mobile Legends: Bang Bang is a mobile multiplayer online battle arena game developed and published by Moonton, a subsidiary of ByteDance. Released in 2016, the game grew in popularity worldwide, most prominently in Southeast Asia, and has since crossed 1 billion downloads, with peak monthly players of 100 million.</p>
                    </div>
                    
                </div>
                <p class="copyright">Mobile Legends © 2023</p>
            </div>
        </footer>
    </div>
    )
}

export default Footer;