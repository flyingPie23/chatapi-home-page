

function Login() {
  const FormControl = (props) =>{
    return (
      <div id={props.form}>
        <label className="text-2xl font-header font-semibold" for={props.form}> {props.form} </label>
        <br className="mb-8"/>
        <input className="my-4 p-2 w-[100%] border border-red rounded-md bg-white" type={props.form} placeholder={`Enter ${props.form}`} name={props.form} required></input>
      </div>
    );

  }

  return (
    <div>
      <div className="my-2 p-8 mx-auto max-w-3xl ">
        <h1 className="text-2xl text-center font-header font-semi-bold py-8">
          You will need a <strong className="mx-1 p-1 bg-red text-white border rounded-md">TOKEN</strong> to access and use the api.
        </h1>
        <p className="text-center text-gray">
          Start by creating a profile here, then you will be given a Token. If you already have one, use those credentials.
        </p>

        <div className="py-10 mx-auto">
          <FormControl form="username"/>
          <FormControl form="password"/>

          <button className="mt-8 text-black border border-red hover:bg-red hover:text-white rounded-md p-3 ease-in-out duration-300">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
