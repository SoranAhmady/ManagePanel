import P from "../../atoms/P/P";
import { MenuPageSlider } from "../../moloculse/MenuPageSlider/MenuPageSlider";
import { useSelector } from "react-redux";

export function MenuSpecialAdvice() {
    const Produts = useSelector(state => state.User.product)
    const special = Produts.filter(item => item.category.includes('ویژه'))
    return (
        <div className="w-full  flex justify-start">
            <div className="w-[95%] flex flex-col items-end gap-5">
                <P className={'text-2xl '}>
                    پیشنهاد ویژه
                </P>
                <MenuPageSlider item={special} />
            </div>
        </div>
    )
}