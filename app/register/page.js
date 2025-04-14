const Register = () => {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <form className="bg-white p-8 rounded-lg shadow-md w-96">
          <h2 className="text-2xl font-semibold mb-6 text-center">Register</h2>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 border border-gray-300 rounded-md mb-4"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border border-gray-300 rounded-md mb-4"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border border-gray-300 rounded-md mb-4"
          />
          <button className="w-full p-3 bg-blue-800 text-white rounded-md hover:bg-blue-700">
            Register
          </button>
        </form>
      </div>
    );
  };
  
  export default Register;
  