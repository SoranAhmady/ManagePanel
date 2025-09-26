import { useSelector } from "react-redux";
import P from "../../atoms/P/P";
import { MenuPageSlider } from "../../moloculse/MenuPageSlider/MenuPageSlider";
import Button from "../../atoms/Button/Button";
import Span from "../../atoms/Span/Span";
import { Link } from "react-router-dom";
import Icon from "../../atoms/Icon/Icon";

export function MenuPageNotIran() {
    const products = useSelector(state => state.User.product)
    const notPersian = products.filter(item => item.category.includes('غیر ایرانی'))

    return (
        <div className="w-full bg-[#FFFF] flex items-center ">
            <div className="w-[95%] flex flex-col items-end gap-2 my-4">
                <P className={'text-black text-2xl'}>
                    غذاهای غیر ایرانی
                </P>
                <MenuPageSlider slideIndex={3} item={notPersian.slice(0, 5)} />
            </div>
              
        </div>
    )
}
