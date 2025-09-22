import { MenuPageBranchSection } from "../../component/ui/organisms/MenuPageBranchSection/MenuPageBranchSection";
import { MenuPageNotIran } from "../../component/ui/organisms/MenuPageNotIran/MenuPageNotIran";
import { MenuPagePapularFood } from "../../component/ui/organisms/MenuPagePapularFood/MenuPagePapularFood";
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
            <div>
                <MenuPagePapularFood />
            </div>
            <div>
                <MenuPageNotIran />
            </div>
            <div>
                <MenuPageBranchSection />
            </div>
        </div>
    )
}