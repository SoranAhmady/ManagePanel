import { MenuSpecialAdvice } from "../../component/ui/organisms/MenuSliderItems/MenuSpecialAdvice";
import SliderHeaderPage from "../../component/ui/organisms/SliderHeaderPage/SliderHeaderPage";


export function MenuPage() {
    return (
        <div className="flex flex-col gap-10">
            <div>
                <SliderHeaderPage />
            </div>
            <div className="">
                <MenuSpecialAdvice />
            </div>
        </div>
    )
}