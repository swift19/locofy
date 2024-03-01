import { FunctionComponent } from "react";

const Headingsection: FunctionComponent = () => {
  return (
    <div className="w-[685px] flex flex-row items-center justify-center tracking-[normal]">
      <section className="flex-1 bg-white flex flex-row items-center justify-start py-0 pr-3.5 pl-0 box-border gap-[0px_18px] max-w-full text-left text-xl text-black font-inter mq550:flex-wrap mq550:pl-3.5 mq550:pt-3.5 mq550:pb-3.5 mq550:box-border">
        <img
          className="h-[492px] w-[685px] relative hidden min-h-[492px] max-w-full"
          alt=""
          src="/background.svg"
        />
        <div className="flex-1 bg-gray-100 flex flex-col items-center justify-start p-8 box-border gap-[24px_0px] min-w-[261px] max-w-full z-[1] mq450:pt-[21px] mq450:pb-[21px] mq450:box-border">
          <div className="w-[401px] h-[492px] relative bg-gray-100 hidden max-w-full" />
          <div className="self-stretch flex flex-col items-start justify-start gap-[8px_0px]">
            <h2 className="m-0 relative text-inherit tracking-[-0.02em] leading-[32px] font-bold font-inherit z-[2] mq450:text-base mq450:leading-[26px]">
              Use components
            </h2>
            <div className="w-[337px] relative text-2xs tracking-[0.01em] leading-[16px] text-gray-200 whitespace-pre-wrap inline-block z-[2]">
              Drag and drop components onto your canvas from the Assets panel.
              If you’re on an Education, Professional, or Organization team, you
              can publish them for team members to use across their own files.
            </div>
          </div>
          <img
            className="self-stretch h-[300px] relative max-w-full overflow-hidden shrink-0 object-cover z-[2]"
            loading="lazy"
            alt=""
            src="/09@2x.png"
          />
        </div>
        <div className="h-[244px] flex flex-col items-start justify-start min-w-[252px] text-center text-2xs text-dodgerblue mq550:flex-1">
          <div className="flex flex-col items-center justify-start gap-[17px_0px]">
            <b className="w-[252px] relative tracking-[0.01em] leading-[16px] inline-block z-[1]">
              Drag the correct cursor component over these buttons to show
              default and hover states
            </b>
            <img
              className="w-[7.4px] h-[30px] relative object-contain z-[1]"
              loading="lazy"
              alt=""
              src="/arrow-17.svg"
            />
            <div className="w-[213px] flex flex-row items-start justify-between py-0 px-5 box-border gap-[20px] text-left text-xs text-white">
              <div className="rounded-981xl bg-skyblue flex flex-row items-center justify-center py-[11px] pr-3.5 pl-3 z-[1]">
                <div className="h-[38px] w-[68px] relative rounded-981xl bg-skyblue hidden" />
                <div className="relative leading-[16px] font-medium z-[2]">
                  Default
                </div>
              </div>
              <div className="rounded-981xl bg-steelblue flex flex-row items-center justify-center py-[11px] pr-3.5 pl-[11px] z-[1]">
                <div className="h-[38px] w-[61px] relative rounded-981xl bg-steelblue hidden" />
                <div className="relative leading-[16px] font-medium z-[2]">
                  Hover
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Headingsection;
