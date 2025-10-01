import { MenuPageNavBarCategory } from "../../moloculse/MenuPageNavBarCategory/MenuPageNavBarCategory";
import { MenuPageSelectFood } from "../../moloculse/MenuPageSelectFood/MenuPageSelectFood";
import SliderHeaderPage from "../SliderHeaderPage/SliderHeaderPage";


export function MenuPageNavBar() {
    return (
        <div className="w-full flex flex-col ">
            <div>
                <SliderHeaderPage />
            </div>
            <div>
                <MenuPageSelectFood />
            </div>
            <div className="">
                <MenuPageNavBarCategory />
            </div>
        </div>
    )
}