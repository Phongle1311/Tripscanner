import axios from "axios";
import { GetRestaurantsDataParams, ResponseData } from "./GetData";

export const getRestaurantsData = async ({
  locationId,
  lang,
  lunit,
  limit,
  currency,
  offset,
}: GetRestaurantsDataParams): Promise<ResponseData[] | null> => {
  try {
    const response = await axios.get(
      "https://travel-advisor.p.rapidapi.com/restaurants/list",
      {
        params: {
          restaurant_tagcategory: "10591",
          restaurant_tagcategory_standalone: "10591",
          limit: limit || "30",
          open_now: "false",
          location_id: locationId || "298571",
          currency: currency || "USD",
          lang: lang || "en_US",
          lunit: lunit || "km",
          offset: offset || "0",
        },
        headers: {
          "X-RapidAPI-Key":
            "a72612d222msh4cf13feaef82d59p1e517ejsn6544d21160f6",
          "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
        },
      }
    );

    return response?.data?.data;
  } catch (error) {
    console.warn(error);
    return null;
  }
};
