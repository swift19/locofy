import { FunctionComponent } from "react";
import TextPublish from "../components/TextPublish";

const FiinishStoreSetUp: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-gray-100 flex flex-col items-center justify-start py-8 px-5 box-border gap-[24px_0px]">
      <div className="w-[685px] h-[492px] relative bg-gray-100 hidden" />
      <section className="self-stretch flex flex-col items-start justify-start py-0 pr-[13px] pl-3 gap-[8px_0px] text-left text-xl text-black font-inter">
        <h2 className="m-0 relative text-inherit tracking-[-0.02em] leading-[32px] font-bold font-inherit z-[1]">
          Publish your Team Library
        </h2>
        <TextPublish />
      </section>
      <footer className="w-[621px] flex flex-row items-start justify-start p-3 box-border relative gap-[6px] z-[1] text-left text-2xs text-gray-200 font-inter">
        <img
          className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-10xs max-w-full overflow-hidden max-h-full"
          alt=""
          src="/tip.svg"
        />
        <img
          className="h-4 w-4 relative min-h-[16px] z-[1]"
          loading="lazy"
          alt=""
          src="/icon-11.svg"
        />
        <div className="w-[482px] relative tracking-[0.01em] leading-[16px] inline-block shrink-0 z-[1]">
          <span>{`Only `}</span>
          <span className="font-semibold">{`Education, Professional, or Organization `}</span>
          <span>teams can publish components.</span>
        </div>
      </footer>
    </div>
  );
};

export default FiinishStoreSetUp;
