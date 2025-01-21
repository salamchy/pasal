import { useState } from "react"
import { Link } from "react-router-dom"
import Form from "../../components/common/Form";
import { registerFormControls } from "../../config";

const initialState = {
  userName: "",
  email: "",
  password: ""
}

const Register = () => {

  const [formData, setFormData] = useState(initialState);

  function onSubmit() {

  }

  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Create new Account</h1>
        <p>Already have an Account? <Link to="/auth/login" className="font-medium ml-2 text-primary hover:underline">Login</Link></p>
      </div>

      <Form formControls={registerFormControls} buttonText={"SignUp"} formData={formData} setFormData={setFormData} onSubmit={onsubmit} />
    </div>
  )
}
export default Register