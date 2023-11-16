import { Link } from "react-router-dom";

function HomeContents() {
  return (
    <div
      className={`my-20 grid max-w-4xl grid-cols-1 items-center gap-20 px-8 text-center md:w-[90%] md:grid-cols-2 md:text-left`}
    >
      <div className="max-w-sm">
        <p className="mb-8 uppercase opacity-80">So you want to travel to</p>
        <p className="mb-8 font-ffSerif text-7xl uppercase ">Space</p>
        <p className="opacity-80">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>

      <div className="flex items-center justify-center">
        <Link
          className="explore-circle relative z-10 flex h-40 w-40 items-center justify-center rounded-full bg-slate-100 font-ffSerif text-xl uppercase text-slate-900"
          to="/destination"
        >
          Explore
        </Link>
      </div>
    </div>
  );
}

export default HomeContents;
