type LargeContentProps = {
  title: string;
  content1: string;
  content2?: string;
  content3?: string;
  content4?: string;
  content5?: string;
  content6?: string;
  content7?: string;
  content8?: string;
};

export const LargeContent = ({
  title,
  content1,
  content2,
  content3,
  content4,
  content5,
  content6,
  content7,
  content8,
}: LargeContentProps) => {
  return (
    <div className="flex flex-col text-black">
      <div className="text-4xl font-sans font-medium">{title}</div>
      <div className="mt-4 text-lg font-sans font-normal">{content1}</div>
      <div className="mt-2 text-lg font-sans font-normal">{content2}</div>
      <div className="mt-2 text-lg font-sans font-normal">{content3}</div>
      <div className="mt-2 text-lg font-sans font-normal">{content4}</div>
      <div className="mt-2 text-lg font-sans font-normal">{content5}</div>
      <div className="mt-2 text-lg font-sans font-normal">{content6}</div>
      <div className="mt-2 text-lg font-sans font-normal">{content7}</div>
      <div className="mt-2 text-lg font-sans font-normal">{content8}</div>
    </div>
  );
};
