/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQueryGetPeopleDetail } from "@/hooks/useQueryGetPeopleDetail";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Starship } from "@/components/flexdev/starship";
import { excludeArrayAndKeysFromObject } from "@/helper/excludeArrayAndKeysFromObject";
import { Vehicle } from "@/components/flexdev/vehicle";
import { Fragment } from "react";
import { Film } from "@/components/flexdev/film";

export function PeopleDetail() {
  const { query } = useQueryGetPeopleDetail();

  return (
    <div className="block m-auto max-w-screen-md py-12">
      <h1 className="text-3xl font-bold mb-6">Flexi Dev</h1>
      <div className="space-y-6">
        {!query.isLoading && typeof query.data !== "undefined" && (
          <Card>
            <CardHeader>
              <h2 className="text-xl font-medium">People Detail</h2>
            </CardHeader>
            <CardContent>
              {Object.keys(
                excludeArrayAndKeysFromObject(query.data as any, [
                  "homeworld",
                  "url",
                ])
              ).map((key) => (
                <div className="grid grid-cols-3 gap-2 space-y-2" key={key}>
                  <div>
                    <p className="capitalize text-sm font-semibold">
                      {key.replace("_", " ")}
                    </p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-sm">{(query.data as any)[key]}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        )}

        {!query.isLoading && typeof query.data !== "undefined" && (
          <Fragment>
            <h2 className="text-xl font-medium">Starships</h2>
            <div className="grid grid-cols-3 gap-4 mt-4">
              {query.data.starships.map((ship) => (
                <Starship key={ship} url={ship} />
              ))}
            </div>
          </Fragment>
        )}

        {!query.isLoading && typeof query.data !== "undefined" && (
          <Fragment>
            <h2 className="text-xl font-medium">Vehicles</h2>
            <div className="grid grid-cols-3 gap-4 mt-4">
              {query.data.vehicles.map((vehicle) => (
                <Vehicle key={vehicle} url={vehicle} />
              ))}
            </div>
          </Fragment>
        )}

        {!query.isLoading && typeof query.data !== "undefined" && (
          <Fragment>
            <h2 className="text-xl font-medium">Films</h2>
            <div className="grid grid-cols-3 gap-4 mt-4">
              {query.data.films.map((film) => (
                <Film key={film} url={film} />
              ))}
            </div>
          </Fragment>
        )}
      </div>
    </div>
  );
}
