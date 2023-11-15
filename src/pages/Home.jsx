import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[url('/images/home/background-home-desktop.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="grid grid-cols-2  items-center gap-4">
        <div>
          <p>So you want to travel to</p>
          <p className="font-ffSerif text-9xl uppercase">Space</p>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>

        <div className="flex items-center justify-center">
          <Link className="" to="/destination">
            Explore
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
