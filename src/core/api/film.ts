import { axios } from "@/lib/axios";
import { Film } from "@/core/types/film";

export const getFilms: ({
  id,
}: {
  id: number;
}) => Promise<Film> = async ({ id }: { id: number }) => {
  return axios<unknown, Film>({
    url: `/films/${id}`,
    method: "get"
  });
};
