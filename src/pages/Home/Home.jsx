import heroIllustration from "../../assets/icons/Hero_Illustration.svg"
// import backgroundframe from "../../assets/icons/BackgroundFrame.svg"
import bluecupcake from "../../assets/icons/Frame_blue.svg"
// import pinkcupcake from "../../assets/icons/Frame_pink.svg"
import { Link } from "react-router-dom";
import "./Home.scss"

function Home() {
  return (
    <div className="hero">
      {/* <img className="hero_icon" src={pinkcupcake} alt={pinkcupcake} /> */}
      <div className="hero__top">
        <div className="hero__top--left">
          <h1 className="hero__main-text">
            <span className="hero__main-text--one">Busy</span> <br />
            <span className="hero__main-text--two">Toddler Mum</span>
          </h1>
          {/* <img className="hero_icon" src={backgroundframe} alt={backgroundframe} /> */}
          <p className="hero__main-text--sub">
            Mia, a whirlwind mom juggling work and rambunctious twins, dreaded
            mealtimes, BusyToddlerMum, a web app became her hero. This app
            offered delcious, toddler, approved recipes, a magic filter to find
            meals based on what's already in the fridge, and personalized meal
            plans for stress-free prep. With BusyToddlerMum, Mia saved time,
            enjoyed cooked again, and created happy mealtime memories with her
            family. Let BusyToddlerMum be your hero too!
          </p>
          <Link to="/recipes">
            <button className="">Get a Recipe</button>
          </Link>
        </div>
        <img
          className="hero_logo"
          src={heroIllustration}
          alt={heroIllustration}
        />
      </div>
      <img className="hero_icon" src={bluecupcake} alt={bluecupcake} />
      <div className="hero__bottom">
        <p>Popular Recipes</p>
      </div>
    </div>
  );
}
export default Home;
