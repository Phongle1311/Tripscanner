import axios from "axios";
import { GetHotelsDataParams, ResponseData } from "./GetData";

export const getHotelsData = async ({
  locationId,
  lang,
  order,
  limit,
  currency,
  offset,
  sort,
}: GetHotelsDataParams): Promise<ResponseData[] | null> => {
  try {
    const response = await axios.get(
      "https://travel-advisor.p.rapidapi.com/hotels/list",
      {
        params: {
          adults: "1",
          rooms: "1",
          nights: "2",
          order: order || "asc",
          limit: limit || "30",
          sort: sort || "recommended",
          location_id: locationId || "298571",
          currency: currency || "USD",
          lang: lang || "en_US",
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
