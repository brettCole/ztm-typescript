import { z } from "zod";
import type { AxiosStatic } from "axios";

const locationInfoSchema = z.object({
    lat: z.string(),
    lon: z.string(),
    display_name: z.string(),
})

export type LocationInfo = z.infer<typeof locationInfoSchema>;

export async function fetchLocationData(
    axios: AxiosStatic,
    apiUrl: string,
    location: string,
): Promise<LocationInfo> {
    //const GEOCODE_API_URL = "https://geocode.maps.co/search";
    const options = {
        method: "GET",
        url: apiUrl,
        params: {
            q: location
        }
    }
    const response = await axios.request(options);

    if (response.status === 200) {
        try {
            return locationInfoSchema.parse(response.data[0]);
        } catch (err) {
            console.log(err);
            throw new Error(`Unable to find location information for ${location}`);
        }
    } else {
        throw new Error("Failed to fetch location data");
    }
}