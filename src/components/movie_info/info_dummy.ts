interface Index {
  key: string;
  label: string;
}

interface Content {
  description: string;
  vocab?: string;
}

interface ComponentData {
  index: Index[];
  content: Content[];
  nowKey: string;
}

const indexForCategory: { [m: string]: Index[] } = {
  history: [
    { key: "a", label: "History 1" },
    { key: "b", label: "History 2" },
    { key: "c", label: "History 3" },
  ],
  genre: [
    { key: "d", label: "Genre 1" },
    { key: "e", label: "Genre 2" },
    { key: "f", label: "Genre 3" },
  ],
  dictionary: [
    { key: "g", label: "Dict 1" },
    { key: "h", label: "Dict 2" },
    { key: "i", label: "Dict 3" },
  ],

};

const contentForIndexKey: {
  [indexKey: string]: Content[];
} = {
  a: [{ description: "Example A1" }],
  b: [{ description: "Example B1" }],
  c: [{ description: "Example C1" }],

  d: [{ description: "Example D1" }],
  e: [{ description: "Example E1" }],
  f: [{ description: "Example F1" }],

  g: [
    { vocab: "Word G1", description: "Example G1" },
    { vocab: "Word G2", description: "Example G2" },
    { vocab: "Word G3", description: "Example G3" },
  ],
  h: [
    { vocab: "Word H1", description: "Example H1" },
    { vocab: "Word H2", description: "Example H2" },
    { vocab: "Word H3", description: "Example H3" },
  ],
  i: [
    { vocab: "Word I1", description: "Example I1" },
    { vocab: "Word I2", description: "Example I2" },
    { vocab: "Word I3", description: "Example I3" },
  ],
};

export { indexForCategory, contentForIndexKey };
export type { ComponentData, Content };
