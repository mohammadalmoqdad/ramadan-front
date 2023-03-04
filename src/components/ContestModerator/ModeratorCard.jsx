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

const ModeratorCard = ({ person }) => {
  const { t } = useTranslation();

  let fullName = person?.first_name + " " + person.last_name;
  let userName = person.username;
  if (!fullName) fullName = userName;
  console.log("Person >>>>", userName);

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

        <DeleteButton>{t("deactivate")}</DeleteButton>
      </ParticipantsNumbers>
    </ModeratorCards>
  );
};

export default ModeratorCard;
