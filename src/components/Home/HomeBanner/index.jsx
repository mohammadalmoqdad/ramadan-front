import React from 'react'

import Banner, {
  CirclesStyle,
  FirstCircle,
  SecondCircle,
} from "./homeBanner.styles";

function HomeBanner() {
  return (
    <Banner>
      <CirclesStyle>
        <SecondCircle></SecondCircle>
        <FirstCircle></FirstCircle>
      </CirclesStyle>
    </Banner>
  )
}
export default HomeBanner;