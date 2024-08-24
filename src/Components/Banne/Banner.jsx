import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div
  className="hero min-h-screen mt-5"
  style={{
    backgroundImage: "url(https://i.ibb.co/GvzF5X4/writing-assignment-190304.jpg)",
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 font-bold text-rose-500 text-5xl ">Collaborate and Learn Together</h1>
      <p className="mb-5 font-bold text-rose-300">
      "Collaborate and Learn Together" fosters a dynamic online space where students connect, share knowledge, and grow through group study sessions, enhancing understanding and success through collaborative learning.
      </p>


     <Link to="/about">
     
     <button type="button" class="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" >About Us</button>


     </Link>
    </div>
  </div>
</div>
    );
};

export default Banner;