import ModeratorCards, {
  RowContainer,
  ColumnContainer,
  BoldText,
  LightText,
  ModeratorSearchContainer,
  ParticipantsNumbers,
  ShortedName,
  DeleteButton,
} from "./ModeratorCards";
import { useTranslation } from "react-i18next";
import { ReactComponent as SearchIcons2 } from "assets/icons/search2.svg";
import {updateContestPeopleRole} from "../../services/adminsServices";

const ModeratorCard = ({ person, admins, setAdmins }) => {
  const { t } = useTranslation();

  let fullName = person?.first_name + " " + person.last_name;
  let userName = person.username;
  if (!fullName) fullName = userName;
  console.log("Person >>>>", userName);

  const deactivateAdmin = (username) =>{
    updateContestPeopleRole(username, {
      "contest_role": 6
    }, (res)=>{
      if(res && res.status === 200){
        setAdmins([...admins.filter(admin => admin.person.username !== username)]);
      }
    }, (err) =>{
      console.log(`Failed to deactivate admin ${username}: ${err}`);
    });
  }

  return (
    <ModeratorCards>
      <ParticipantsNumbers>
        <div style={{ display: "flex", gap: "12px" }}>
          <ShortedName>
            {` ${"name".match(/\b\w/g).join("").toUpperCase()}`}
          </ShortedName>
          <ColumnContainer>
            <BoldText>{fullName}</BoldText>
            <LightText>{userName}</LightText>
          </ColumnContainer>
        </div>

        <DeleteButton onClick={()=>{deactivateAdmin(userName)}}>{t("deactivate")}</DeleteButton>
      </ParticipantsNumbers>
    </ModeratorCards>
  );
};

export default ModeratorCard;
