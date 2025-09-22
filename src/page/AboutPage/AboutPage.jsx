import AboutPageInformaition from "../../component/ui/moloculse/AboutPageInformaition/AboutPageInformaition"
import AboutPageImage from "../../component/ui/organisms/AboutPageImage/AboutPageImage"
import AboutPageTitle from "../../component/ui/organisms/AboutPageTitle/AboutPageTitle"


function AboutPage() {
    return (
        <div className="w-full flex flex-col ">
            <AboutPageImage/>
            <AboutPageTitle/>
            <AboutPageInformaition/>
        </div>
    )
}

export default AboutPage
