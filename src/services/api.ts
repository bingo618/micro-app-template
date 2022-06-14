import { apiFunc } from "yocon-lib";

const apiMap = {
    /**
     * use:
     * doc:
     */
    getUser: "GET ****",
};

const api: Record<
    keyof typeof apiMap,
    <T, P>(data?: T) => Promise<P>
> = apiFunc(apiMap);

export default api;
