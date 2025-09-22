import React from 'react'
import ContactPageImage from '../../component/ui/moloculse/ContactPageImage/ContactPageImage'
import ContactPageListBranchs from '../../component/ui/organisms/ContactPageListBranchs/ContactPageListBranchs'

function ContactPage() {
    return (
        <div className="w-full flex flex-col ">
            <ContactPageImage/>
            <ContactPageListBranchs/>
        </div>
    )
}

export default ContactPage
