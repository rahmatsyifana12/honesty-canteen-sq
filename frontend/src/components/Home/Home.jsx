import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <Navbar />
            <div>
				<title>thrifty!</title>
			</div>
            <div className="container">
                <div className="row align-items-center text-black pt-md-2 pb-md-4">
                    <div className="col-lg-6 col-12">
                        <img src="/img/home.png" className="d-block ms-auto" alt="Scrolling" style={{ width: "400px" }} />
                    </div>
                    <div className="col-lg-6 col-12 px-5">
                        <h2>
                            Selamat datang di Honesty Canteen
                        </h2>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;