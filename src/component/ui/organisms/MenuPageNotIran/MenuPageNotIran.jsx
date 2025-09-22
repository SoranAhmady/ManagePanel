import { useSelector } from "react-redux";
import P from "../../atoms/P/P";
import { MenuPageSlider } from "../../moloculse/MenuPageSlider/MenuPageSlider";
import { Link } from "react-router-dom";
import Icon from "../../atoms/Icon/Icon";
import Span from "../../atoms/Span/Span";


export function MenuPageNotIran() {
    const products = useSelector(state => state.User.product)
    const notPersian = products.filter(item => item.category.includes('غیر ایرانی'))
    return (
        <div className="w-full  flex  items-center flex-col justify-center gap-3">
            <div className="w-[95%] flex flex-col items-end gap-2 my-4 ">
                <P className={'text-black text-2xl font-bold'}>
                    غذا های غیر ایرانی
                </P>
                <MenuPageSlider item={notPersian.slice(0, 5)} />
            </div>
            <div className="flex justify-center w-full ">
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