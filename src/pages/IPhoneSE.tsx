import { FunctionComponent } from "react";

const IPhoneSE: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-gray-100 overflow-hidden flex flex-row items-center justify-start py-0 pr-[31px] pl-0 box-border gap-[0px_33px] tracking-[normal] text-left text-[38px] text-black font-inter mq450:gap-[0px_33px] mq525:flex-wrap mq525:pl-5 mq525:pt-5 mq525:pr-5 mq525:box-border">
      <div className="h-[492px] w-[685px] relative bg-gray-100 hidden max-w-full" />
      <img
        className="h-[492px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[222px] z-[1]"
        loading="lazy"
        alt=""
        src="/01@2x.png"
      />
      <div className="flex flex-col items-start justify-start py-5 px-0 box-border gap-[18px_0px] min-w-[278px] mq525:flex-1">
        <h1 className="m-0 w-[276px] relative text-inherit tracking-[-0.02em] leading-[115%] font-bold font-inherit inline-block z-[1]">
          Build your own team library
        </h1>
        <div className="w-[278px] relative text-[14px] tracking-[-0.01em] leading-[24px] text-gray-200 inline-block z-[1]">
          Don’t reinvent the wheel with every design. Team libraries let you
          share styles and components across files, with everyone on your team.
        </div>
      </div>
    </div>
  );
};

export default IPhoneSE;
