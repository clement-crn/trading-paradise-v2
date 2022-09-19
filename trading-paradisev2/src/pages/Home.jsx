import "./home.css";
import videoBg from "../components/videobg.mp4";
import Navbar from "../components/Navbar";
import Ticker from "../components/ticker";
import { Link } from "react-router-dom";
function Home() {
    return (
        <div className="home">
            <Navbar />
            <Ticker />

            <div className="content">
                <h1>Commencez votre aventure</h1>
                <Link to="/page2">Nous rejoindre</Link>

                <video muted playsinline src={videoBg} autoPlay loop />
            </div>
        </div>
    );
}
export default Home;
