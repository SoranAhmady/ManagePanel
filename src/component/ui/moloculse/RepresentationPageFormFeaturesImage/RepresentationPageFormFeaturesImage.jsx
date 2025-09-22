import React from 'react'
import P from '../../atoms/P/P'
import UploadImg from '../UplodeImg/UplodeImg'

function RepresentationPageFormFeaturesImage() {
    return (
        <div className="w-full flex flex-col items-end gap-2 ">
            <P className="text-[#717171] text-[1.2vw] ">تصاویر ملک</P>
            <div className="">
                <UploadImg/>
            </div>
        </div>
    )
}

export default RepresentationPageFormFeaturesImage
