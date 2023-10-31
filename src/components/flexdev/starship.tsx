import { Card, CardContent } from "@/components/ui/card";
import { useQueryGetStarship } from "@/hooks/useQueryGetStarship";
import { Fragment } from "react";

export function Starship({ url }: { url: string }) {
  const parts = url.split("/");
  const id = parseInt(parts[parts.length - 2]);

  const { query } = useQueryGetStarship(id);
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
