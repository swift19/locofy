import { FunctionComponent } from "react";

const BaseFrame: FunctionComponent = () => {
  return (
    <div className="w-[685px] overflow-hidden flex flex-row items-center justify-center tracking-[normal]">
      <section className="flex-1 bg-white flex flex-row items-start justify-start gap-[0px_46px] max-w-full text-left text-xl text-black font-inter mq650:gap-[0px_46px] mq625:flex-wrap">
        <img
          className="h-[492px] w-[685px] relative hidden min-h-[492px] max-w-full"
          alt=""
          src="/background.svg"
        />
        <div className="h-[492px] w-[401px] bg-gray-100 flex flex-col items-center justify-start p-8 box-border gap-[24px_0px] min-w-[401px] max-w-full z-[1] mq450:pt-[21px] mq450:pb-[21px] mq450:box-border mq450:min-w-full mq625:flex-1">
          <div className="w-[401px] h-[492px] relative bg-gray-100 hidden max-w-full" />
          <div className="self-stretch flex flex-col items-start justify-start gap-[8px_0px]">
            <h2 className="m-0 relative text-inherit tracking-[-0.02em] leading-[32px] font-bold font-inherit z-[2] mq450:text-base mq450:leading-[26px]">
              Edit text styles
            </h2>
            <div className="self-stretch h-12 relative text-2xs text-gray-200">
              <div className="absolute top-[0px] left-[0px] tracking-[0.01em] leading-[16px] whitespace-pre-wrap inline-block w-full h-full z-[2]">
                Just like published color styles, published text styles are
                shared across your team. Change text styles by selecting a text
                layer with the style and clicking on in the panel to the right.
              </div>
              <img
                className="absolute top-[33px] left-[157px] w-3 h-3.5 z-[3]"
                loading="lazy"
                alt=""
                src="/icon.svg"
              />
            </div>
          </div>
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover z-[2]"
            loading="lazy"
            alt=""
            src="/05@2x.png"
          />
        </div>
        <div className="flex flex-col items-start justify-start pt-[101px] px-0 pb-0 box-border min-w-[192px] text-center text-2xs text-dodgerblue mq625:flex-1">
          <div className="flex flex-col items-center justify-start gap-[16px_0px]">
            <b className="relative tracking-[0.01em] leading-[16px] z-[1]">
              <p className="m-0">We’re published already!</p>
              <p className="m-0">Edit us to be your team’s text styles</p>
            </b>
            <img
              className="w-[7.4px] h-[30px] relative object-contain z-[1]"
              loading="lazy"
              alt=""
              src="/arrow1.svg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default BaseFrame;
