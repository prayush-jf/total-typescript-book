import { Expect, Equal } from "@total-typescript/helpers";

import { expect, it } from "vitest";

const concatName = (first: string, last = "Pocock") => {
  if (!last) {
    return first;
  }

  return `${first} ${last}`;
};

it("should return the full name", () => {
  const result = concatName("John", "Doe");

  type test = Expect<Equal<typeof result, string>>;

  expect(result).toEqual("John Doe");
});

it("should return the first name", () => {
  const result = concatName("John");

  type test = Expect<Equal<typeof result, string>>;

  expect(result).toEqual("John Pocock");
});

type Mapper = (item: string) => number;

const mapOverItems = (items: string[], map: Mapper) => {
  return items.map(map);
};

let arrayStringsToNumbers = mapOverItems(
  ["2", "43", "everything"],
  (item: string) => Number(item)
);
