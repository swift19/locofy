import { FunctionComponent } from "react";

const ChildFrame: FunctionComponent = () => {
  return (
    <div className="w-[401px] bg-gray-100 flex flex-col items-center justify-start p-8 box-border gap-[16px_0px] min-w-[401px] max-w-full z-[1] text-left text-xl text-black font-inter mq450:pt-[21px] mq450:pb-[21px] mq450:box-border mq450:min-w-full mq625:flex-1">
      <div className="w-[401px] h-[492px] relative bg-gray-100 hidden max-w-full" />
      <div className="flex flex-col items-start justify-start pt-0 px-0 pb-2 gap-[8px_0px]">
        <h2 className="m-0 relative text-inherit tracking-[-0.02em] leading-[32px] font-bold font-inherit z-[2] mq450:text-base mq450:leading-[26px]">
          Create color styles
        </h2>
        <div className="flex flex-col items-center justify-center relative text-2xs text-gray-200">
          <div className="w-[337px] relative tracking-[0.01em] leading-[16px] whitespace-pre-wrap inline-block z-[2]">
            To create new styles, select a layer and fill it with the color you
            want as a style. Then click on in the color styles menu.
          </div>
          <img
            className="w-[11px] h-[11px] absolute !m-[0] bottom-[2.5px] left-[159.5px] z-[3]"
            loading="lazy"
            alt=""
            src="/icon1.svg"
          />
        </div>
      </div>
      <img
        className="self-stretch h-[260px] relative max-w-full overflow-hidden shrink-0 object-cover z-[2]"
        loading="lazy"
        alt=""
        src="/03@2x.png"
      />
      <div className="rounded-10xs bg-aliceblue flex flex-row items-start justify-start p-3 box-border gap-[0px_12px] max-w-full z-[2] text-2xs text-gray-200">
        <img
          className="h-14 w-[337px] relative rounded-10xs hidden max-w-full"
          alt=""
          src="/tip.svg"
        />
        <img
          className="h-4 w-4 relative object-cover z-[3]"
          loading="lazy"
          alt=""
          src="/icon-1@2x.png"
        />
        <div className="w-[285px] relative tracking-[0.01em] leading-[16px] inline-block shrink-0 z-[3]">
          <span className="font-semibold">{`Tip: `}</span>
          <span>{`You can group styles together using the naming convention `}</span>
          <span className="font-semibold">Group/Color</span>
          <span>{`. For example: `}</span>
          <span className="font-semibold">Fuschia/100</span>
        </div>
      </div>
    </div>
  );
};

export default ChildFrame;
