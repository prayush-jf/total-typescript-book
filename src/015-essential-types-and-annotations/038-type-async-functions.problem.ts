import { Expect, Equal } from "@total-typescript/helpers";

type fetchFuncType = () => Promise<number>;

const fetchData: fetchFuncType = async () => {
  const response = await fetch("https://api.example.com/data");
  const data = await response.json();
  return data;
};

const example = async () => {
  const data = await fetchData();

  type test = Expect<Equal<typeof data, number>>;
};
