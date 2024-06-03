export default function ErrorPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <h1 className="text-2xl font-bold text-red-600 mb-4">Oops!</h1>
        <p className="text-gray-700 mb-4">Sorry, something went wrong.</p>
        <a
          href="/"
          className="inline-block px-4 py-2 mt-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
        >
          Go back to Home
        </a>
      </div>
    </div>
  );
}
