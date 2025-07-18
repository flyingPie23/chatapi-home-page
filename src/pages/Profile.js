
function Profile() {
  return (
    <div>
      <div className="my-2 p-8 mx-auto max-w-4xl ">
        <h1 className="text-4xl font-header font-semi-bold py-8">
          Hello <strong className="mx-1 p-1 px-2 bg-red text-white border rounded-md">@ {localStorage.user} </strong>
        </h1>

        <hr/>

        <p className="my-2 text-2xl">
          Heres your <strong>Api key</strong>, it will be required to access all endpoints make sure not to share it around.
        </p>

        <div className="flex justify-between align-center p-4 my-20 bg-white border border-red rounded-md ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            width="24"
            height="24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 15v2m6-6V9a6 6 0 10-12 0v2m-2 0h16v10a2 2 0 01-2 2H6a2 2 0 01-2-2V11z"
            />
          </svg>

          <h1 className="text-[18px] font-semibold font-header">{localStorage.jwt}</h1>

          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              width="24"
              height="24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 2h6a2 2 0 012 2v1h1a2 2 0 012 2v13a2 2 0 01-2 2H6a2 2 0 01-2-2V7a2 2 0 012-2h1V4a2 2 0 012-2z"
              />
            </svg>
          </button>

        </div>
      </div>
    </div>
  );
}
 export default Profile;
