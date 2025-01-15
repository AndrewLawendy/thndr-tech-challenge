export const stockTypeColors: {
  [key: string]: { color: string; label: string };
} = {
  CS: {
    color: "bg-emerald-100 text-emerald-800 border-emerald-200",
    label: "Common Stock",
  },
  ETF: {
    color: "bg-purple-100 text-purple-800 border-purple-200",
    label: "ETF",
  },
  ETS: {
    color: "bg-blue-100 text-blue-800 border-blue-200",
    label: "ETS",
  },
  ADRC: {
    color: "bg-amber-100 text-amber-800 border-amber-200",
    label: "ADR",
  },
  WARRANT: {
    color: "bg-red-100 text-red-800 border-red-200",
    label: "Warrant",
  },
  UNIT: {
    color: "bg-indigo-100 text-indigo-800 border-indigo-200",
    label: "Unit",
  },
  PFD: {
    color: "bg-pink-100 text-pink-800 border-pink-200",
    label: "Preferred",
  },
  DEFAULT: {
    color: "bg-gray-100 text-gray-800 border-gray-200",
    label: "Other",
  },
};
