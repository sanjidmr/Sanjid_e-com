import c1 from "../Images/c1.jpg";
import c2 from "../Images/c2.jpg";
import c3 from "../Images/c3.jpg";
import c4 from "../Images/c4.jpg";

function Carousel() {
    return (
        <div className="relative my-2">

            <div className="carousel w-full h-[450px] overflow-hidden">

                <div id="slide1" className="carousel-item relative w-full">
                    <img src={c1} className="w-full h-full object-cover" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>

                <div id="slide2" className="carousel-item relative w-full">
                    <img src={c2} className="w-full h-full object-cover" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>

                <div id="slide3" className="carousel-item relative w-full">
                    <img src={c3} className="w-full h-full object-cover" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>

                <div id="slide4" className="carousel-item relative w-full">
                    <img src={c4} className="w-full h-full object-cover" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>

            </div>

            <div className="pointer-events-none absolute bottom-0 left-0 w-full h-32 
                            bg-gradient-to-t from-white/90 to-transparent">
            </div>

        </div>
    );
}

export default Carousel;
