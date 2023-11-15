import { Link } from "react-router-dom";

function HomeContents() {
  return (
    <div
      className={`first-letter: grid w-[90%] grid-cols-1 items-center gap-4 md:grid-cols-2`}
    >
      <div>
        <p>So you want to travel to</p>
        <p className="font-ffSerif text-9xl uppercase">Space</p>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>

      <div className="flex items-center justify-center">
        <Link className="" to="/destination">
          Explore
        </Link>
      </div>
    </div>
  );
}

export default HomeContents;
