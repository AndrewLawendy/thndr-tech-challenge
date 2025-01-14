import { restClient } from "@polygon.io/client-js";

const polygonClient = restClient(import.meta.env.VITE_POLY_API_KEY);

export default polygonClient;
