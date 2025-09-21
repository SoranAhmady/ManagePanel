import { ToPersianNumber } from "topersiannumber";
import Span from "../../atoms/Span/Span"

export function ChangeToFa({ value }) {
    const persianFormattedNumber = ToPersianNumber(value);
    return <Span>{persianFormattedNumber}</Span>
}