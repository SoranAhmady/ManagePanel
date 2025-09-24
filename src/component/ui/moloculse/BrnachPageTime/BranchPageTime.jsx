import Icon from "../../atoms/Icon/Icon";
import P from "../../atoms/P/P";

export function BranchPageTime({ item }) {
    return (
        <div className=" items-center flex  sm:flex-col-reverse  gap-2 sm:gap-3 text-[16px]  w-fit">
            <div className="flex flex-col text-sm font-medium text-gray-700 gap-2">
                <P className={'  flex justify-end items-start sm:text-[16px] text-[10px] text-right'}>{item.time}</P>
            </div>
            <Icon name="clock2" />
        </div>
    )
}