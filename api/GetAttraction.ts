import axios from "axios";
import { GetAttractionDataParams, ResponseData } from "./GetData";

export const getAttractionData = async ({
  locationId,
  lang,
  lunit,
  sort,
  currency,
  offset,
}: GetAttractionDataParams): Promise<ResponseData[] | null> => {
  try {
    const response = await axios.get(
      "https://travel-advisor.p.rapidapi.com/attractions/list",
      {
        params: {
          location_id: locationId || "298571",
          currency: currency || "USD",
          lang: lang || "en_US",
          lunit: lunit || "km",
          sort: sort || "recommended",
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
