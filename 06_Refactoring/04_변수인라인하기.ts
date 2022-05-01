import { Order } from "./03_변수추출하기";

const checkBasePrice = (anOrder: Order) => {
  // let basePrice = anOrder.basePrice;
  // return basePrice > 100;
  return anOrder.basePrice > 100;
};
