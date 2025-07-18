

function Nav(props) {
  const logout = () => {
    localStorage.setItem("loged","false")
    localStorage.removeItem("jwt")
    localStorage.removeItem("user")
    window.location.href = "/"

  }

  return (
    <div className="nav flex justify-between p-4">
      <button className="text-red mx-3 text-2xl font-bold font-header" onClick={() => window.location.href = "/"}>
      Rails Chatroom Api
      </button>

      <div className="btn-group flex justify-between">
      <button className="mx-3  hover:underline underline-offset-8 decoration-red" onClick={() => window.location.href = localStorage.loged === "true" ? "/Documentation" : "/login"}>
        Documentation
      </button>

      {localStorage.loged === "true" && (
        <button className="mx-3  hover:underline underline-offset-8 decoration-red" onClick={logout}>
        Logout
        </button>
      )}

      <button className="mx-3  hover:underline underline-offset-8 decoration-red" onClick={() => window.location.href = localStorage.loged === "true" ? "/profile" : "/login"}>
        {localStorage.loged === "true" ? "Profile" : "Login"}
      </button>

      </div>
    </div>
    );
}

export default Nav;
