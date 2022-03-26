import React, {useEffect, useState} from "react";
import AddStandardForm from "./AddStandardForm/AddStandardForm";
import EditStandardForm from "./EditStandardForm/EditStandardForm";
import AddSectionForm from "./AddSectionForm/AddSectionForm";
import EditSectionForm from "./EditSectionForm/EditSectionForm";
import {deleteSection, deleteStandard, retrieveSections, retrieveStandards} from "../../services/standardServices";
import Tabs from "./../shared/Tabs/Tabs";
import Container, {StandardsDropDownList} from "./Standards.styles";
import Modal from "../shared/Modal/Modal";
import {Button, DropdownListItem, Span} from "../Admins/Admins.styles";
import {useAdminContext} from "../../contexts/AdminContext";
import {H5} from "../Students/setPasswordStudent/SetPasswordStudent.styles";
import cookie from "react-cookies";
import {useNavigate} from "react-router-dom";
export default function Standards() {

    const [sections, setSections] = useState([]);
    const [standards, setStandards] = useState([]);
    const [openStandardModal, setOpenStandardModal] = useState(false);
    const [openSectionModal, setOpenSectionModal] = useState(false);
    const [standardIdToDelete, setStandardIdToDelete] = useState(null);
    const [sectionIdToDelete, setSectionIdToDelete] = useState(null);
    const [hasPermission, setPermission] = useState(false);
    const [labels, setLabels] = useState([]);
    const [currentLabels, setCurrentLabels] = useState([]);
    const [contents, setContents] = useState([]);
    const [currentContents, setCurrentContents] = useState([]);
    const context = useAdminContext();
    let navigate = useNavigate();

    useEffect(() => {

        if (!cookie.load("token")) {
            navigate("/login", {state:{redirectTo: "/Standards"}});
        }

        if(Object.keys(context.adminInfo).length > 0){
            setPermission( context.adminInfo.is_super_admin);
        }else{
            setTimeout(() => {
                if(Object.keys(context.adminInfo).length === 0){
                    // permission will be updated once context.adminInfo is updated.
                    context.getAdminInfo();
                }
            }, 1000);
        }

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
        setPermission(Object.keys(context.adminInfo).length > 0 && context.adminInfo.is_super_admin);
    }, [context.adminInfo]);


    useEffect(()=>{
        let labelsArray = [];
        let contentsArray = [];
        let currentLabelsArray = [];
        let currentContentsArray = [];

        if(hasPermission){
            if(sections && sections.length > 0){
                labelsArray.push('تعديل قسم');
                contentsArray.push(<EditSectionForm sections={sections} setSections={setSections}/>);
            }
            labelsArray.push('إضافة قسم');
            contentsArray.push(<AddSectionForm sections={sections} setSections={setSections}/>);
            if(standards && standards.length > 0){
                labelsArray.push('تعديل معييار');
                contentsArray.push(<EditStandardForm  sections={sections} standards={standards} setStandards={setStandards} />);
            }
            labelsArray.push('إضافة معييار');
            contentsArray.push(<AddStandardForm sections={sections} standards={standards} setStandards={setStandards} />);
        }


        if(sections && sections.length > 0){
            currentLabelsArray.push('الأقسام الحالية');
            currentContentsArray.push(
                <StandardsDropDownList className='DropdownList'>
                {
                    sections.map((section, index) => {
                        return (<DropdownListItem key={index}>
                            { hasPermission ?
                                <>
                                    <Button id="deleteBtn" onClick={handleOpenSectionModelChange} value={section.id}>حذف</Button>
                                    <Span>{section.label}</Span>
                                </>
                            :
                                <Span style={{width:'100%'}}>{section.label}</Span>

                            }
                        </DropdownListItem>)
                    })
                }
            </StandardsDropDownList>);
        }

        if(standards && standards.length > 0){
            currentLabelsArray.push('المعايير الحالية');
            currentContentsArray.push(
                <StandardsDropDownList className='DropdownList'>
                {
                    standards.map((standard, index) => {
                        return (<DropdownListItem key={index}>
                            { hasPermission?
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
            </StandardsDropDownList>);
        }

        setCurrentLabels(currentLabelsArray);
        setCurrentContents(currentContentsArray);
        setLabels(labelsArray);
        setContents(contentsArray);

    },[sections, standards, hasPermission]);

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

                { currentLabels.length === 0 && labels.length === 0 &&
                    <Tabs labels={['المعايير']} contents={[ <H5>لا يوجد معايير</H5>]} />

                }
                <Tabs labels={currentLabels} contents={currentContents} contentClass=" no-padding" />

                <Tabs labels={labels} contents={contents} />
            </Container>
        </>
    );
};