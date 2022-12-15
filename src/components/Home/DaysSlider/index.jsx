import React from "react";

import LeftArrowIcon from "../../../assets/icons/Home/LeftArrow.svg";
import RightArrowIcon from "../../../assets/icons/Home/RightArrow.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import DaySlider, {
  MyOngoingContest,
  DaySliderGroup,
  RightLeftArrow,
  AllDaysSlider,
  VictorLeft,
  VictorRight,
  DayMonthFuture,
  DayOfThMonth,
  TheMonthSlider,
  TodayDayMonth,
  TodayOfThMonth,
  TodayTheMonthSlider,
  LiveTodaySlider,
  TodayOfThMonthLive,
} from "./DaysSlider.styles";

function DaysSlider() {
  return (
    <>
      <DaySlider>
        <MyOngoingContest>My Ongoing Contest</MyOngoingContest>

        <DaySliderGroup>
          <RightLeftArrow>
            <VictorLeft src={LeftArrowIcon} Alt="" />
          </RightLeftArrow>

          <AllDaysSlider>
            {/* https://swiperjs.com/react */}
            {/* التصميم جاهز واحد للايام السالبقة وواحد لليوم الحالي وواحد للايام القادمة
          بحتاج لوجك اذا حد شاف الكود وعنده فكرة كيف اعمله بكون كثير شكرا  */}
            <Swiper
              style={{ width: "auto" }}
              spaceBetween={1}
              slidesPerView={5}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide style={{ width: "auto" }}>
                <TodayDayMonth>
                  <TodayOfThMonth>12</TodayOfThMonth>
                  <TodayTheMonthSlider>Ramadan</TodayTheMonthSlider>
                </TodayDayMonth>
              </SwiperSlide>

              <SwiperSlide style={{ width: "auto" }}>
                <TodayDayMonth>
                  <TodayOfThMonth>13</TodayOfThMonth>
                  <TodayTheMonthSlider>Ramadan</TodayTheMonthSlider>
                </TodayDayMonth>
              </SwiperSlide>

              <SwiperSlide style={{ width: "auto" }}>
                <TodayDayMonth>
                  <TodayOfThMonthLive>
                    <TodayOfThMonth>14</TodayOfThMonth>
                    <LiveTodaySlider />
                  </TodayOfThMonthLive>
                  <TodayTheMonthSlider>Ramadan</TodayTheMonthSlider>
                </TodayDayMonth>
              </SwiperSlide>

              <SwiperSlide style={{ width: "auto" }}>
                <DayMonthFuture>
                  <DayOfThMonth>15</DayOfThMonth>
                  <TheMonthSlider>Ramadan</TheMonthSlider>
                </DayMonthFuture>
              </SwiperSlide>

              <SwiperSlide style={{ width: "auto" }}>
                <DayMonthFuture>
                  <DayOfThMonth>16</DayOfThMonth>
                  <TheMonthSlider>Ramadan</TheMonthSlider>
                </DayMonthFuture>
              </SwiperSlide>

              <SwiperSlide style={{ width: "auto" }}>
                <DayMonthFuture>
                  <DayOfThMonth>17</DayOfThMonth>
                  <TheMonthSlider>Ramadan</TheMonthSlider>
                </DayMonthFuture>
              </SwiperSlide>

              <SwiperSlide style={{ width: "auto" }}>
                <DayMonthFuture>
                  <DayOfThMonth>18</DayOfThMonth>
                  <TheMonthSlider>Ramadan</TheMonthSlider>
                </DayMonthFuture>
              </SwiperSlide>

              <SwiperSlide style={{ width: "auto" }}>
                <DayMonthFuture>
                  <DayOfThMonth>19</DayOfThMonth>
                  <TheMonthSlider>Ramadan</TheMonthSlider>
                </DayMonthFuture>
              </SwiperSlide>
            </Swiper>

            {/* ------------------------------------------------------------- */}

            {/* ------------------------------------------------------------- */}
          </AllDaysSlider>

          <RightLeftArrow>
            <VictorRight src={RightArrowIcon} Alt="" />
          </RightLeftArrow>
        </DaySliderGroup>
      </DaySlider>
    </>
  );
}
export default DaysSlider;
