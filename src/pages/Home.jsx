import HomeContents from "../features/HomeContents";

function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[url('/images/home/background-home-mobile.jpg')] bg-cover bg-center bg-no-repeat md:bg-[url('/images/home/background-home-desktop.jpg')]">
      <HomeContents />
    </div>
  );
}

export default Home;
