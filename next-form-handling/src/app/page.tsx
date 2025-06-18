const Home = () => {
  return (
    <main>
      <div className="flex flex-col gap-4 items-center mt-44">
        <h2 className="text-4xl text-center">Welcome to Next Form Handling</h2>
        <p className="text-center">This is the home page. Navigate to the posts section to see the list of posts.</p>
        <a
          className="w-fit px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition-colors"
          href="/posts">
          Go to Posts
        </a>
      </div>
    </main>
  );
};

export default Home;