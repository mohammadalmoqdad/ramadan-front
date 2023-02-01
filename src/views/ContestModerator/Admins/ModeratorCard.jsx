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
import { ReactComponent as SearchIcons2 } from "assets/icons/search2.svg";

const ModeratorCard = ({ name, date, button }) => (
  <ModeratorCards>
    <ParticipantsNumbers>
      <div style={{ display: "flex", gap: "12px" }}>
        <ShortedName>
          {` ${name.match(/\b\w/g).join("").toUpperCase()}`}
        </ShortedName>
        <ColumnContainer>
          <BoldText>{name}</BoldText>
          <LightText>{`Added on ${date}`}</LightText>
        </ColumnContainer>
      </div>

      <DeleteButton>{button}</DeleteButton>
    </ParticipantsNumbers>
  </ModeratorCards>
);

export default ModeratorCard;
