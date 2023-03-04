import ParticipantCards, {
  RowContainer,
  ColumnContainer,
  BoldText,
  LightText,
  ParticipantrSearchContainer,
  ParticipantsNumbers,
  ShortedName,
  DeleteButton,
} from "./ParticipantCard.styles";
import { ReactComponent as SearchIcons2 } from "assets/icons/search2.svg";

const ModeratorCard = ({ name, date, button, rank }) => (
  <ParticipantCards>
    <ParticipantsNumbers>
      <div style={{ display: "flex", gap: "12px" }}>
        <ShortedName>
          {` ${name.match(/\b\w/g).join("").toUpperCase()}`}
        </ShortedName>
        <ColumnContainer>
          <BoldText>{name}</BoldText>
          <LightText>{`Accepted on ${date}`}</LightText>
        </ColumnContainer>
      </div>

      <BoldText>{`#${rank}`}</BoldText>
      <DeleteButton>{button}</DeleteButton>
    </ParticipantsNumbers>
  </ParticipantCards>
);

export default ModeratorCard;
