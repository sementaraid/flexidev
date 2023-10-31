import { useQueryGetPeople } from "@/hooks/useQueryGetPeople";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";

export function Home() {
  const { query, page, setPage } = useQueryGetPeople();

  return (
    <div className="block m-auto max-w-screen-md py-12">
      <h1 className="text-3xl font-bold mb-6">Flexi Dev</h1>
      <div>
        {!query.isLoading && typeof query.data !== "undefined" && (
          <Card>
            <CardHeader>
              <h2 className="text-xl font-medium">People</h2>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Height</TableHead>
                    <TableHead>Mass</TableHead>
                    <TableHead>Hair Color</TableHead>
                    <TableHead>Detail</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {query.data.results.map((person) => (
                    <TableRow key={person.url}>
                      <TableCell>{person.name}</TableCell>
                      <TableCell>{person.height}</TableCell>
                      <TableCell>{person.mass}</TableCell>
                      <TableCell>{person.hair_color}</TableCell>
                      <TableCell>
                        <Link
                          to={`/person/${person.url.split("/").slice(-2)[0]}`}
                          className="text-blue-500 hover:text-blue-700"
                        >
                          Detail
                        </Link>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter className="flex justify-center">
              <ReactPaginate
                previousLabel="Previous"
                nextLabel="Next"
                pageClassName="page-item text-sm"
                pageLinkClassName="page-link"
                previousClassName="page-item text-sm"
                previousLinkClassName="page-link"
                nextClassName="page-item text-sm"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="page-item text-sm"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
                pageCount={query.data.count}
                forcePage={page - 1}
                onPageChange={(event) => setPage(event.selected + 1)}
              />
            </CardFooter>
          </Card>
        )}
      </div>
    </div>
  );
}
