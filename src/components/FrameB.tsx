import { FunctionComponent } from "react";

const FrameB: FunctionComponent = () => {
  return (
    <div className="flex-1 bg-gray-100 flex flex-col items-center justify-start pt-8 pb-9 pr-[31px] pl-8 box-border gap-[24px_0px] min-w-[261px] max-w-full z-[1] text-left text-xl text-black font-inter mq450:pt-[21px] mq450:pb-[23px] mq450:box-border">
      <div className="w-[401px] h-[492px] relative bg-gray-100 hidden max-w-full" />
      <div className="self-stretch flex flex-col items-start justify-start gap-[8px_0px]">
        <h2 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] leading-[32px] font-bold font-inherit z-[2] mq450:text-base mq450:leading-[26px]">
          Edit team color styles
        </h2>
        <div className="self-stretch h-24 relative text-2xs text-gray-200">
          <div className="absolute top-[0px] left-[0px] tracking-[0.01em] leading-[16px] inline-block w-full h-full z-[2]">
            <p className="m-0">
              Published styles are shared with everyone on the team—they can be
              used by all team members in any of their files. Changing these
              styles will update them everywhere they're used.
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0 whitespace-pre-wrap">
              Change these default colors to your team’s colors by selecting a
              color layer and clicking on in the Design panel to the right.
            </p>
          </div>
          <img
            className="absolute top-[81px] left-[141px] w-3 h-3.5 z-[3]"
            loading="lazy"
            alt=""
            src="/icon.svg"
          />
        </div>
      </div>
      <img
        className="self-stretch h-[264px] relative max-w-full overflow-hidden shrink-0 object-cover z-[2]"
        loading="lazy"
        alt=""
        src="/02@2x.png"
      />
    </div>
  );
};

export default FrameB;
