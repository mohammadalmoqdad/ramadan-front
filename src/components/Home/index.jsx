import React, { useEffect, useState } from "react";
import cookie from "react-cookies";
import { useNavigate } from "react-router-dom";
import {
  HomeContainer,
  Div
} from "./home.styles";

import {retrieveTopMembers} from "../../services/competitionsServices";
import Loader from "../Loader";
import HomeBanner from "./HomeBanner";
import DaysSlider from "./DaysSlider";
import TopRanks from "./TopRanks";
import {useAdminContext} from "../../contexts/AdminContext";
import {retrieveStudents} from "../../services/studentsServices";

function Home() {
  const [loading, setLoading] = useState(false);
  const context = useAdminContext();
  const [students, setStudents] = useState([]);
  const [topMembers, setTopMembers] = useState([]);

  let navigate = useNavigate();

  useEffect(() => {
    if (!cookie.load("token")) {
      navigate("/login");
      return;
    }

    if(Object.keys(context.adminInfo).length === 0){
      context.getAdminInfo();
    }

    setLoading(true);

    retrieveTopMembers((res)=>{
      if(res && res.status === 200){
        setTopMembers(res.data);
      }
    },(err) => {
      console.log("Failed to retrieve top members : ", err.data);
    });

    retrieveStudents((res)=>{
      if(res && res.status === 200){
        setStudents(res.data.results);
        setLoading(false);
      }
    },(err) => {
      console.log("Failed to retrieve students : ", err.data);
      setLoading(false);
    });

  }, []);

  if (loading) {
    return (
      <main>
        <Loader />
      </main>
    );
  }

  return (
    <>
      <HomeContainer>
        <Div>
          <HomeBanner
              name={context.adminInfo?.person?.first_name?.length > 0
                  ? context.adminInfo.person.first_name + " " + context.adminInfo.person.last_name
                  : "Admin"}
              dayNumber={"12"}/>
          <DaysSlider />
          <TopRanks students={students} topMembers={topMembers}/>
        </Div>
      </HomeContainer>
    </>
  );
}

export default Home;
