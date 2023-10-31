import { Vehicle } from "@/core/types/vehicle";
import { axios } from "@/lib/axios";

export const getVehicles: ({
  id,
}: {
  id: number;
}) => Promise<Vehicle> = async ({ id }: { id: number }) => {
  return axios<unknown, Vehicle>({
    url: `/vehicles/${id}`,
    method: "get"
  });
};
