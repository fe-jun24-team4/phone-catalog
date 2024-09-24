export type Product = {
  id: number;
  itemId: string;

  name: string;
  category: string;
  image: string;

  price: number;
  fullPrice: number;
  year: number;
  rating: number;
  sold: number;

  screen: string;
  capacity: string;
  color: string;
  ram: string;
};

export type ProductDetails = {
  id: string;
  namespaceId: string;

  name: string;
  category: string;

  priceRegular: number;
  priceDiscount: number;

  capacityAvailable: string[];
  capacity: string;

  colorsAvailable: string[];
  color: string;

  images: string[];

  description: {
    title: string;
    text: string[];
  }[];

  screen: string;
  resolution: string;
  processor: string;
  ram: string;
  cell: string[];
  zoom: string;
  camera: string;
};
