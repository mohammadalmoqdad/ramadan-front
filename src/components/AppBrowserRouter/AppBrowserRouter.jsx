import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "../Login";
import Home from "../Home";
import Loader from "../Loader";
import Students from "../Students/Students";
import Groups from "../Groups/Groups";
import Admins from "../Admins/Admins";
import Standards from "../Standards/Standards";
import StudentsPoints from "../studentsPoints/StudentsPoints";
import {useAdminContext} from "../../contexts/AdminContext";
export default function AppBrowserRouter(){

    const context = useAdminContext();
    return(
        <BrowserRouter>
            <Routes>
                {/* <Route exact path="/login" component={Login} /> */}
                <Route exact path="/login" element={<Login />}/>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/loading" element={<Loader />} />
                <Route exact path= "/Students" element= {<Students/>}  />
                <Route exact path= "/Groups" element= {<Groups/>}  />
                { Object.keys(context.getAdminInfo()).length > 0 && context.getAdminInfo().is_super_admin &&
                    <Route exact path= "/Admins" element= {<Admins/>}  />
                }
                <Route exact path= "/Standards" element= {<Standards/>}/>
                <Route exact path= "/StudentsPoints" element= {<StudentsPoints/>}/>

            </Routes>
        </BrowserRouter>
    );
}