import Settings from "@/pages/Settings"
import { Route, Routes } from "react-router-dom"

const SettingsRout = () => {
   return (
      <Routes>
         <Route path='/general' element={<Settings />} />
         <Route path='/Account' element={<Settings />} />
         <Route path='/Appearance' element={<Settings />} />
         <Route path='/Notification' element={<Settings />} />
         <Route path='/recycle' element={<Settings />} />
         <Route path='/theme' element={<Settings />} />
         <Route path='/pro' element={<Settings />} />
      </Routes>
   )
}

export default SettingsRout;