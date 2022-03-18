import React, {useEffect, useState} from "react";
import AddStandardForm from "./AddStandardForm/AddStandardForm";
import EditStandardForm from "./EditStandardForm/EditStandardForm";
import AddSectionForm from "./AddSectionForm/AddSectionForm";
import EditSectionForm from "./EditSectionForm/EditSectionForm";
import {deleteSection, deleteStandard, retrieveSections, retrieveStandards} from "../../services/standardServices";
import Tabs from "./../shared/Tabs/Tabs";
import Sidebar from "../shared/Sidebar";
import Container, {StandardsDropDownList} from "./Standards.styles";
import Modal from "../shared/Modal/Modal";
import {Button, DropdownListItem, Span} from "../Admins/Admins.styles";
import {useAdminContext} from "../../contexts/AdminContext";
import Navbar from "../shared/Navbar";
export default function Standards() {

    const [sections, setSections] = useState([]);
    const [standards, setStandards] = useState([]);
    const [openStandardModal, setOpenStandardModal] = useState(false);
    const [openSectionModal, setOpenSectionModal] = useState(false);
    const [standardIdToDelete, setStandardIdToDelete] = useState(null);
    const [sectionIdToDelete, setSectionIdToDelete] = useState(null);
    const [hasPermission, setPermission] = useState(false);
    const context = useAdminContext();

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

    useEffect(() => {
        setPermission(Object.keys(context.getAdminInfo()).length > 0 && context.getAdminInfo().is_super_admin);
    }, [context.adminInfo]);

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

    const getLabels = (standardsArray, isSuperAdmin, sectionsArray)=>{
        let labels = [];

        if(isSuperAdmin && sectionsArray && sectionsArray.length > 0){
            labels.push('الأقسام الحالية');
        }
        if(standardsArray && standardsArray.length > 0){
            labels.push('المعايير الحالية');
        }
        return labels;
    }
    const getContents= (standardsArray, isSuperAdmin, sectionsArray)=>{
        let contents = [];

        if(isSuperAdmin && sectionsArray && sectionsArray.length > 0){
            contents.push(
                <StandardsDropDownList className='DropdownList'>
                    {
                        sectionsArray.map((section, index) => {
                            return (<DropdownListItem key={index}>
                                <Button id="deleteBtn" onClick={handleOpenSectionModelChange} value={section.id}>حذف</Button>
                                <Span>{section.label}</Span>
                            </DropdownListItem>)
                        })
                    }
                </StandardsDropDownList>
            )
        }
        if(standardsArray && standardsArray.length > 0){
            contents.push(
                <StandardsDropDownList className='DropdownList'>
                    {
                        standardsArray.map((standard, index) => {
                            return (<DropdownListItem key={index}>
                                { hasPermission
                                    ?
                                    <>
                                        <Button id="deleteBtn" onClick={handleOpenStandardModelChange} value={standard.id}>حذف</Button>
                                        <Span>{standard.label}</Span>
                                    </>
                                    :
                                    <Span style={{width:'100%'}}>{standard.label}</Span>
                                }
                            </DropdownListItem>)
                        })
                    }
                </StandardsDropDownList>
            );
        }
        return contents;
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
                <div style={{width:'100%'}}>
                    <Navbar/>

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

                    <Tabs labels={getLabels(standards, hasPermission, sections)}
                          contents={getContents(standards, hasPermission, sections)} />

                    { hasPermission &&
                        <>
                            <Tabs
                                labels={['تعديل قسم','إضافة قسم','تعديل معيار','إضافة معيار']}
                                contents={[
                                    <EditSectionForm sections={sections} setSections={setSections}/>,
                                    <AddSectionForm sections={sections} setSections={setSections}/>,
                                    <EditStandardForm  sections={sections} standards={standards} setStandards={setStandards} />,
                                    <AddStandardForm sections={sections} standards={standards} setStandards={setStandards} />
                                ]}
                                toggleState={3}/>
                        </>
                    }
                </div>
                <Sidebar/>
            </Container>
        </>
    );
};