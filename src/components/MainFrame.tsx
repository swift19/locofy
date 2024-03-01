import { FunctionComponent } from "react";

const MainFrame: FunctionComponent = () => {
  return (
    <div className="w-[685px] flex flex-row items-center justify-center tracking-[normal]">
      <section className="flex-1 bg-white flex flex-row items-start justify-start gap-[0px_57px] max-w-full text-left text-xl text-black font-inter mq625:flex-wrap mq625:gap-[0px_57px]">
        <img
          className="h-[492px] w-[685px] relative hidden min-h-[492px] max-w-full"
          alt=""
          src="/background.svg"
        />
        <div className="w-[401px] bg-gray-100 flex flex-col items-center justify-start p-8 box-border gap-[24px_0px] min-w-[401px] max-w-full z-[1] mq450:pt-[21px] mq450:pb-[21px] mq450:box-border mq450:min-w-full mq625:flex-1">
          <div className="w-[401px] h-[492px] relative bg-gray-100 hidden max-w-full" />
          <div className="flex flex-col items-start justify-start gap-[8px_0px]">
            <h2 className="m-0 relative text-inherit tracking-[-0.02em] leading-[32px] font-bold font-inherit z-[2] mq450:text-base mq450:leading-[26px]">
              Use text styles
            </h2>
            <div className="flex flex-col items-center justify-start min-h-[32px] text-2xs text-gray-200">
              <div className="w-[337px] relative tracking-[0.01em] leading-[16px] whitespace-pre-wrap inline-block z-[3]">
                Select a text layer and click on next to the Text property to
                use text styles.
              </div>
              <img
                className="w-[9px] h-[9px] relative z-[2] mt-[-12px]"
                loading="lazy"
                alt=""
                src="/icon2.svg"
              />
            </div>
          </div>
          <img
            className="self-stretch h-[332px] relative max-w-full overflow-hidden shrink-0 object-cover z-[2]"
            loading="lazy"
            alt=""
            src="/07@2x.png"
          />
        </div>
        <div className="w-40 flex flex-col items-start justify-start pt-[101px] px-0 pb-0 box-border min-w-[160px] text-center text-2xs text-dodgerblue mq625:flex-1">
          <div className="self-stretch flex flex-col items-center justify-start gap-[16px_0px]">
            <b className="self-stretch relative tracking-[0.01em] leading-[16px] z-[1]">
              Give me a text style
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

export default MainFrame;
