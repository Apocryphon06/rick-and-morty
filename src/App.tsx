import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";
import Pagination from "@mui/material/Pagination";

const App = () => {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);

  const getData = () => {
    axios
      .get(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then((response: any) => {
        console.log(response.data.info, "data from server");
        let { info } = response.data;
        setTotal(info.pages);
        let { results } = response.data;
        setData(results);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, [page]);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <div>
      <div className="bg-white">
        <p className="lg:text-7xl text-3xl font-bold text-center py-10 text-[#353535]">
          Rick and Morty
        </p>
      </div>

      <div className="flex flex-col justify-center items-center p-5">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
          {data.map((item) => (
            <Card key={item} data={item} />
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center my-5">
        <Pagination
          page={page}
          count={total}
          variant="outlined"
          onChange={handleChange}
          shape={"rounded"}
        />
      </div>

      {/* <div className="h-screen w-screen snap-y snap-mandatory overflow-scroll">
        <div className="h-screen w-screen snap-start flex justify-center items-center">
          <img src="https://picsum.photos/500" alt="image1" />
        </div>
        <div className="h-screen w-screen snap-start flex justify-center items-center">
          <img src="https://picsum.photos/500" alt="image1" />
        </div>
        <div className="h-screen w-screen snap-start flex justify-center items-center">
          <img src="https://picsum.photos/500" alt="image1" />
        </div>
      </div>

      <div className="text-8xl h-screen w-screen flex justify-center items-center bg-amber-300 text-[#323232] font-medium uppercase">
        hello world
      </div> */}
    </div>
  );
};

export default App;
