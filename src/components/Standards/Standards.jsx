import React, {useEffect, useState} from "react";
import AddStandardForm from "./AddStandardForm/AddStandardForm";
import EditStandardForm from "./EditStandardForm/EditStandardForm";
import AddSectionForm from "./AddSectionForm/AddSectionForm";
import EditSectionForm from "./EditSectionForm/EditSectionForm";
import {deleteSection, deleteStandard, retrieveSections, retrieveStandards} from "../../services/standardServices";
import Tabs from "./../shared/Tabs/Tabs";
import Sidebar from "../shared/Sidebar";
import Container from "./Standards.styles";
import Modal from "../shared/Modal/Modal";
import {Button, DropdownList, DropdownListItem, Span} from "../Admins/Admins.styles";
export default function Standards() {

    const [sections, setSections] = useState(null);
    const [standards, setStandards] = useState(null);
    const [openStandardModal, setOpenStandardModal] = useState(false);
    const [openSectionModal, setOpenSectionModal] = useState(false);
    const [standardIdToDelete, setStandardIdToDelete] = useState(null);
    const [sectionIdToDelete, setSectionIdToDelete] = useState(null);

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
                console.log("Failed to retrieve sections, ERROR: ", JSON.stringify(err.response.data));
            }
        );

    }, []);

    const handleOpenStandardModelChange = (e)=>{
        setStandardIdToDelete(e.target.value);
        setOpenStandardModal(true);
    };

    const handleOpenSectionModelChange = (e)=>{
        setSectionIdToDelete(e.target.value);
        setOpenSectionModal(true);
    };

    const deleteStandardFunction = () =>{
        deleteStandard(standardIdToDelete,(res)=>{
                if(res && res.status === 204){
                    console.log(`Standard with id: ${standardIdToDelete} has been deleted`);
                    setStandards([...standards.filter( standard => standard.id !== Number(standardIdToDelete))]);
                }
            }, (err)=>{
                console.log("Failed to delete standard: ", JSON.stringify(err.response.data));
            }
        );
        setOpenStandardModal(false);
    };

    const deleteSectionFunction = () =>{
        deleteSection(sectionIdToDelete,(res)=>{
                if(res && res.status === 204){
                    console.log(`Section with id: ${sectionIdToDelete} has been deleted`);
                    setSections(sections.filter( section => section.id !== Number(sectionIdToDelete)));
                }
            }, (err)=>{
                console.log("Failed to delete section: ", JSON.stringify(err.response.data));
            }
        );
        setOpenSectionModal(false);
    }


    return (
        <>
            { openSectionModal &&
                <Modal title="تأكيد الحذف" content="هل تريد حذف هذا القسم؟" deleteBtn="حذف" cancelBtn="إلغاء"
                       setOpenModal={setOpenSectionModal} deleteFunction={deleteSectionFunction} />
            }

            { openStandardModal &&
                <Modal title="تأكيد الحذف" content="هل تريد حذف هذا المعييار؟" deleteBtn="حذف" cancelBtn="إلغاء"
                       setOpenModal={setOpenStandardModal} deleteFunction={deleteStandardFunction} />
            }

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

                { standards && standards.length > 0 &&
                    <DropdownList className='DropdownList'>
                        <DropdownListItem  className="title"><Span>المعايير الحالية</Span></DropdownListItem>
                        {
                            standards.map((standard, index) => {
                                return (<DropdownListItem key={index}>
                                    <Button id="deleteBtn" onClick={handleOpenStandardModelChange} value={standard.id}>حذف</Button>
                                    <Span>{standard.label}</Span>
                                </DropdownListItem>)
                            })
                        }
                    </DropdownList>
                }

                { sections && sections.length > 0 &&
                    <DropdownList className='DropdownList'>
                        <DropdownListItem  className="title"><Span>الأقسام الحالية</Span></DropdownListItem>
                        {
                            sections.map((section, index) => {
                                return (<DropdownListItem key={index}>
                                    <Button id="deleteBtn" onClick={handleOpenSectionModelChange} value={section.id}>حذف</Button>
                                    <Span>{section.label}</Span>
                                </DropdownListItem>)
                            })
                        }
                    </DropdownList>
                }

                <Tabs
                    labels={['تعديل قسم','إضافة قسم','تعديل معيار','إضافة معيار']}
                    contents={[
                        <EditSectionForm sections={sections} setSections={setSections}/>,
                        <AddSectionForm sections={sections} setSections={setSections}/>,
                        <EditStandardForm  sections={sections} standards={standards} setStandards={setStandards} />,
                        <AddStandardForm sections={sections} standards={standards} setStandards={setStandards} />
                    ]}/>
                <Sidebar/>
            </Container>
        </>
    );
};