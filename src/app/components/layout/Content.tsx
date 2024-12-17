type ContentProps = {
  title: string;
  content1: string;
  content2?: string;
  content3?: string;
};

export const Content = ({ title, content1, content2, content3 }: ContentProps) => {
  return (
    <div className="flex flex-col text-black">
      <div className="text-4xl font-sans font-medium">{title}</div>
      <div className="mt-4 text-lg font-sans font-normal">{content1}</div>
      <div className="mt-2 text-lg font-sans font-normal">{content2}</div>
      <div className="mt-2 text-lg font-sans font-normal">{content3}</div>
    </div>
  );
};
