import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white flex flex-col justify-center items-center px-6">
      {/* Hero Section */}
      <div className="max-w-4xl text-center">
        <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 drop-shadow-lg">
          Bienvenido a <span className="text-indigo-400">TechStore</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-200 mb-8 drop-shadow-md">
          Explora productos innovadores y tecnología de punta. Compra rápido, seguro y moderno.
        </p>
        <Link
          to="/products"
          className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-8 py-4 rounded-lg shadow-lg transition-all duration-300"
        >
          Explorar Productos
        </Link>
      </div>

      {/* Imagery / Tech Illustration */}
      <div className="mt-16 w-full max-w-4xl mx-auto">
        <img
          src="https://www.randstad.es/wp-content/uploads/2016/08/tecnologia-futuro-y-nuevos-empleos-880.jpg"
          alt="Tecnología futurista"
          className="rounded-xl shadow-2xl w-full h-64 sm:h-80 md:h-96 object-cover"
        />
      </div>

    </div>
  );
};

export default Home;