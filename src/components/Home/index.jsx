import React, { useContext, useEffect, useLayoutEffect } from "react";
import cookie from "react-cookies";
import { Redirect, Route, useNavigate } from "react-router-dom";
import Sidebar from "components/shared/Sidebar";
import {
  HomeContainer,
  StatisticsSection,
  StatisticsContainer,
  StatisticsNumber,
  StatisticsTitle,
  StatiticsNote,
  IntroductionSection,
  VideoSection,
} from "./home.styles";
import { AdminContext } from "../../contexts/AdminContext";

function Home(props) {
  const context = useContext(AdminContext);
  let navigate = useNavigate();
  useEffect(() => {
    console.log("inside the useeffect");
    if (!cookie.load("token")) {
      navigate("/login");
      console.log("not logged in ");
    }
  }, []);
  console.log("inside the Home", cookie.load("token"));

  return (

    <HomeContainer>
      <Sidebar />
      <div>
        <StatisticsSection>
          <StatisticsContainer>
            <StatisticsNumber>25</StatisticsNumber>
            <StatisticsTitle>طالب</StatisticsTitle>
            <StatiticsNote>عدد طلبة المسابقة</StatiticsNote>
          </StatisticsContainer>

          <StatisticsContainer>
            <StatisticsNumber>1400</StatisticsNumber>
            <StatisticsTitle>صفحة</StatisticsTitle>
            <StatiticsNote>عدد الصفحات المقروءة</StatiticsNote>
          </StatisticsContainer>

          <StatisticsContainer>
            <StatisticsNumber>1400</StatisticsNumber>
            <StatisticsTitle>رمضان</StatisticsTitle>
            <StatiticsNote>يوم</StatiticsNote>
          </StatisticsContainer>

          <StatisticsContainer>
            <StatisticsNumber>25</StatisticsNumber>
            <StatisticsTitle>المكز الأول</StatisticsTitle>
            <StatiticsNote>عدد طلبة المسابقة</StatiticsNote>
          </StatisticsContainer>
        </StatisticsSection>

        {/* Second Section */}
        <IntroductionSection></IntroductionSection>

        {/* Third Section */}
        <VideoSection></VideoSection>
      </div>
      <button
        onClick={() => {
          cookie.remove("token");
          navigate("/login");
          context.setIsLogdedIn(false);
        }}
      >
        Logout
      </button>
    </HomeContainer>

  );
}

export default Home;
