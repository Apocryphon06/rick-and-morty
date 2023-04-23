const Card = ({ data }: any) => {
  return (
    <div className="bg-gray-700 rounded shadow-xl flex items-center gap-10 ">
      <img
        className="lg:w-[170px] w-[140px] h-[140px] lg:h-[170px] rounded-tl rounded-bl"
        src={data.image}
        alt={data.image}
      />
      <div className="lg:w-[320px]">
        <p className="lg:text-xl text-lg font-bold tracking-wide">
          {data.name}
        </p>
        <p className={`text-sm `}>
          {" "}
          <div className="flex items-center gap-2">
            {" "}
            <div
              className={`${
                data.status === "Alive"
                  ? "bg-green-600 p-1 rounded-full"
                  : data.status === "Dead"
                  ? "bg-red-600 p-1 rounded-full"
                  : "bg-yellow-600 p-1 rounded-full"
              } `}
            />{" "}
            {data.status} - {data.species}
          </div>
        </p>
        <p className="text-[#808080] text-sm">Last known location:</p>
        <p className="text-base font-medium"> {data.location.name}</p>
        <p className="text-[#808080] text-sm">First seen in:</p>
        <p className="text-base font-medium"> {data.origin.name}</p>
      </div>
    </div>
  );
};

export default Card;
