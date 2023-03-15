import ParticipantCards, {
  RowContainer,
  ColumnContainer,
  BoldText,
  LightText,
  ParticipantrSearchContainer,
  ParticipantsNumbers,
  ShortedName,
  CardButton,
} from "./ParticipantCard.styles";
import { ReactComponent as SearchIcons2 } from "assets/icons/search2.svg";
import { ReactComponent as MoreButton } from "assets/icons/more-button.svg";
import ButtonsModal from "./ButtonsModal";
import { useState } from "react";

const ModeratorCard = ({ name, date, rank }) => {
  const [modalState, setModalState] = useState(false);

  return (
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

        <MoreButton
          className="more-button"
          onClick={() => setModalState(true)}
        />

        {modalState && (
          <ButtonsModal
            clickOverlay={() => {
              setModalState(false);
            }}
            turnOff={() => {
              setModalState(false);
            }}
          />
        )}
      </ParticipantsNumbers>
    </ParticipantCards>
  );
};

export default ModeratorCard;
