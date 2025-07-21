
function App() {
  return (
    <div className="text-center my-28">
      <h1 className="text-3xl font-header font-semi-bold py-8">
        <strong className="mx-1 p-1 px-2 bg-red text-white border rounded-md">Rails Chatroom api</strong>
      </h1>

      <p className="text-2xl">easy to use chatrooms all in one place.</p>

      <button className="my-8 bg-white text-lg p-2 px-4  border border-red rounded-md hover:text-white hover:bg-red rounded-md ease-in-out duration-300" onClick={() => window.location.href = localStorage.loged === "true" ? "/Documentation" : "/login"}>
        {localStorage.loged === "true" ? "Documentation" : "Login"}
      </button>


    </div>
  );
}

export default App;
