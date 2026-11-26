export type UnitStatus = "Available" | "Sold" | "Pending";

export interface Unit {
  id: string;
  floor: string;
  number: string;
  price: string;
  status: UnitStatus;
  plans: string[];
  features: string;
  finish: string;
  image: string;
}

export const units: Unit[] = [
  {
    id: "S-101",
    floor: "Sky",
    number: "S-101",
    price: "$3,200,000",
    status: "Available",
    plans: [
      "2 bed · 2 bath · 2,100 sq ft",
      "2 bed · 2.5 bath · 2,300 sq ft",
    ],
    features: "Floor-to-ceiling windows · Private terrace · Smart home",
    finish: "Classic",
    image: "https://picsum.photos/seed/interior-1/800/600",
  },
  {
    id: "S-102",
    floor: "Sky",
    number: "S-102",
    price: "$3,250,000",
    status: "Available",
    plans: ["2 bed · 2 bath · 2,100 sq ft"],
    features: "Corner views · Private elevator · Wine storage",
    finish: "Modern",
    image: "https://picsum.photos/seed/interior-2/800/600",
  },
  {
    id: "M-201",
    floor: "Mid",
    number: "M-201",
    price: "$2,400,000",
    status: "Available",
    plans: ["2 bed · 2 bath · 1,600 sq ft"],
    features: "Open layout · Private balcony · Storage unit",
    finish: "Classic",
    image: "https://picsum.photos/seed/interior-3/800/600",
  },
  {
    id: "B-301",
    floor: "Base",
    number: "B-301",
    price: "$1,900,000",
    status: "Available",
    plans: [
      "1 bed · 1 bath · 1,100 sq ft",
      "2 bed · 1 bath · 1,400 sq ft",
    ],
    features: "Ground floor · Private entrance · Garden access",
    finish: "Modern",
    image: "https://picsum.photos/seed/interior-4/800/600",
  },
];

export const floors = [
  {
    id: 1,
    name: "Penthouse",
    units: 2,
    price: "$4,800,000",
    status: "Limited",
    plans: [
      "2 bed · 2.5 bath · 2,800 sq ft",
      "3 bed · 3 bath · 3,200 sq ft",
    ],
    units: [
      { number: "PH-01", status: "Available", price: "$4,800,000" },
      { number: "PH-02", status: "Sold", price: "$4,850,000" },
    ],
  },
  {
    id: 2,
    name: "Sky",
    units: 4,
    price: "$3,200,000",
    status: "In demand",
    plans: ["2 bed · 2 bath · 2,100 sq ft"],
    units: [
      { number: "S-101", status: "Available", price: "$3,200,000" },
      { number: "S-102", status: "Available", price: "$3,250,000" },
      { number: "S-103", status: "Sold", price: "$3,220,000" },
      { number: "S-104", status: "Pending", price: "$3,200,000" },
    ],
  },
  {
    id: 3,
    name: "Mid",
    units: 6,
    price: "$2,400,000",
    status: "Great value",
    plans: ["2 bed · 2 bath · 1,600 sq ft"],
    units: [
      { number: "M-201", status: "Available", price: "$2,400,000" },
      { number: "M-202", status: "Available", price: "$2,450,000" },
      { number: "M-203", status: "Sold", price: "$2,420,000" },
      { number: "M-204", status: "Available", price: "$2,400,000" },
      { number: "M-205", status: "Sold", price: "$2,430,000" },
      { number: "M-206", status: "Available", price: "$2,400,000" },
    ],
  },
  {
    id: 4,
    name: "Base",
    units: 8,
    price: "$1,900,000",
    status: "Popular",
    plans: [
      "1 bed · 1 bath · 1,100 sq ft",
      "2 bed · 1 bath · 1,400 sq ft",
    ],
    units: [
      { number: "B-301", status: "Available", price: "$1,900,000" },
      { number: "B-302", status: "Available", price: "$1,950,000" },
      { number: "B-303", status: "Sold", price: "$1,920,000" },
      { number: "B-304", status: "Available", price: "$1,900,000" },
      { number: "B-305", status: "Sold", price: "$1,930,000" },
      { number: "B-306", status: "Available", price: "$1,900,000" },
      { number: "B-307", status: "Sold", price: "$1,910,000" },
      { number: "B-308", status: "Available", price: "$1,900,000" },
    ],
  },
];
