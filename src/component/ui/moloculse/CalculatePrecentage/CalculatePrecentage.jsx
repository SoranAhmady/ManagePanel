import { ChangeToFa } from "../ChangeToFa/ChangeToFa";

export function CalculatePrecentage({ total, precent }) {
    const calculate = total - (total * precent / 100);
    return <ChangeToFa value={calculate} />
}
