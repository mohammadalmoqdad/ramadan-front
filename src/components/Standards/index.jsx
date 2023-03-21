import React, { useEffect, useState } from "react";
import AddStandardForm from "./AddStandardForm";
import EditStandardForm from "./EditStandardForm";
import AddSectionForm from "./AddSectionForm";
import EditSectionForm from "./EditSectionForm";
import {
  deleteSection,
  deleteStandard,
  // retrieveSections,
  // retrieveStandards,
} from "../../services/standardServices";
import Tabs from "../shared/Tabs";
import Container, { StandardsDropDownList } from "./Standards.styles";
import Modal from "../shared/Modal";
import {
  Button,
  DivPass,
  DropdownListItem,
  Span,
} from "../Admins/Admins.styles";
import { useAdminContext } from "../../contexts/AdminContext";
import { H5 } from "../Students/setPasswordStudent/SetPasswordStudent.styles";
import cookie from "react-cookies";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader";
import { isSuperAdmin } from "../../util/ContestPeople_Role";

export default function Standards() {
  const [sections, setSections] = useState([]);
  const [standards, setStandards] = useState([]);
  const [openStandardModal, setOpenStandardModal] = useState(false);
  const [openSectionModal, setOpenSectionModal] = useState(false);
  const [standardIdToDelete, setStandardIdToDelete] = useState("");
  const [sectionIdToDelete, setSectionIdToDelete] = useState("");
  const [hasPermission, setPermission] = useState(false);
  const [labels, setLabels] = useState([]);
  const [currentLabels, setCurrentLabels] = useState([]);
  const [contents, setContents] = useState([]);
  const [currentContents, setCurrentContents] = useState([]);
  const [showStandardDeleteFailedMsg, setShowStandardDeleteFailedMsg] =
    useState(false);
  const [showSectionDeleteFailedMsg, setShowSectionDeleteFailedMsg] =
    useState(false);
  const [loading, setLoading] = useState(false);

  const context = useAdminContext();
  let navigate = useNavigate();

  useEffect(() => {
    if (!cookie.load("token")) {
      navigate("/login", { state: { redirectTo: "/Standards" } });
    }

    setLoading(true);
    if (Object.keys(context.adminInfo).length > 0) {
      setPermission(isSuperAdmin(context));
    } else {
      setTimeout(() => {
        if (Object.keys(context.adminInfo).length === 0) {
          // permission will be updated once context.adminInfo is updated.
          context.getAdminInfo();
        }
      }, 1000);
    }

    // retrieveStandards(
    //   (res) => {
    //     setStandards(res.data.results);
    //     setLoading(false);
    //   },
    //   (err) => {
    //     console.log(
    //       "Failed to retrieve standards, ERROR: ",
    //       JSON.stringify(err.response.data)
    //     );
    //     setLoading(false);
    //   }
    // );
    //
    // retrieveSections(
    //   (res) => {
    //     setSections(res.data);
    //   },
    //   (err) => {
    //     console.log(
    //       "Failed to retrieve sections, ERROR: ",
    //       JSON.stringify(err.response.data)
    //     );
    //   }
    // );
  }, []);

  useEffect(() => {
    setPermission(
      Object.keys(context.adminInfo).length > 0 && isSuperAdmin(context)
    );
  }, [context.adminInfo]);

  useEffect(() => {
    let labelsArray = [];
    let contentsArray = [];
    let currentLabelsArray = [];
    let currentContentsArray = [];

    if (hasPermission) {
      if (sections && sections.length > 0) {
        labelsArray.push("تعديل قسم");
        contentsArray.push(
          <EditSectionForm sections={sections} setSections={setSections} />
        );
      }
      labelsArray.push("إضافة قسم");
      contentsArray.push(
        <AddSectionForm sections={sections} setSections={setSections} />
      );
      if (standards && standards.length > 0) {
        labelsArray.push("تعديل معييار");
        contentsArray.push(
          <EditStandardForm
            sections={sections}
            standards={standards}
            setStandards={setStandards}
          />
        );
      }
      labelsArray.push("إضافة معييار");
      contentsArray.push(
        <AddStandardForm
          sections={sections}
          standards={standards}
          setStandards={setStandards}
        />
      );
    }

    if (sections && sections.length > 0) {
      currentLabelsArray.push("الأقسام الحالية");
      currentContentsArray.push(
        <StandardsDropDownList className="DropdownList">
          {sections.map((section, index) => {
            return (
              <DropdownListItem key={index}>
                {hasPermission ? (
                  <>
                    <Button
                      id="deleteBtn"
                      onClick={handleOpenSectionModelChange}
                      value={section.id}
                    >
                      حذف
                    </Button>
                    <Span>{section.label}</Span>
                  </>
                ) : (
                  <Span style={{ width: "100%" }}>{section.label}</Span>
                )}
              </DropdownListItem>
            );
          })}
          {showSectionDeleteFailedMsg && (
            <DropdownListItem>
              <DivPass className="red">
                يرجى حذف جميع المعايير المسجلة في هذا القسم قبل حذفه
              </DivPass>
            </DropdownListItem>
          )}
        </StandardsDropDownList>
      );
    }

    if (standards && standards.length > 0) {
      currentLabelsArray.push("المعايير الحالية");
      currentContentsArray.push(
        <StandardsDropDownList className="DropdownList">
          {standards.map((standard, index) => {
            return (
              <DropdownListItem key={index}>
                {hasPermission ? (
                  <>
                    <Button
                      id="deleteBtn"
                      onClick={handleOpenStandardModelChange}
                      value={standard.id}
                    >
                      حذف
                    </Button>
                    <Span>{standard.label}</Span>
                  </>
                ) : (
                  <Span style={{ width: "100%" }}>{standard.label}</Span>
                )}
              </DropdownListItem>
            );
          })}
          {showStandardDeleteFailedMsg && (
            <DropdownListItem>
              <DivPass className="red">
                يرجى حذف جميع نقاط الطلاب المسجلة لهذا المعييار قبل حذفه
              </DivPass>
            </DropdownListItem>
          )}
        </StandardsDropDownList>
      );
    }

    setCurrentLabels(currentLabelsArray);
    setCurrentContents(currentContentsArray);
    setLabels(labelsArray);
    setContents(contentsArray);
  }, [
    sections,
    standards,
    hasPermission,
    showStandardDeleteFailedMsg,
    showSectionDeleteFailedMsg,
  ]);

  const handleOpenStandardModelChange = (e) => {
    setStandardIdToDelete(e.target.value);
    setOpenStandardModal(true);
  };

  const handleOpenSectionModelChange = (e) => {
    setSectionIdToDelete(e.target.value);
    setOpenSectionModal(true);
  };

  const deleteStandardFunction = () => {
    deleteStandard(
      standardIdToDelete,
      (res) => {
        if (res && res.status === 204) {
          console.log(
            `Standard with id: ${standardIdToDelete} has been deleted`
          );
          setStandards([
            ...standards.filter(
              (standard) => standard.id !== Number(standardIdToDelete)
            ),
          ]);
        }
      },
      (err) => {
        console.log(
          "Failed to delete standard: ",
          JSON.stringify(err.response.data)
        );
        if (err?.response?.status === 500) {
          setShowStandardDeleteFailedMsg(true);
          setTimeout(() => {
            setShowStandardDeleteFailedMsg(false);
          }, 7000);
        }
      }
    );
    setOpenStandardModal(false);
  };

  const deleteSectionFunction = () => {
    deleteSection(
      sectionIdToDelete,
      (res) => {
        if (res && res.status === 204) {
          console.log(`Section with id: ${sectionIdToDelete} has been deleted`);
          setSections(
            sections.filter(
              (section) => section.id !== Number(sectionIdToDelete)
            )
          );
        }
      },
      (err) => {
        console.log(
          "Failed to delete section: ",
          JSON.stringify(err.response.data)
        );
        if (err?.response?.status === 500) {
          setShowSectionDeleteFailedMsg(true);
          setTimeout(() => {
            setShowSectionDeleteFailedMsg(false);
          }, 7000);
        }
      }
    );
    setOpenSectionModal(false);
  };

  if (loading) {
    return (
      <main>
        <Loader />
      </main>
    );
  }

  return (
    <>
      {openSectionModal && (
        <Modal
          title="تأكيد الحذف"
          content="هل تريد حذف هذا القسم؟"
          deleteBtn="حذف"
          cancelBtn="إلغاء"
          setOpenModal={setOpenSectionModal}
          deleteFunction={deleteSectionFunction}
        />
      )}

      {openStandardModal && (
        <Modal
          title="تأكيد الحذف"
          content="هل تريد حذف هذا المعييار؟"
          deleteBtn="حذف"
          cancelBtn="إلغاء"
          setOpenModal={setOpenStandardModal}
          deleteFunction={deleteStandardFunction}
        />
      )}
      <Container>
        {
          // TODO: We need to add images for both of other and checkbox types, for now
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

        {currentLabels.length === 0 && labels.length === 0 && (
          <Tabs labels={["المعايير"]} contents={[<H5>لا يوجد معايير</H5>]} />
        )}
        <Tabs
          labels={currentLabels}
          contents={currentContents}
          contentClass=" no-padding"
        />

        <Tabs labels={labels} contents={contents} />
      </Container>
    </>
  );
}
