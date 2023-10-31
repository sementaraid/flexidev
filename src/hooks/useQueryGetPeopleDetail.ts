import {  getPeopleDetail } from "@/core/api/people";
import { GetPeopleDetailResponse } from "@/core/types/people";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const useQueryGetPeopleDetail: () => {
  query: UseQueryResult<GetPeopleDetailResponse, Error>;
} = () => {
  const params = useParams<{id: string}>();


  const query = useQuery({
    queryKey: ["get-people", params.id],
    queryFn: () => getPeopleDetail({id: parseInt(params.id ?? "0")}),
    enabled: !!params.id
  });
  return {
    query,
  };
};

export { useQueryGetPeopleDetail };
