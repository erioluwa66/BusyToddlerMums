import heroIllustration from "../../assets/icons/Hero_Illustration.svg"
import bluecupcake from "../../assets/icons/Frame_blue.svg"
import pinkcupcake from "../../assets/icons/Frame_pink.svg"
import { Link } from "react-router-dom";
import "./Home.scss"

function Home() {
  return (
    <div>
      <img className="hero_icon" src={pinkcupcake} alt={pinkcupcake} />
      <h1>Busy Toddler Mum</h1>
      <h2>
        Mia, a whirlwind mom juggling work and rambunctious twins, dreaded
        mealtimes, BusyToddlerMum, a web app became her hero. This app offered
        delcious, toddler, approved recipes, a magic filter to find meals based
        on what's already in the dridge, and personalized meal plans for
        stress-free prep. With BusyToddlerMum, Mia saved time, enjoyed cooked
        again, and created happy mealtime memories with her family. Let
        BusyToddlerMum be your hero too!
      </h2>
      <div>
        <Link to="/recipes">
          <button className="">Get a Recipe</button>
        </Link>
        <img
          className="hero_icon"
          src={heroIllustration}
          alt={heroIllustration}
        />
        <img className="hero_icon" src={bluecupcake} alt={bluecupcake} />
      </div>
      <p>Popular Recipes</p>
    </div>
  );
}
export default Home;
