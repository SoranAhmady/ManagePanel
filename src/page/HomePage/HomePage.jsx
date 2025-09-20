import SliderHeaderPage from './../../component/ui/organisms/SliderHeaderPage/SliderHeaderPage';
import ListMenuHomePage from './../../component/ui/organisms/ListMenuHomePage/ListMenuHomePage';
import InformationHomePage from './../../component/ui/organisms/InformationHomePage/InformationHomePage';
import ListBranchsHomePage from '../../component/ui/organisms/ListBranchsHomePage/ListBranchsHomePage';


function HomePage() {
    return (
        <div className="w-full flex  justify-center ">
            <section>
                <SliderHeaderPage/>
            </section>
            <section>
                <ListMenuHomePage/>
            </section>
            <section>
                <InformationHomePage/>
            </section>
            <section>
                <ListBranchsHomePage/>
            </section>
        </div>
    )
}

export default HomePage
