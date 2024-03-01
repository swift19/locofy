import { FunctionComponent } from "react";

const TrangChWeb: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-gray-100 flex flex-col items-center justify-start py-8 px-5 box-border gap-[24px_0px] text-left text-xl text-black font-inter">
      <div className="w-[685px] h-[492px] relative bg-gray-100 hidden" />
      <div className="self-stretch flex flex-col items-start justify-start py-0 pr-3 pl-[11px] gap-[8px_0px]">
        <h2 className="m-0 relative text-inherit tracking-[-0.02em] leading-[32px] font-bold font-inherit z-[1]">
          Using your Team Library
        </h2>
        <div className="self-stretch flex flex-col items-center justify-start pt-0.5 px-5 pb-[18px] relative text-2xs text-gray-200">
          <div className="w-[calc(100%_-_1px)] absolute !m-[0] top-[0px] left-[0px] tracking-[0.01em] leading-[16px] whitespace-pre-wrap inline-block z-[1]">
            To use styles and components from Team Libraries, click on in the
            Assets panel in any of your files. Toggle on the ones you want to
            use in your design.
          </div>
          <img
            className="w-[18.5px] h-[12.2px] relative z-[2]"
            loading="lazy"
            alt=""
            src="/icon4.svg"
          />
        </div>
      </div>
      <img
        className="w-[621px] h-[332px] relative object-cover z-[1]"
        alt=""
        src="/rectangle-shape@2x.png"
      />
    </div>
  );
};

export default TrangChWeb;
