import { getFilms } from "@/core/api/film";
import { Film } from "@/core/types/film";
import { UseQueryResult, useQuery } from "@tanstack/react-query";

const useQueryGetFilm: (id: number) => {
  query: UseQueryResult<Film, Error>;
} = (id: number) => {
  const query = useQuery({
    queryKey: ["get-films", id],
    queryFn: () => getFilms({ id }),
    enabled: !!id,
  });
  return {
    query,
  };
};

export { useQueryGetFilm };
