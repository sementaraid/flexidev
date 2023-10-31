import { getStarShip } from "@/core/api/starship";
import { Starship } from "@/core/types/starship";
import { UseQueryResult, useQuery } from "@tanstack/react-query";

const useQueryGetStarship: (id: number) => {
  query: UseQueryResult<Starship, Error>;
} = (id: number) => {
  const query = useQuery({
    queryKey: ["get-starship", id],
    queryFn: () => getStarShip({ id }),
    enabled: !!id,
  });
  return {
    query,
  };
};

export { useQueryGetStarship };
