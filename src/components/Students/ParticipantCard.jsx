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

const ModeratorCard = ({ key, name, username, students, setStudents, setDeactivatedStudents, deactivatedStudents}) => {
  const [modalState, setModalState] = useState(false);

  return (
    <ParticipantCards key={key}>
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
            <LightText>{name !== username ? username : ""}</LightText>
          </ColumnContainer>
        </div>
        {/*<BoldText>{`#${rank}`}</BoldText>*/}

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
            username={username}
            students={students}
            setStudents={setStudents}
            setDeactivatedStudents={setDeactivatedStudents}
            deactivatedStudents={deactivatedStudents}
          />
        )}
      </ParticipantsNumbers>
    </ParticipantCards>
  );
};

export default ModeratorCard;
