

function Nav() {
  return (
    <div className="nav flex justify-between p-4">
      <button className="text-red mx-3 text-2xl font-bold font-header" onClick={() => window.location.href = "/"}>
      Rails Chatroom Api
      </button>

      <div className="btn-group flex justify-between">
        <button className="mx-3  hover:underline underline-offset-8 decoration-red" onClick={() => window.location.href = "/documentation"}>
          documentation
        </button>

        <button className="mx-3  hover:underline underline-offset-8 decoration-red" onClick={() => window.location.href = "/login"}>
          login
        </button>
      </div>
    </div>
    );
}

export default Nav;
