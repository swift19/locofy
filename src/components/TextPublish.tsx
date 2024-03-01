import { FunctionComponent } from "react";

const TextPublish: FunctionComponent = () => {
  return (
    <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[0px_24px] text-left text-2xs text-gray-200 font-inter">
      <div className="flex-1 flex flex-col items-start justify-start gap-[24px_0px] min-w-[194px]">
        <div className="self-stretch flex flex-col items-center justify-center relative">
          <div className="w-[298px] relative tracking-[0.01em] leading-[16px] whitespace-pre-wrap inline-block z-[1]">
            To share the new styles and components you created in this file with
            team members, you need to publish this file. Click on in the Assets
            panel to the top left.
          </div>
          <div className="w-5 h-[13px] absolute !m-[0] bottom-[2px] left-[69px]">
            <img
              className="absolute top-[1px] left-[0px] w-[18.5px] h-[12.2px] z-[2]"
              loading="lazy"
              alt=""
              src="/icon4.svg"
            />
            <div className="absolute top-[0px] left-[14px] rounded-80xl bg-cornflowerblue box-border w-2.5 h-2.5 z-[3] border-[2px] border-solid border-white" />
          </div>
        </div>
        <img
          className="self-stretch h-[252px] relative max-w-full overflow-hidden shrink-0 object-cover z-[1]"
          loading="lazy"
          alt=""
          src="/10@2x.png"
        />
      </div>
      <div className="flex-1 flex flex-col items-start justify-start gap-[24px_0px] min-w-[194px]">
        <div className="w-[298px] relative tracking-[0.01em] leading-[16px] inline-block z-[1]">
          <span>{`Then, click on `}</span>
          <b>Publish</b>
          <span>{` next to the current file. You’ll have a chance to review your components, styles, and to add a description for your updates. `}</span>
        </div>
        <img
          className="self-stretch h-[252px] relative max-w-full overflow-hidden shrink-0 object-cover z-[1]"
          loading="lazy"
          alt=""
          src="/10-1@2x.png"
        />
      </div>
    </div>
  );
};

export default TextPublish;
