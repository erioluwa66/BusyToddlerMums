import { signOut, getAuth } from "firebase/auth";

const Home = () => {
  // Instantiate the auth service SDK
  const auth = getAuth();

  return (
    <section className="home">
      <div className="home__container">
        <button onClick={() => signOut(auth)}>Sign Out</button>
      </div>
    </section>
  );
};
export default Home;
