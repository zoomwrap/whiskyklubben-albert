export const whiskies = [
  { name: "Springbank 15", distillery: "Springbank", rating: "9,1/10" },
  { name: "Kilkerran 16", distillery: "Kilkerran", rating: "8,8/10" },
  { name: "Longrow Red", distillery: "Springbank", rating: "8,6/10" },
  { name: "Hazelburn 10", distillery: "Springbank", rating: "8,4/10" },
];

export type Whisky = (typeof whiskies)[number];
