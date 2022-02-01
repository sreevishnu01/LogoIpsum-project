import Carousels from './header/Carousels'
import Navbar1 from './topbar/Navbar'
import Main from './main/main'
import CarouselSlick from './header/CarouselSlick'
// import axios from '../Assets/axiosconfig'



function Home() {




    return (
        <>
            <Navbar1 />
            {/* <Carousels /> */}
            <CarouselSlick />
            <Main />
        </>
    )
}

export default Home
