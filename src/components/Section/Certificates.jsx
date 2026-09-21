import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

function Certificates() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  const slides = [
    "/assets/certificate/byteverse.jpeg",
    "/assets/certificate/dsaRoundCodeClash.jpeg",
    "/assets/certificate/codeRoundCodeClash.jpeg",
    "/assets/certificate/algouniversity.png",
    "assets/certificate/nptelpython.png"
  ];
  

  return (
    <section 
    id='certificates'
    className='w-full pt-12 px-2 pb-[6rem] bg-violet-100
    dark:bg-gray-700'
    >
       <h1 className='bg-gradient-to-bl md:text-center from-violet-500 via-pink-500 to-violet-500 text-center pb-10 bg-clip-text text-transparent text-4xl font-bold'>Certificates</h1>
      <div className="embla w-[80%] mx-auto " ref={emblaRef}>
        <div className="embla__container flex">
          {slides.map((src, index) => (
            <div key={index} className="embla__slide flex-[0_0_100%] h-80 sm:h-96">
              <img
                src={src}
                alt={`Certificate ${index + 1}`}
                className="w-[90%] mx-auto h-full object-contain rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;
