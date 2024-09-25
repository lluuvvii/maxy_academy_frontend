const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-6 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">Web Dev Conf 2024</h1>
        <nav>
          <a href="#about" className="px-4 py-2 hover:text-gray-400">About</a>
          <a href="#schedule" className="px-4 py-2 hover:text-gray-400">Schedule</a>
          <a href="#register" className="px-4 py-2 hover:text-gray-400">Register</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
