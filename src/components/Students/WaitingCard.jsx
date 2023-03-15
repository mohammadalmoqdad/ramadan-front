import WaitingCard, {
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

import { useTranslation } from "react-i18next";

const WaitingCardComponent = ({ name, date, rank }) => {
  const { t } = useTranslation();

  return (
    <WaitingCard>
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
        <CardButton>{t("delete")}</CardButton>
      </ParticipantsNumbers>
    </WaitingCard>
  );
};

export default WaitingCardComponent;
