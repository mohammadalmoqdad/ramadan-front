import ParticipantCards, {
  ColumnContainer,
  BoldText,
  ParticipantsNumbers,
  ShortedName,
} from "./StudentCard.styled";
import { ReactComponent as MoreButton } from "assets/icons/more-button.svg";
import { useState } from "react";
import InfoModal from "./InfoModal";

const StudentCard = ({ name, note }) => {
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
          </ColumnContainer>
        </div>

        <MoreButton
          className="more-button"
          onClick={() => setModalState(true)}
        />

        {modalState && (
          <InfoModal
            note={note}
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

export default StudentCard;
