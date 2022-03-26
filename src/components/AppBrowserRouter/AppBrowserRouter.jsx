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
import Competition from "../Competition/competition";
import ReviewOtherPoints from "../ReviewOtherPoints/ReviewOtherPoints";
import AppLayout from "../AppLayout/AppLayout";
export default function AppBrowserRouter(){

    return(
        <BrowserRouter>
            <Routes>
                {/* <Route exact path="/login" component={Login} /> */}
                <Route exact path="/login" element={<Login/>}/>
                <Route exact path="/" element={ <AppLayout  color="#ffffff;" children={<Home/>}/>} />
                <Route exact path="/Competition" element={<AppLayout color="#ffffff;" children={<Competition/>}/>} />
                <Route exact path="/loading" element={<Loader/>} />
                <Route exact path= "/Students" element= {<AppLayout color="#ffffff;" children={<Students/>}/>}  />
                <Route exact path= "/Groups" element= {<AppLayout color="#ffffff;;" children={<Groups/>} /> }  />
                <Route exact path= "/Admins" element={ <AppLayout color="#ffffff;;" children={<Admins/>}/>}  />
                <Route exact path= "/Standards" element= {<AppLayout color="#ffffff;;" children={<Standards/>}/>}/>
                <Route exact path= "/Review-other-points" element= {<AppLayout color="#ffffff;;" children={<ReviewOtherPoints/>}/>}/>
                <Route exact path= "/StudentsPoints" element= { <AppLayout color="#ffffff;;" children={<StudentsPoints/>}/>} />

            </Routes>
        </BrowserRouter>
    );
}