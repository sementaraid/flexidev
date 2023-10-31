import { Card, CardContent } from "@/components/ui/card";
import { useQueryGetFilm } from "@/hooks/useQueryGetFilms";
import { Fragment } from "react";

export function Film({ url }: { url: string }) {
  const parts = url.split("/");
  const id = parseInt(parts[parts.length - 2]);

  const { query } = useQueryGetFilm(id);
  return (
    <Card>
      <CardContent className="p-6">
        {!query.isLoading && query.data && (
          <Fragment>
            <p className="text-sm font-semibold">{query.data.title}</p>
            <p className="text-sm">{query.data.director}</p>
          </Fragment>
        )}
      </CardContent>
    </Card>
  );
}
