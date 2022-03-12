import React, { useContext, useEffect } from "react";
import cookie from "react-cookies";
import { Redirect, Route, useNavigate } from "react-router-dom";
import Sidebar from "components/shared/Sidebar";
import {
  HomeContainer,
  StatisticsSection,
  IntroductionSection,
  VideoSection,
} from "./home.styles";
import { StatisticsContainer, Formm, H1Login, H3Login, DivCenter, Wird } from "../studentsPoints/StudentsPoints.styles"
import Navbar from '../shared/Navbar/'
import {useAdminContext} from "../../contexts/AdminContext";

function Home(props) {
  const context = useAdminContext();
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
      <div style={{width:'100%'}}>
      <Navbar/>
        <StatisticsSection>

          <StatisticsContainer>
            <Formm>
              <DivCenter>
                <H1Login>عدد الصفحات المقروءة<Wird>200</Wird></H1Login>
                <H3Login>صفحة قران</H3Login>
              </DivCenter>

              <DivCenter>
                <H1Login>عدد طلبة المسابقة<Wird>25</Wird> </H1Login>
                <H3Login>طالب</H3Login>
              </DivCenter>
            </Formm>
            <Formm>
              <DivCenter>
                <H1Login>المركز الأول لليوم السابق<Wird>أنس القاضي</Wird> </H1Login>
                <H3Login>مبارك</H3Login>
              </DivCenter>

              <DivCenter>
                <H1Login>التقويم الرمضاني<Wird>1</Wird> </H1Login>
                <H3Login>اللهم تقبل</H3Login>
              </DivCenter>
            </Formm>
          </StatisticsContainer>

        </StatisticsSection>

        {/* Second Section */}
        <IntroductionSection></IntroductionSection>

        {/* Third Section */}
        <VideoSection></VideoSection>
      </div>
      
    </HomeContainer>

  );
}

export default Home;
