import { Card, CardContent } from "@/components/ui/card";
import { useQueryGetVehicle } from "@/hooks/useQueryGetVehicles";
import { Fragment } from "react";

export function Vehicle({ url }: { url: string }) {
  const parts = url.split("/");
  const id = parseInt(parts[parts.length - 2]);

  const { query } = useQueryGetVehicle(id);
  return (
    <Card>
      <CardContent className="p-6">
        {!query.isLoading && query.data && (
          <Fragment>
            <p className="text-sm font-semibold">{query.data.name}</p>
            <p className="text-sm">{query.data.model}</p>
          </Fragment>
        )}
      </CardContent>
    </Card>
  );
}
