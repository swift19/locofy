import { FunctionComponent } from "react";

const Frame: FunctionComponent = () => {
  return (
    <div className="w-[685px] flex flex-row items-center justify-center tracking-[normal]">
      <section className="flex-1 bg-white flex flex-row items-start justify-start gap-[0px_42px] max-w-full text-left text-xl text-black font-inter mq650:gap-[0px_42px] mq625:flex-wrap">
        <img
          className="h-[492px] w-[685px] relative hidden min-h-[492px] max-w-full"
          alt=""
          src="/background.svg"
        />
        <div className="h-[492px] w-[401px] bg-gray-100 flex flex-col items-center justify-start p-8 box-border gap-[24px_0px] min-w-[401px] max-w-full z-[1] mq450:pt-[21px] mq450:pb-[21px] mq450:box-border mq450:min-w-full mq625:flex-1">
          <div className="w-[401px] h-[492px] relative bg-gray-100 hidden max-w-full" />
          <div className="self-stretch flex flex-col items-start justify-start gap-[8px_0px]">
            <h2 className="m-0 relative text-inherit tracking-[-0.02em] leading-[32px] font-bold font-inherit z-[2] mq450:text-base mq450:leading-[26px]">
              Create text styles
            </h2>
            <div className="self-stretch h-12 relative text-2xs text-gray-200">
              <img
                className="absolute top-[18.5px] left-[256.5px] w-[11px] h-[11px] z-[2]"
                loading="lazy"
                alt=""
                src="/icon1.svg"
              />
              <div className="absolute top-[0px] left-[0px] tracking-[0.01em] leading-[16px] whitespace-pre-wrap inline-block w-full h-full z-[3]">
                To create new text styles, first select a text layer and format
                it with the type you want as a style. Then, click on in the text
                styles menu.
              </div>
            </div>
          </div>
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover z-[2]"
            loading="lazy"
            alt=""
            src="/06-1@2x.png"
          />
        </div>
        <div className="flex flex-col items-start justify-start pt-[101px] px-0 pb-0 box-border min-w-[201px] text-center text-2xs text-dodgerblue mq625:flex-1">
          <div className="flex flex-col items-center justify-start gap-[16px_0px]">
            <b className="w-[201px] relative tracking-[0.01em] leading-[16px] inline-block z-[1]">
              Edit us to be your team’s text styles and create some more styles
            </b>
            <img
              className="w-0 h-[42px] relative object-contain z-[1]"
              loading="lazy"
              alt=""
              src="/arrow-11.svg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Frame;
