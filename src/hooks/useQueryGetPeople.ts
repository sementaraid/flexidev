import { getPeople } from "@/core/api/people";
import { GetPeopleResponse } from "@/core/types/people";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { useState } from "react";

const useQueryGetPeople: () => {
  query: UseQueryResult<GetPeopleResponse, Error>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  page: number;
} = () => {
  const [page, setPage] = useState<number>(1);
  const query = useQuery({
    queryKey: ["get-people", page],
    queryFn: () => getPeople({page}),
  });
  return {
    query,
    page,
    setPage,
  };
};

export { useQueryGetPeople };
