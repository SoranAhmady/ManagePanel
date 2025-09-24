import { useSelector } from "react-redux";
import P from "../../atoms/P/P";
import { MenuPageSlider } from "../../moloculse/MenuPageSlider/MenuPageSlider";



export function MenuPagePapularFood() {
    const products = useSelector(state => state.User.product)
    const papularProducts = products.filter(item => item.category.includes('محبوب'))
    return (
        <div className="w-full bg-[#315F41] flex  items-center">
            <div className="w-[95%] flex flex-col items-end gap-2 my-4">
                <P className={'text-white text-2xl '}>
                    غذاهای محبوب
                </P>
                <MenuPageSlider slideIndex={2} item={papularProducts}/>
            </div>
        </div>
    )
}