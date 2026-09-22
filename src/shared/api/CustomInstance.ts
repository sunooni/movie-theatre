import axios from "axios";
import type { AxiosRequestConfig } from "axios";

export const AXIOS_INSTANCE = axios.create({
  baseURL: "https://api.themoviedb.org",
});

export const customInstance = <T>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig,
): Promise<T> => {
  const source = axios.CancelToken.source();

  const promise = AXIOS_INSTANCE({
    ...config,
    ...options,

    params: {
      api_key: import.meta.env.VITE_TMDB_API_KEY,
      language: "ru-RU",
      ...config.params,
      ...options?.params,
    },

    cancelToken: source.token,
  }).then(({ data }) => data);

  //@ts-ignore
  promise.cancel = () => {
    source.cancel("Query was cancelled");
  };

  return promise;
};
