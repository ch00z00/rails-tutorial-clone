import Image from 'next/image';

export const Header = () => {
  return (
    <header className="w-[100vw] bg-header h-[84px] flex justify-around items-center font-bold text-white">
      <div className="flex justify-between items-center gap-5">
        <Image src="/logo.png" width={68} height={68} alt="Picture of the author" />
        <div className="text-4xl">Ruby on Railsチュートリアル</div>
      </div>
      <div className="flex justify-between items-center gap-4 divide-x-2 divide-solid divide-divider">
        <div>アカウント ▼</div>
        <div className="text-3xl fill-white">▲</div>
      </div>
    </header>
  );
};
