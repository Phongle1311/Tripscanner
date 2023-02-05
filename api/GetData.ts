import { getAttractionData } from "./GetAttraction";
import { getHotelsData } from "./GetHotels";
import { getRestaurantsData } from "./GetRestaurants";

export interface GetRestaurantsDataParams {
  locationId?: string;
  lang?: string;
  lunit?: "km" | "mi";
  limit?: number;
  currency?: string;
  offset?: string;
}

export interface GetHotelsDataParams {
  locationId?: string;
  lang?: string;
  order?: "asc" | "desc";
  limit?: number;
  currency?: string;
  offset?: string;
  sort?: "recommended" | "popularity" | "price";
}
export interface GetAttractionDataParams {
  locationId?: string;
  lang?: string;
  lunit?: "km" | "mi";
  sort?: "recommended" | "ranking";
  currency?: string;
  offset?: string;
}

export interface ResponseData {
  name?: string;
  location_string?: string;
  photo?: any;
}

export interface getDataParams {
  type: "attraction" | "hotel" | "restaurant" | "flight";
  attractionParams?: GetAttractionDataParams;
  hotelParams?: GetHotelsDataParams;
  restaurantParams?: GetRestaurantsDataParams;
}

export const getData = async ({
  type,
  attractionParams,
  hotelParams,
  restaurantParams,
}: getDataParams): Promise<ResponseData[] | null> => {
  if (type === "attraction")
    return await getAttractionData(attractionParams || {});
  if (type === "hotel") return await getHotelsData(hotelParams || {});
  if (type === "restaurant")
    return await getRestaurantsData(restaurantParams || {});
  return null;
};
