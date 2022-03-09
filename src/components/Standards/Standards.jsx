import {useEffect, useState} from "react";
import AddStandardForm from "./AddStandardForm/AddStandardForm";
import EditStandardForm from "./EditStandardForm/EditStandardForm";
import AddSectionForm from "./AddSectionForm/AddSectionForm";
import EditSectionForm from "./EditSectionForm/EditSectionForm";
import {retrieveSections, retrieveStandards} from "../../services/standardServices";
import Tabs from "./../shared/Tabs/Tabs";
import Sidebar from "../shared/Sidebar";
import Container from "./Standards.styles";
export default function Standards() {

    const [sections, setSections] = useState(null);
    const [standards, setStandards] = useState(null);

    useEffect(() => {

        retrieveStandards(
            (res) => {
                setStandards(res.data);
            },
            (err) => {
                console.log("Failed to retrieve standards, ERROR: ", JSON.stringify(err.response.data));
            }
        );

        retrieveSections((res) => {
                setSections(res.data);
            },
            (err) => {
                console.log("Failed to retrieve standards, ERROR: ", JSON.stringify(err.response.data));
            }
        );

    }, []);




    return (
        <Container>

            {   // TODO: We need to add images for both of other and checkbox types, for now
                //       there is just an image for numeric type.

                // <H3Login>نوع النموذج الذي تم اختياره</H3Login>
                // <Frame>
                //     <Framephone>
                //         <Imgtype src={typephoto + '.png'} alt=""/>
                //         {/* <Imgtype src="type2.png" alt="" /> */}
                //
                //     </Framephone>
                // </Frame>
            }

            <Tabs
                labels={['تعديل قسم','إضافة قسم','تعديل معيار','إضافة معيار']}
                contents={[
                    <EditSectionForm sections={sections}/>,
                    <AddSectionForm/>,
                    <EditStandardForm  sections={sections} standards={standards} />,
                    <AddStandardForm sections={sections} />
                ]}/>
            <Sidebar/>
        </Container>
    );
};