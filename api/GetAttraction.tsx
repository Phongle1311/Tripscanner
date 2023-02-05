import axios from "axios";

interface AttractionsData {
  name?: string;
  location_string?: string;
  photo?: any;
}
export default AttractionsData;

interface GetAttractionDataParams {
  locationId?: string;
  lang?: string;
  lunit?: "km" | "mi";
  sort?: "recommended" | "ranking";
  currency?: string;
  offset?: string;
}

export const getAttractionData = async ({
  locationId,
  lang,
  lunit,
  sort,
  currency,
  offset,
}: GetAttractionDataParams): Promise<AttractionsData[] | null> => {
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

    // console.log(response);
    // console.log(response?.data);
    return response?.data?.data;
  } catch (error) {
    console.warn(error);
    return null;
  }
};
