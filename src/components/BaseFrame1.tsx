import { FunctionComponent } from "react";

const BaseFrame1: FunctionComponent = () => {
  return (
    <div className="w-[685px] flex flex-row items-center justify-center tracking-[normal]">
      <section className="flex-1 bg-white flex flex-row items-start justify-start py-0 pr-[35px] pl-0 box-border gap-[0px_39px] max-w-full text-left text-xl text-black font-inter mq450:gap-[0px_39px] mq525:flex-wrap mq525:p-5 mq525:box-border">
        <img
          className="h-[492px] w-[685px] relative hidden min-h-[492px] max-w-full"
          alt=""
          src="/background.svg"
        />
        <div className="flex-1 bg-gray-100 flex flex-col items-center justify-start p-8 box-border gap-[24px_0px] min-w-[261px] max-w-full z-[1] mq450:pt-[21px] mq450:pb-[21px] mq450:box-border">
          <div className="w-[401px] h-[492px] relative bg-gray-100 hidden max-w-full" />
          <div className="self-stretch flex flex-col items-start justify-start gap-[8px_0px]">
            <h2 className="m-0 relative text-inherit tracking-[-0.02em] leading-[32px] font-bold font-inherit z-[2] mq450:text-base mq450:leading-[26px]">
              Create components
            </h2>
            <div className="w-[337px] relative text-2xs tracking-[0.01em] leading-[16px] text-gray-200 inline-block z-[2]">
              <p className="m-0">
                Create components out of commonly used objects such as buttons
                and icons to reuse them across your designs.
              </p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">
                <span>Select an element and click</span>
                <span className="font-semibold font-inter">
                  {" "}
                  Create Component
                </span>
                <span className="font-inter">
                  {" "}
                  in the top bar or the right-click menu.
                </span>
              </p>
            </div>
          </div>
          <img
            className="self-stretch h-[204px] relative max-w-full overflow-hidden shrink-0 object-cover z-[2]"
            loading="lazy"
            alt=""
            src="/08@2x.png"
          />
          <div className="self-stretch rounded-10xs bg-aliceblue flex flex-row items-start justify-start p-3 box-border gap-[0px_8px] max-w-full z-[2] text-2xs text-gray-200">
            <img
              className="h-14 w-[337px] relative rounded-10xs hidden max-w-full"
              alt=""
              src="/tip.svg"
            />
            <img
              className="h-4 w-4 relative z-[3]"
              loading="lazy"
              alt=""
              src="/icon3.svg"
            />
            <div className="w-[289px] relative tracking-[0.01em] leading-[16px] inline-block shrink-0 z-[3]">
              <span className="font-semibold">Tip:</span>
              <span>{` The keyboard shortcut to create a component is `}</span>
              <span className="font-semibold">{`Ctrl Alt K `}</span>
              <span>{`on Windows, or `}</span>
              <span className="font-semibold">{`⌘⌥K `}</span>
              <span>on a Mac.</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-[109px] px-0 pb-0 box-border min-w-[210px] text-center text-2xs text-dodgerblue mq525:flex-1">
          <div className="flex flex-col items-center justify-start gap-[16px_0px]">
            <b className="w-[210px] relative tracking-[0.01em] leading-[16px] inline-block z-[1]">
              Make us into components to show hover states across your designs
            </b>
            <img
              className="w-[7.4px] h-[30px] relative object-contain z-[1]"
              loading="lazy"
              alt=""
              src="/arrow2.svg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default BaseFrame1;
