import { Starship } from "@/core/types/starship";
import { axios } from "@/lib/axios";

export const getStarShip: ({
  id,
}: {
  id: number;
}) => Promise<Starship> = async ({ id }: { id: number }) => {
  return axios<unknown, Starship>({
    url: `/starships/${id}`,
    method: "get"
  });
};
