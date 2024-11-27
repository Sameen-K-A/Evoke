import SignInForm from "@/components/auth/Login";
import OtpForm from "@/components/auth/otp";
import RegisterForm from "@/components/auth/Register";
import { Route, Routes } from "react-router-dom"

const AuthRout = () => {
   return (
      <Routes>
        <Route path='/login' element={<SignInForm />} />
        <Route path='/register' element={<RegisterForm />} />
        <Route path='/otp' element={<OtpForm />} />
      </Routes>
   )
}

export default AuthRout;