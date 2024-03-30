/* eslint-disable react/no-unknown-property */
import gsap from "gsap";
import "./App.css";
import { useLayoutEffect } from "react";
import { useRef } from "react";
import SplitType from "split-type";

function App() {
  const appRef = useRef();
  const flowBox = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const textOne = new SplitType(".box-one-text");
      const textTwo = new SplitType(".box-two-text");
      const textThree = new SplitType(".box-three-text");
      const textFour = new SplitType(".box-four-text");
      const textFive = new SplitType(".box-five-text");
      const charsOne = textOne.chars;
      const charsTwo = textTwo.chars;
      const charsThree = textThree.chars;
      const charsFour = textFour.chars;
      const charsFive = textFive.chars;
      const tlIntro = gsap.timeline({ delay: 1 });

      tlIntro.fromTo(
        ".steps",
        {
          marginTop: "50%",
          clipPath: "inset(0% 0% 100% 0%)",
        },
        {
          marginTop: "40%",
          clipPath: "inset(0% 0% 94.8% 0%)",
          ease: "power3.out",
          duration: 1,
        }
      );

      tlIntro.fromTo(
        ".box-one",
        {
          xPercent: -60,
          scale: 0,
          opacity: 0,
        },
        {
          xPercent: 0,
          scale: 1,
          opacity: 1,
          ease: "power3.out",
          duration: 1,
        },
        "-=0.5"
      );

      tlIntro.from(charsOne, {
        duration: 1,
        opacity: 0,
        stagger: 0.05,
        ease: "power3.out",
      });

      tlIntro.to(".steps", {
        clipPath: "inset(0% 0% 71% 0%)",
        duration: 1,
        ease: "power3.out",
      });

      tlIntro.fromTo(
        ".box-two",
        {
          xPercent: 100,
          scale: 0,
          opacity: 0,
        },
        {
          xPercent: 0,
          scale: 1,
          opacity: 1,
          ease: "power3.out",
          duration: 1,
        },
        "-=0.5"
      );

      tlIntro.from(charsTwo, {
        duration: 1,
        opacity: 0,
        stagger: 0.05,
        ease: "power3.out",
      });

      tlIntro.to(".steps", {
        clipPath: "inset(0% 0% 47.3% 0%)",
        duration: 1,
        ease: "power3.out",
      });

      tlIntro.to(
        ".flow-box-inner",
        {
          marginTop: "-25%",
          duration: 1,
          ease: "power3.out",
        },
        "<"
      );

      tlIntro.fromTo(
        ".box-three",
        {
          xPercent: -60,
          scale: 0,
          opacity: 0,
        },
        {
          xPercent: 0,
          scale: 1,
          opacity: 1,
          ease: "power3.out",
          duration: 1,
        },
        "-=0.5"
      );

      tlIntro.from(charsThree, {
        duration: 1,
        opacity: 0,
        stagger: 0.05,
        ease: "power3.out",
      });

      tlIntro.to(".steps", {
        clipPath: "inset(0% 0% 23.6% 0%)",
        duration: 1,
        ease: "power3.out",
      });

      tlIntro.fromTo(
        ".box-four",
        {
          xPercent: 60,
          scale: 0,
          opacity: 0,
        },
        {
          xPercent: 0,
          scale: 1,
          opacity: 1,
          ease: "power3.out",
          duration: 1,
        },
        "-=0.5"
      );

      tlIntro.from(charsFour, {
        duration: 1,
        opacity: 0,
        stagger: 0.05,
        ease: "power3.out",
      });

      tlIntro.to(".steps", {
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 1,
        ease: "power3.out",
      });

      tlIntro.to(
        ".flow-box-inner",
        {
          marginTop: "-50%",
          duration: 1,
          ease: "power3.out",
        },
        "<"
      );

      tlIntro.fromTo(
        ".box-five",
        {
          xPercent: -60,
          scale: 0,
          opacity: 0,
        },
        {
          xPercent: 0,
          scale: 1,
          opacity: 1,
          ease: "power3.out",
          duration: 1,
        }
      );

      tlIntro.from(charsFive, {
        duration: 1,
        opacity: 0,
        stagger: 0.05,
        ease: "power3.out",
      });
    }, appRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={appRef}
      className="relative h-screen w-full flex justify-between items-center bg-white"
    >
      <div className="flex flex-col justify-center items-center w-1/2 h-full">
        <h1 className="p-8 text-6xl font-bold">Some Really Clever Text</h1>
        <h2 className="text-4xl font-normal">More Clever Text</h2>
      </div>
      <div className="flow-box clipped flex flex-col justify-center items-center w-1/2 h-full">
        <div className="flow-box-inner flex flex-col justify-center items-center w-full h-full rounded-xl overflow-hidden">
          <div className="absolute top-[26%] w-full h-[8%] bg-white opacity-80 blur-md z-20"></div>
          <img src="steps.png" alt="steps" className="steps" />
          <div className="box-one absolute ml-[25rem] mt-[-7rem] px-2 py-4 w-fit h-fit rounded-xl bg-blue-600 border-[2px] border-blue-800">
            <p className="box-one-text text-white">
              Lorem Ipsum dolor imet blah blah blah
            </p>
          </div>
          <div className="box-two absolute ml-[-20rem] mt-[7rem] px-2 py-4 w-fit h-fit rounded-xl bg-slate-200 border-[2px] border-cyan-300">
            <p className="box-two-text text-blue-400 font-semibold">
              Lorem Ipsum dolor imet <br /> blah blah blah
            </p>
          </div>
          <div className="box-three absolute ml-[20rem] mt-[19rem] px-2 py-4 w-fit h-fit rounded-xl bg-blue-600 border-[2px] border-blue-800">
            <p className="box-three-text text-white">
              More dummy text for the box
            </p>
          </div>
          <div className="box-four absolute ml-[-20rem] mt-[32rem] px-2 py-4 w-fit h-fit rounded-xl bg-slate-200 border-[2px] border-cyan-300">
            <p className="box-four-text text-blue-400 font-semibold">
              More dummy text for the box
            </p>
          </div>
          <div className="box-five absolute ml-[20rem] mt-[44rem] px-2 py-4 w-fit h-fit rounded-xl bg-blue-600 border-[2px] border-blue-800">
            <p className="box-five-text text-white">
              More dummy text for the box
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
