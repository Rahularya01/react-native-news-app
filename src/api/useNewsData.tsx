import { AxiosError } from "axios";
import { UseQueryOptions, UseQueryResult, useQuery } from "react-query";
import http from "../lib/http";

export const useNewsData = (
  queryOptions: UseQueryOptions<any, any>
): UseQueryResult<NewsResponse, AxiosError> => {
  return useQuery({
    queryKey: "news",
    queryFn: async () => {
      const response = await http.get("/everything");
      return response.data;
    },
    ...queryOptions,
  });
};
