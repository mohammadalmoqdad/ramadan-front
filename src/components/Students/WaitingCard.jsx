import WaitingCard, {
  ColumnContainer,
  BoldText,
  LightText,
  ParticipantsNumbers,
  ShortedName,
  CardButton,
} from "./ParticipantCard.styles";

import { useTranslation } from "react-i18next";
import {updateContestPeopleRole} from "../../services/adminsServices";
import {Role} from "../../util/ContestPeople_Role";

const WaitingCardComponent = ({ name, username, setStudents, students, setDeactivatedStudents, deactivatedStudents}) => {
  const { t } = useTranslation();

  const handleReactivate = ()=>{
      updateContestPeopleRole(username,
          {
            "contest_role":  Role.MEMBER
          }, (res) =>{
            if(res && res.status === 200){
              let reactivatedStudent = deactivatedStudents.filter(deactivatedStudent => deactivatedStudent.person.username === username)[0];
              setStudents([reactivatedStudent, ...students]);
              setDeactivatedStudents(deactivatedStudents.filter(deactivatedStudent => deactivatedStudent.person.username !== username));
            }
          }, (err) =>{
            console.log(`Failed to reactivate ${username}: ${err}`);
          }
      );
  };

  return (
    <WaitingCard>
      <ParticipantsNumbers>
        <div style={{ display: "flex", gap: "12px" }}>
          <ShortedName>
            { name.split(" ").length > 1
                ? (name.split(" ")[0].charAt(0) + name.split(" ")[1].charAt(0)).toUpperCase()
                : name.slice(0, 2).toUpperCase()
            }
          </ShortedName>
          <ColumnContainer>
            <BoldText>{name}</BoldText>
            <LightText>{username !== name ? username : ""}</LightText>
          </ColumnContainer>
        </div>

        <CardButton onClick={handleReactivate}>{t("reactive")}</CardButton>
      </ParticipantsNumbers>
    </WaitingCard>
  );
};

export default WaitingCardComponent;
