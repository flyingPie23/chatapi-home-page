function Nav() {
  return (
    <div className="nav flex justify-between p-4">
      <h1 className="text-red mx-3 text-2xl font-bold font-header">
        Rails Chatroom Api
      </h1>

      <div className="btn-group flex justify-between">
        <button className="mx-3  hover:underline underline-offset-8 decoration-red"> documentation </button>
        <button className="mx-3  hover:underline underline-offset-8 decoration-red"> login </button>
      </div>
    </div>
  );
}

export default Nav;
