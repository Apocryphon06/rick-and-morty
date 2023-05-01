const Card = ({ data }: any) => {
  return (
    <div className="bg-gray-700 rounded shadow-xl flex lg:flex-row gap-5 items-center ">
      <img
        className="w-[150px] h-[150px] rounded-full p-3"
        src={data.image}
        alt={data.image}
      />
      <div className="lg:w-[320px] w-full">
        <p className="lg:text-xl text-base font-bold tracking-wide">
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
        <p className="text-sm font-medium"> {data.location.name}</p>
        <p className="text-[#808080] text-sm">First seen in:</p>
        <p className="text-sm font-medium"> {data.origin.name}</p>
      </div>
    </div>
  );
};

export default Card;
