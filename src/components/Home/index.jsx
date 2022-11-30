import React, { useEffect, useState } from "react";
import cookie from "react-cookies";
import { useNavigate } from "react-router-dom";
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
  Wird, StatisticItemBody
} from "./home.styles";

import {
  StatisticsContainer,
  Formm,
  H3Login,
  DivCenter
} from "../studentsPoints/StudentsPoints.styles";

import { retrieveGeneralStatus } from "../../services/competitionsServices";
import Loader from "../Loader";
import HomeBanner from "./HomeBanner";
import DaysSlider from "./DaysSlider";
import TopRanks from "./TopRanks";




function Home() {
  const [generalStatus, setGeneralStatus] = useState({});
  const [topDay, setTopDay] = useState({});
  const [topStudentLastDay, setTopStudentLastDay] = useState({});
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();


  useEffect(() => {
    if (!cookie.load("token")) {
      navigate("/login");
      return;
    }

    setLoading(true);
    retrieveGeneralStatus(
      (res) => {
        if (res && res.status === 200) {
          if (res?.data?.top_student_last_day) {
            setTopStudentLastDay(res.data.top_student_last_day);
          }
          if (res?.data?.top_ramadan_day) {
            setTopDay(res.data.top_ramadan_day);
          }
          if (res?.data?.students_count || res?.data?.ramadan_date) {
            setGeneralStatus({
              students_count: res.data.students_count,
              ramadan_date: res?.data?.ramadan_date
            })
          }
        }
        setLoading(false);
      }, (err) => {
        console.log("Failed to retrieve general status : ", err.data);
        setLoading(false);
      }
    );

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
      {/* <CarouselStatistics /> */}
      {/* <Img/> */}


      <HomeContainer>
        <Div>
          <HomeBanner />
          <DaysSlider/>
          <TopRanks/>

          {Object.keys(generalStatus).length > 0 &&
            <StatisticsSection>

              <StatisticsContainer>
                <Formm>

                  {topDay && Object.keys(topDay).length > 0 &&
                    <DivCenter>
                      <StatisticItemBody>أعلى مجموع نقاط من <br />أيام رمضان<Wird>{topDay.total_day}</Wird></StatisticItemBody>
                      <H3Login>{topDay.ramadan_record_date} رمضان </H3Login>
                    </DivCenter>
                  }


                  <DivCenter>
                    <StatisticItemBody>عدد طلبة <br />المسابقة<Wird>{generalStatus?.students_count}</Wird> </StatisticItemBody>
                    <H3Login>طالب</H3Login>
                  </DivCenter>
                </Formm>
                <Formm>

                  {topStudentLastDay && Object.keys(topStudentLastDay).length > 0
                    ?
                    <DivCenter>
                      <StatisticItemBody>المركز الأول لليوم<br /> السابق<Wird>{topStudentLastDay.first_name + " " + topStudentLastDay.last_name}</Wird> </StatisticItemBody>
                      <H3Login>مبارك</H3Login>
                    </DivCenter>
                    :
                    <DivCenter>
                      <StatisticItemBody>المركز الأول لليوم<br /> السابق<Wird>لا يوجد</Wird> </StatisticItemBody>
                      <H3Login>مبارك</H3Login>
                    </DivCenter>

                  }

                  <DivCenter>
                    <StatisticItemBody>التقويم <br />الرمضاني<Wird>{generalStatus?.ramadan_date}</Wird> </StatisticItemBody>
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
            <BorderBottom />
            <VideoSection />
          </IntroductionSection>

          {/* Third Section */}
          {/* <VideoSection></VideoSection> */}
        </Div>

      </HomeContainer>
    </>
  );
}

export default Home;