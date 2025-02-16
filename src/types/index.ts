type CarBattery = {
  id: string;
  imageUrl: string;
  name: string;
  count: number;
  size: {
    length: number;
    width: number;
    height: number;
  };
  weight: string;
  capacity: string;
  voltage: string;
  cca: string;
};

export type { CarBattery };
