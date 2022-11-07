interface IlineFinal {
  className?: string;
}

export const LineFinal = ({ className }: IlineFinal) => {
  return (
    <div className={className}>
      <div className="flex justify-start items-start w-[58px] flex-wrap rounded">
        <p className="w-[55px] h-[1.1px] bg-gray-100 mb-[200px] mobile:mb-[165px] mobile:mt-[40px] mobile:w-[65px]"></p>
        <p className="w-[55px] h-[1.1px] bg-gray-100 mt-[180px] mobile:mt-[130px] mobile:mb-[40px] mobile:w-[65px]"></p>
      </div>
      <div className="-mx-[55px] rounded">
        <p className="w-[225px] h-[1.1px] bg-gray-100 rotate-90 mb-[77px] -mx-[60px] mobile:w-[145px] mobile:-mx-[15px]"></p>
        <p className="w-[48px] h-[1.1px] bg-gray-100 mx-[55px]"></p>
        <p className="w-[225px] h-[1.1px] bg-gray-100 rotate-90 mt-[77px] -mx-[60px] mobile:w-[145px] mobile:-mx-[15px]"></p>
      </div>
    </div>
  );
};
