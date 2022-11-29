import React from 'react'
import StudentBannerimg1 from '../../../assets/icons/studentImgAtBanner/studentBanner3.svg'
import StudentBannerimg2 from '../../../assets/icons/studentImgAtBanner/studentBanner2.svg'

import Banner, {
  CirclesStyle,
  FirstCircle,
  SecondCircle,
  ContentAndImgs,
  StudentBanner,
  ContentBanner,
  StudentBanner1,
  StudentBanner2,
  TitleContent,
  WelcomeName,
  DayContent,
  ResultButton,
  ButtonTitle,
} from "./homeBanner.styles";

function HomeBanner() {
  return (
    <Banner>
      <CirclesStyle>
        <SecondCircle />
        <FirstCircle />
      </CirclesStyle>

      <ContentAndImgs>
        <ContentBanner>
          <TitleContent>
            <WelcomeName>Welcome, Jamal Mahmoud!</WelcomeName>
            <DayContent>Today is 12 Ramadan</DayContent>
          </TitleContent>

          <ResultButton>
            <ButtonTitle>See Contest Result</ButtonTitle>
          </ResultButton>
        </ContentBanner>


        <StudentBanner>
          <StudentBanner2 src={StudentBannerimg2} Alt="" />
          <StudentBanner1 src={StudentBannerimg1} Alt="" />
        </StudentBanner>
      </ContentAndImgs>

    </Banner>
  )
}
export default HomeBanner;