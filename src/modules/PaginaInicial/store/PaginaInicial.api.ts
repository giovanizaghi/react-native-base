import { getHttp } from "../../../api";

let http = getHttp("https://www.metaweather.com");

const apiDef = {
    getAllPeople() {
        return http.get(`/api/location/location/9807`);
    }
};

export default apiDef;