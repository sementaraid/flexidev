import { axios } from "@/lib/axios";

export const getPeople = async () => {
  return axios({
    url: "/people",
    method: "get",
  });
};
