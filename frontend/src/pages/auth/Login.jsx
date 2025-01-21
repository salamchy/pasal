import { useState } from "react"
import { Link } from "react-router-dom"
import Form from "../../components/common/Form";
import { loginFormControls } from "../../config";

const initialState = {
  email: "",
  password: ""
}

const Login = () => {

  const [formData, setFormData] = useState(initialState);

  function onSubmit() {

  }

  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Sign in to your Account</h1>
        <p>Don't have an Account? <Link to="/auth/register" className="font-medium ml-2 text-primary hover:underline">Register</Link></p>
      </div>

      <Form formControls={loginFormControls} buttonText={"SignIn"} formData={formData} setFormData={setFormData} onSubmit={onsubmit} />
    </div>
  )
}
export default Login