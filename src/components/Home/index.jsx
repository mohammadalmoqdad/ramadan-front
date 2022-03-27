import React, {useContext, useEffect, useState} from "react";
import cookie from "react-cookies";
import { Redirect, Route, useNavigate } from "react-router-dom";
import CarouselStatistics from "./Carousel/CarouselStatistics.jsx"
import Img from "./Img/Img.jsx"

import WirdLogo from '../../assets/Logo/WirdLogosvg.svg'

import {
  HomeContainer,
  StatisticsSection,
  IntroductionSection,
  VideoSection,
  Div,
  IntroductionSectionDiv,
  WirdLogoInHome,
  WirdMinIntroduction,
  BorderBottom,
  IntroductionDiv,
  Introduction,
  Wird
} from "./home.styles";
import { StatisticsContainer, Formm, H1Login, H3Login, DivCenter } from "../studentsPoints/StudentsPoints.styles"
import {useAdminContext} from "../../contexts/AdminContext";
import {retrieveGeneralStatus} from "../../services/competitionsServices";

function Home(props) {
  const [generalStatus, setGeneralStatus] = useState({});
  const [topDay, setTopDay] = useState({});
  const [topStudentLastDay, setTopStudentLastDay] = useState({});
  const context = useAdminContext();
  let navigate = useNavigate();


  useEffect(() => {
    console.log("inside the useeffect");
    if (!cookie.load("token")) {
      navigate("/login");
      console.log("not logged in ");
      return;
    }

    retrieveGeneralStatus(
        (res)=>{
          if(res && res.status === 200){
            setGeneralStatus(res.data);
          }
        }, (err)=>{
          console.log("Failed to retrieve general status : ",err.data);
        }
    );

  }, []);
  console.log("inside the Home", cookie.load("token"));

  return (
    <>
      {/* <CarouselStatistics /> */}
      {/* <Img/> */}


      <HomeContainer>

        <Div>
          { Object.keys(generalStatus).length > 0 &&
              <StatisticsSection>

                <StatisticsContainer>
                  <Formm>
                    <DivCenter>
                      <H1Login>أعلى مجموع نقاط من <br/>أيام رمضان<Wird>{generalStatus.top_ramadan_day?.total_day}</Wird></H1Login>
                      <H3Login>{generalStatus.top_ramadan_day?.ramadan_record_date} رمضان </H3Login>
                    </DivCenter>

                    <DivCenter>
                      <H1Login>عدد طلبة <br/>المسابقة<Wird>{generalStatus?.students_count}</Wird> </H1Login>
                      <H3Login>طالب</H3Login>
                    </DivCenter>
                  </Formm>
                  <Formm>
                    <DivCenter>
                      <H1Login>المركز الأول لليوم<br/> السابق<Wird>{generalStatus?.top_student_last_day != null ? generalStatus.top_student_last_day : 'لا يوجد'}</Wird> </H1Login>
                      <H3Login>مبارك</H3Login>
                    </DivCenter>

                    <DivCenter>
                      <H1Login>التقويم <br/>الرمضاني<Wird>{generalStatus?.ramadan_date}</Wird> </H1Login>
                      <H3Login>اللهم تقبل</H3Login>
                    </DivCenter>
                  </Formm>
                </StatisticsContainer>

              </StatisticsSection>
          }

          {/* Second Section  */}
          <IntroductionSection>
            <IntroductionDiv>
              <WirdLogoInHome >
                <img src={WirdLogo} alt="" width='200' />
              </WirdLogoInHome>

              <IntroductionSectionDiv>
                <WirdMinIntroduction>منصة ورد </WirdMinIntroduction>
                <Introduction>أهلا بك في موقع مسؤول المسابقة في منصة ورد، في هذا المكان يمكنك متابعة تفاصيل المتسابقين، ولمزيد من
                  التفاصيل يرجى مشاهدة دليل الاستخدام من خلال الفيديو المرفق بالاسفل </Introduction>
              </IntroductionSectionDiv>
            </IntroductionDiv>
            <BorderBottom></BorderBottom>
            <VideoSection></VideoSection>
          </IntroductionSection>

          {/* Third Section */}
          {/* <VideoSection></VideoSection> */}
        </Div>

      </HomeContainer>
    </>
  );
}

export default Home;