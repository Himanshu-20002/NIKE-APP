'use client'
import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";



import { SiNike } from 'react-icons/si';

import { ModelCanvas } from "../components/3d/Model2";


import { useRef } from "react";

gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);

const Section = () => {
  const header1Ref = useRef<HTMLHeadingElement>(null);
  // const header2Ref = useRef<HTMLHeadingElement>(null); // Add this ref
  // const titleH2Ref = useRef<HTMLHeadingElement>(null); // for ".tooltip .title h2"
  const descriptionPRef = useRef<HTMLParagraphElement>(null); // for ".tooltip .description p"
  const modelRef = useRef<HTMLParagraphElement>(null);



  useGSAP(() => {
   

    if (!header1Ref.current || !descriptionPRef.current)
      return;

    const header1Split = new SplitText(header1Ref.current, {
      type: "chars",
      charsClass: "char",
    });

    // const titleSplits = new SplitText(titleH2Ref.current, {
    //   type: "lines",
    //   linesClass: "line",
    // });

    const descriptionSplits = new SplitText(descriptionPRef.current, {
      type: "lines",
      linesClass: "line",
    });

    header1Split.chars.forEach((char) => {
      char.innerHTML = `<span>${char.innerHTML}</span>`;
    });

    [ ...descriptionSplits.lines].forEach((line) => {
      line.innerHTML = `<span>${line.innerHTML}</span>`;
    });


    const animOptions = { duration: 1, ease: "power3.out", stagger: 0.025 };
    const tooltipSelectors = [
      {
        trigger: 0.65,
        elements: [
          ".tooltip:nth-child(1) .icon div",
          // ".tooltip:nth-child(1) .title .line > span",
          // ".tooltip:nth-child(1) .description .line > span",
        ],
      },
      {
        trigger: 0.65,
        elements: [
          ".tooltip:nth-child(2) .icon div",
          // ".tooltip:nth-child(2) .title .line > span",
          // ".tooltip:nth-child(2) .description .line > span",
        ],
      },
    ];

    ScrollTrigger.create({
      trigger: ".product-overview",
      start: "75% bottom",

      onEnter: () =>
        gsap.to(".header-1 h1 .char > span", {
          y: "10%",
          duration: 1,
          ease: "power3.out",
          stagger: 0.025,
        }),
      onLeaveBack: () =>
        gsap.to(".header-1 h1 .char > span", {
          y: "100%",
          duration: 1,
          ease: "power3.out",
          stagger: 0.025,
        }),
    });

    ScrollTrigger.create({
      trigger: ".product-overview",
      start: "top top",
      end: `+=${window.innerHeight * 5}px`,
      pin: true,
      pinSpacing: true,
      scrub: 1,
      onUpdate: ({ progress }) => {
        const headerProgress = Math.max(
          0,
          Math.min(1, (progress - 0.05) / 0.3)
        );
        gsap.to(".header-1", {
          xPercent:
            progress < 0.09
              ? 0
              : progress > 0.35
                ? -100
                : -100 * headerProgress,
        });



        const maskSize =
          progress < 0.33
            ? 0
            : progress > 0.3
              ? 100
              : 100 * ((progress - 0.2) / 0.1);
        gsap.to(".circular-mask", {
          clipPath: `circle(${maskSize}% at 50% 50%)`,
        });
        // const header2Progress = (progress - 0.15) / 0.35;
        // const header2Xpercent =
        //   progress < 0.15
        //     ? 100
        //     : progress > 0.5
        //       ? -200
        //       : 100 - 300 * header2Progress;
        // gsap.to(".header-2", {
        //   xPercent: header2Xpercent,
        //   y: "100%",
        // });

        const scaleX =
          progress < 0.45
              ? 0
              : progress > 0.65
              ? 100
              : 100 * ((progress - 0.45) / 0.2);
        gsap.to(".tooltip .divider", { scaleX: `${scaleX}%`, ...animOptions });


         if (modelRef.current) {
          gsap.to(modelRef.current.rotation, {
            y: progress * Math.PI * 2, // Rotate the model based on progress
            duration: 0.5,
            ease: "power3.out",
          });
        }



        tooltipSelectors.forEach(({ trigger, elements }) => {
          elements.forEach((selector) => {
            if (document.querySelector(selector)) {
              gsap.to(selector, {
                y: progress > trigger ? "0%" : "125%",
                duration: 1,
                ease: "power3.out",
                stagger: 0.025,
              });

            } else {
              console.warn(`GSAP target ${selector} not found`);
            }
          });
        });
      },
    });

    return () => {
      // Cleanup
      header1Split.revert();
      // titleSplits.revert();
      descriptionSplits.revert();
    };
  }, []);

  const titleClass =
    "text-6xl font-bold text-white justify-center item-center ";
  const h1 =
    "text-black absolute top-50% left-50% text-[9vw] italic will-change-transform   translate(-50%, -50%)";
  return (
    <div>
      <section className="product-overview bg-white">

        <div className="header-1">
          <h1 ref={header1Ref}>Only one Way</h1>
          <h1>
            To <span className=" bg-clip-text text-red-400 text-[10vw]">Find Out</span>
          </h1>
          <h1 className="text-10xl">
            <span className="  bg-clip-text text-[5vw]">
              just 
            </span>
            <span className="bg-clip-text text-[7vw]">
              Do it
            </span>
             
          </h1>

          {/* <h1>stunning 🌀visual </h1> */}
        </div>
        {/* <div className="header-2">
          <h2 className="mr-70 -z-50 ">New arrival!</h2>

        </div> */}
        <div className="circular-mask">
          <div className="  max-lg:pointer-events-none z-99 w-full h-full">
            <ModelCanvas ref={modelRef} />
          </div>
        </div>
        <div className="tooltips">
          <div className="tooltip">
            <div  className="icon flex-row">
              <div  className="flex flex-row justify-start gap-10 ">
                <SiNike />
                <SiNike />
                <SiNike />
              </div>
            </div>
            <div className="divider"></div>
            <div className="title">
              <h2>NEW ARIVALS.</h2>
            </div>
            <div className=" text-white">
              <p ref={descriptionPRef}>
                Designed to match your pace No interruptions, no slowing down.
              </p>
            </div>
          </div>
          <div className="tooltip">
            <div className="icon">
              <div className="flex flex-row justify-start gap-10 ">
                <SiNike /> <SiNike /> <SiNike />
              </div>
            </div>
            <div className="divider"></div>
            <div className="title">
              <h2 >SCI-FI SHOES</h2>
            </div>
            <div className="text-white">
              <p ref={descriptionPRef}>
                Designed to match your pace No interruptions, no slowing down.
              </p>
            </div>
          </div>
        </div>


      </section>


    </div>
  );
};

export default Section;
