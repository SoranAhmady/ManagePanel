import Span from "../../atoms/Span/Span"
import { ToPersianNumber } from 'topersiannumber';

export function ChangeToFa({ value }) {
    const persianFormattedNumber = ToPersianNumber(value);
    return <Span>{persianFormattedNumber}</Span>
}