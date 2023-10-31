import { getVehicles } from "@/core/api/vehicle";
import { Vehicle } from "@/core/types/vehicle";
import { UseQueryResult, useQuery } from "@tanstack/react-query";

const useQueryGetVehicle: (id: number) => {
  query: UseQueryResult<Vehicle, Error>;
} = (id: number) => {
  const query = useQuery({
    queryKey: ["get-vehicles", id],
    queryFn: () => getVehicles({ id }),
    enabled: !!id,
  });
  return {
    query,
  };
};

export { useQueryGetVehicle };
