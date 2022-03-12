import "./App.css";
import Login from "./components/Login";
import AuthProvider from "./contexts/AdminContext";
import Home from "./components/Home";
import Loder from "components/Loader";
import Groups from "components/Groups/Groups";
import Standards from './components/Standards/Standards'
import Admins from './components/Admins/Admins'
import StudentsPoints from './components/studentsPoints/StudentsPoints'
import { Route, BrowserRouter, Routes} from "react-router-dom";
import React from "react";
import SetPasswordStudents from "components/setPasswordStudent/SetPasswordStudents";
function App() {
  // const [test, isTest] = useState(false);
  return (

    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            {/* <Route exact path="/login" component={Login} /> */}
            <Route exact path="/login" element={<Login />}/>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/loading" element={<Loder />} />
            <Route exact path= "/set-student-password" element= {<SetPasswordStudents/>}  />
            <Route exact path= "/Groups" element= {<Groups/>}  />
            <Route exact path= "/Admins" element= {<Admins/>}  />
            <Route exact path= "/Standards" element= {<Standards/>}/>
            <Route exact path= "/StudentsPoints" element= {<StudentsPoints/>}/>

          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
