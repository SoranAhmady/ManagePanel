import SliderHeaderPage from './../../component/ui/organisms/SliderHeaderPage/SliderHeaderPage';
import ListMenuHomePage from './../../component/ui/organisms/ListMenuHomePage/ListMenuHomePage';
import InformationHomePage from './../../component/ui/organisms/InformationHomePage/InformationHomePage';
import ListBranchsHomePage from '../../component/ui/organisms/ListBranchsHomePage/ListBranchsHomePage';
import { useContext } from 'react';
import { LoginContaxt } from '../../context/LoginWindow';
import Login from '../Login/Login';
import InputSerchHomePage from '../../component/ui/moloculse/InputSerchHomePage/InputSerchHomePage';


function HomePage() {
  const { openLogin } = useContext(LoginContaxt);

    return (
        <div className="w-full flex flex-col justify-center ">
            <section>
                <SliderHeaderPage/>
            </section>
            <section className='flex my-[7vw] md:hidden w-full items-center justify-center'>
                <InputSerchHomePage/>
            </section>
            <section className='md:my-[3vw] my-[6vw] '>
                <ListMenuHomePage/>
            </section>
            <section className='my-[2vw]'>
                <InformationHomePage/>
            </section>
            <section className='my-[3vw]'>
                <ListBranchsHomePage/>
            </section>
            {openLogin && <Login />}
        </div>
    )
}

export default HomePage
