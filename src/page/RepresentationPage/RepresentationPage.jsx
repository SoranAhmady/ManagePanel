import React from 'react'
import RepresentationPageImage from '../../component/ui/moloculse/RepresentationPageImage/RepresentationPageImage'
import RepresentationPageInformation from '../../component/ui/moloculse/RepresentationPageInformation/RepresentationPageInformation'
import RepresentationPageAdvantage from '../../component/ui/moloculse/RepresentationPageAdvantage/RepresentationPageAdvantage'
import RepresentationPageAdvice from '../../component/ui/moloculse/RepresentationPageAdvice/RepresentationPageAdvice'
import RepresentationPageForm from '../../component/ui/organisms/RepresentationPageForm/RepresentationPageForm'

function RepresentationPage() {
    return (
     <div className="w-full flex flex-col">
        <section>
            <RepresentationPageImage/>
        </section>
        <section>
            <RepresentationPageInformation/>
        </section>
        <section>
            <RepresentationPageAdvantage/>
        </section>
        <section>
            <RepresentationPageAdvice/>
        </section>
        <section>
            <RepresentationPageForm/>
        </section>
     </div> 
    )
}

export default RepresentationPage
