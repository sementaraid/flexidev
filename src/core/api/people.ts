import { axios } from "@/lib/axios";
import { GetPeopleResponse, GetPeopleDetailResponse } from "@/core/types/people";

export const getPeople: ({
  page,
}: {
  page: number;
}) => Promise<GetPeopleResponse> = async ({ page }: { page: number }) => {
  return axios<unknown, GetPeopleResponse>({
    url: `/people/`,
    method: "get",
    params: {
      page: page,
    },
  });
};



export const getPeopleDetail: ({
  id,
}: {
  id: number;
}) => Promise<GetPeopleDetailResponse> = async ({ id }: { id: number }) => {
  return axios<unknown, GetPeopleDetailResponse>({
    url: `/people/${id}`,
    method: "get"
  });
};
