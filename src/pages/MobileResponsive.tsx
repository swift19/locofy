import { FunctionComponent } from "react";
import FrameB from "../components/FrameB";

const MobileResponsive: FunctionComponent = () => {
  return (
    <div className="w-full relative flex flex-row items-center justify-center tracking-[normal]">
      <section className="flex-1 bg-white flex flex-row items-start justify-start py-0 pr-[39px] pl-0 box-border gap-[0px_38px] max-w-full text-center text-2xs text-dodgerblue font-inter mq450:gap-[0px_38px] mq550:flex-wrap mq550:p-5 mq550:box-border">
        <FrameB />
        <img
          className="h-[492px] w-[685px] relative hidden max-w-full z-[1]"
          alt=""
          src="/background.svg"
        />
        <div className="w-[207px] flex flex-col items-start justify-start pt-[101px] px-0 pb-0 box-border min-w-[207px] mq550:flex-1">
          <div className="self-stretch flex flex-col items-center justify-start gap-[16px_0px]">
            <b className="self-stretch relative tracking-[0.01em] leading-[16px] z-[1]">
              <p className="m-0">We’re published already!</p>
              <p className="m-0">Edit us to be your team’s colors.</p>
            </b>
            <img
              className="w-0 h-[42px] relative object-contain z-[1]"
              loading="lazy"
              alt=""
              src="/arrow.svg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default MobileResponsive;
