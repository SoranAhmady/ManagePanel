import P from "../../atoms/P/P";
import { CustomField } from "../CustomField/CustomField";
import { useState } from "react";
import { ChangeToFa } from "../ChangeToFa/ChangeToFa";
import Button from "../../atoms/Button/Button";

export function FooterContactUs() {
    const [value, setValue] = useState(0)
    return (
        <div className="w-full flex flex-col  gap-3">
            <div className=" w-full justify-end flex text-xl">
                <P className={'text-white'}>
                    پیام به ترخینه
                </P>
            </div>
            <div className="flex  flex-col">
                <div className="flex gap-2 ">
                    <div className="w-[60%] areaScroll">
                        <textarea maxLength={200} className=" h-[23vh] resize-none w-[100%] outline-none bg-transparent border-2 border-[#717171] rounded-[8px] p-3 placeholder:text-white text-white " dir="rtl" placeholder="پیام شما" onChange={e => setValue(e.target.value)} />
                    </div>
                    <div className="flex flex-col gap-3">
                        <CustomField placeholder={'نام و نام خانوادگی'} />
                        <CustomField placeholder={'شماره تماش'} />
                        <CustomField placeholder={'آدرس ایمیل'} />
                    </div>
                </div>
                <P className={'text-[#CBCBCB] text-sm'}>
                    <ChangeToFa value={value.length ? value.length : 0} /> / ۲۰۰
                </P>
            </div>
            <div>
                <Button className={'p-2 px-16 rounded-lg text-white  border-[#717171] border-2'}>
                    ارسال پیام
                </Button>
            </div>
        </div>
    )
}