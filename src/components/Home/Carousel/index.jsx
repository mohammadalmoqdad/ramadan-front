import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'
import {
    CarouselStyle,
} from "./CarouselStatistics.styles.js";
import {
    IntroductionSection,
    IntroductionDiv,
    WirdLogoInHome,
    IntroductionSectionDiv,
    WirdMinIntroduction,
    Introduction,
    BorderBottom
} from '../../shared/styles'
import WirdLogo from '../../../assets/Logo/WirdLogosvg.svg'

import CarouselPry from '../../../assets/Carousel/CarouselPry.svg'



export default function CarouselStatistics() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        // setIndex(selectedIndex);
    };

    return (
        <CarouselStyle>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={CarouselPry}
                        alt="First slide"
                    />
                    {/* <Carousel.Caption> */}
                    <IntroductionSection>
                        <Carousel.Caption>

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
                            <h3>منصة ورد</h3>
                            <p>أهلا بك في موقع مسؤول المسابقة في منصة ورد، في هذا المكان يمكنك متابعة تفاصيل المتسابقين، ولمزيد من
                                التفاصيل يرجى مشاهدة دليل الاستخدام من خلال الفيديو المرفق بالاسفل </p>
                        </Carousel.Caption>

                    </IntroductionSection>

                    {/* </Carousel.Caption> */}

                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={CarouselPry}
                        alt="First slide"
                    />
                    {/* <Carousel.Caption> */}
                    <IntroductionSection>
                        <Carousel.Caption>

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
                        </Carousel.Caption>

                    </IntroductionSection>
                    <h3>منصة ورد</h3>
                    <p>أهلا بك في موقع مسؤول المسابقة في منصة ورد، في هذا المكان يمكنك متابعة تفاصيل المتسابقين، ولمزيد من
                        التفاصيل يرجى مشاهدة دليل الاستخدام من خلال الفيديو المرفق بالاسفل </p>
                    {/* </Carousel.Caption> */}

                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={CarouselPry}
                        alt="First slide"
                    />
                    {/* <Carousel.Caption> */}
                    <IntroductionSection>
                        <Carousel.Caption>

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
                        </Carousel.Caption>

                    </IntroductionSection>
                    <h3>منصة ورد</h3>
                    <p>أهلا بك في موقع مسؤول المسابقة في منصة ورد، في هذا المكان يمكنك متابعة تفاصيل المتسابقين، ولمزيد من
                        التفاصيل يرجى مشاهدة دليل الاستخدام من خلال الفيديو المرفق بالاسفل </p>
                    {/* </Carousel.Caption> */}

                </Carousel.Item>

            </Carousel>
        </CarouselStyle>
    );
}