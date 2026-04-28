import { useGSAP} from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const ServiecSummary = () => {
  useGSAP(() => {
    gsap.to('#tittle-service-1', {
      xPercent : 20,
      scrollTrigger :{
        target : '#tittle-service-1',
        scrub : true,
      }
    });
    gsap.to('#tittle-service-2', {
      xPercent : -30,
      scrollTrigger :{
        target : '#tittle-service-2',
        scrub : true,
      }
    });
    gsap.to('#tittle-service-3', {
      xPercent : 100,
      scrollTrigger :{
        target : '#tittle-service-3',
        scrub : true,
      }
    });
    gsap.to('#tittle-service-4', {
      xPercent : -100,
      scrollTrigger :{
        target : '#tittle-service-4',
        scrub : true,
      }
    });
  });


  return (
    <section className="mt-20 overflow-hidden font-light leading-snug text-center mb-42 contact-text-responsive">
      <div id="tittle-service-1">
        <p>Architecture</p>
      </div>
      <div
        id="tittle-service-2"
        className="flex itemss-center justify-center gap-3-translate-x-48"
      >
        <p className="">Development </p>
        <div className="w-10 h-1 md:w-32 bg-gold" />
        <p>Deployment</p>
      </div>
      <div
      id="tittle-service-3"
      className="flex items-center justify-center
      gap-3-translate-x-48">
        <p>
            API
        </p>
         <div className="w-10 h-1 md:w-32 bg-gold" />
         <p className="italic">Frontend</p>
         <div className="w-10 h-1 md:w-32 bg-gold" />
         <p>Scalablity
         </p>

      </div>
      <div  id="tittle-service-4" className ="translate-x-48">
        <p>
          Datebases
        </p>

      </div>
    </section>
  );
};

export default ServiecSummary;
