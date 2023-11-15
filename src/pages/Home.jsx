import HomeContents from "../features/HomeContents";

function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[url('/images/home/background-home-desktop.jpg')] bg-cover bg-center bg-no-repeat">
      <HomeContents />
    </div>
  );
}

export default Home;
