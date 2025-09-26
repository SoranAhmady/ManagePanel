import { Link } from "react-router-dom";
import { MenuPageNotIran } from "../MenuPageNotIran/MenuPageNotIran";
import { MenuPagePapularFood } from "../MenuPagePapularFood/MenuPagePapularFood";
import { MenuSpecialAdvice } from "../MenuSliderItems/MenuSpecialAdvice";
import SliderHeaderPage from "../SliderHeaderPage/SliderHeaderPage";
import Span from "../../atoms/Span/Span";
import Icon from "../../atoms/Icon/Icon";


export function BranchPageSlider() {
    return (
        <div className="flex flex-col gap-2">
            <div className="w-full flex flex-col gap-10">
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
            </div>
            <div className="flex justify-center w-full m">
                <Link className={'group flex gap-2 border-2 rounded-[4px] hover:bg-[#417F56] hover:text-white transition-all duration-500 border-[#417F56] text-[#417F56] w-fit p-2 px-2.5'}>
                    مشاهده منوی کامل
                    <Span className={'flex group-hover:hidden'}>
                        <Icon name={'list'} />
                    </Span>
                    <Span className={'hidden group-hover:flex'}>
                        <Icon name={'list1'} />
                    </Span>
                </Link>
            </div>
        </div>
    )
}