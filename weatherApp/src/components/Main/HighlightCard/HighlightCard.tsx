import React from "react";
import { HIGHLIGHT_CARD_TYPE } from "../../../constants";
import HighlightCardImpl from "./HighlightCardImpl";

const HighlightCard = (props: HighlightCardProp) => {
  return HighlightCardImpl(props.title, props.info);
};

interface HighlightCardProp {
  title:
    | HIGHLIGHT_CARD_TYPE.WIND
    | HIGHLIGHT_CARD_TYPE.AIRPRESSURE
    | HIGHLIGHT_CARD_TYPE.HUMIDITY
    | HIGHLIGHT_CARD_TYPE.VISIBILITY
    | HIGHLIGHT_CARD_TYPE.THUNDERSTORM;
  info: any;
}

export default HighlightCard;
