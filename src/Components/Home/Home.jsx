import Banner from "../Banne/Banner";
import Footer from "../Footer/Footer";
import Qsection from "../Qsection/Qsection";

const Home = () => {
    return (
        <div>
             <Banner></Banner>
             

             <div className="max-w-7xl mx-auto my-5">
                <Qsection></Qsection>
             </div>
        </div>
    );
};

export default Home;