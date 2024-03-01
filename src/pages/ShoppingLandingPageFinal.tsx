import { FunctionComponent } from "react";
import ChildFrame from "../components/ChildFrame";

const ShoppingLandingPageFinal: FunctionComponent = () => {
  return (
    <div className="w-full relative flex flex-row items-center justify-center tracking-[normal]">
      <section className="flex-1 bg-white flex flex-row items-start justify-start gap-[0px_54px] max-w-full text-center text-2xs text-dodgerblue font-inter mq625:flex-wrap mq625:gap-[0px_54px]">
        <img
          className="h-[492px] w-[685px] relative hidden min-h-[492px] max-w-full"
          alt=""
          src="/background.svg"
        />
        <ChildFrame />
        <div className="flex flex-col items-start justify-start pt-[102px] px-0 pb-0 box-border min-w-[175px] mq625:flex-1">
          <div className="flex flex-col items-center justify-start gap-[17px_0px]">
            <b className="w-[175px] relative tracking-[0.01em] leading-[16px] inline-block z-[1]">
              Color and create some more styles out of us!
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

export default ShoppingLandingPageFinal;
