import Footer from "layout/Home/Footer";
import SlideShow from "layout/Home/SlideShow";
import Header from "layout/Home/Header";
import HotSale from "layout/Home/HotSale";
import NewArrivals from "layout/Home/NewArrivals";

const HomePage = () => {
    return (
        <>
            <Header />
            <SlideShow />
            <div id="hot-sale"><HotSale /></div>
            <div id="new-arrivals"><NewArrivals /></div>
            <Footer />
        </>
    )
}

export default HomePage;