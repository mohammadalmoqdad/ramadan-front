import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "../Login";
import Home from "../Home";
import Loader from "../Loader";
import Students from "../Students";
import Groups from "../Groups";
import Admins from "../Admins/Admins";
import Standards from "../Standards";
import StudentsPoints from "../studentsPoints";
import Competition from "../Competition";
import TopStudents from "../TopStudents";
import ExportPoints from "../ExportPoints";
import ReviewOtherPoints from "../ReviewOtherPoints";
import AppLayout from "../AppLayout";
export default function AppBrowserRouter(){

    return(
        <BrowserRouter>
            <Routes>
                {/* <Route exact path="/login" component={Login} /> */}
                <Route exact path="/login" element={<Login/>}/>
                <Route exact path="/" element={ <AppLayout color="#FFF;" children={<Home/>}/>} />
                <Route exact path="/Competition" element={<AppLayout color="#2980b9;" children={<Competition/>}/>} />
                <Route exact path="/TopStudents" element={<AppLayout color="#2980b9;" children={<TopStudents/>}/>} />
                <Route exact path="/loading" element={<Loader/>} />
                <Route exact path= "/Students" element= {<AppLayout color="#2980b9;" children={<Students/>}/>}  />
                <Route exact path= "/Groups" element= {<AppLayout color="#2980b9;" children={<Groups/>} /> }  />
                <Route exact path= "/Admins" element={ <AppLayout color="#2980b9;" children={<Admins/>}/>}  />
                <Route exact path= "/Standards" element= {<AppLayout color="#2980b9;" children={<Standards/>}/>}/>
                <Route exact path= "/Review-other-points" element= {<AppLayout color="#2980b9;" children={<ReviewOtherPoints/>}/>}/>
                <Route exact path= "/StudentsPoints" element= { <AppLayout color="#2980b9;" children={<StudentsPoints/>}/>} />
                <Route exact path= "/ExportPoints" element= { <AppLayout color="#2980b9;" children={<ExportPoints/>}/>} />

            </Routes>
        </BrowserRouter>
    );
}