import { useGetShipments } from "@/lib/api";
import { createFileRoute } from "@tanstack/react-router";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export const Route = createFileRoute("/shipments")({
  component: Shipments,
});

function Shipments() {
  const { data, isLoading, error } = useGetShipments();

  if (isLoading || !data) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="p-8">
      <Card>
        <CardHeader className="px-7">
          <CardTitle>Shipments</CardTitle>
          <CardDescription>All shipments</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">ID</TableHead>
                <TableHead>Contents</TableHead>
                <TableHead>Delivered To</TableHead>
                <TableHead>Courier</TableHead>
                <TableHead>Date Shipped</TableHead>
                <TableHead className="text-right">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((shipment) => (
                <TableRow key={shipment.id}>
                  <TableCell className="font-medium">{shipment.id}</TableCell>
                  <TableCell>{shipment.contents}</TableCell>
                  <TableCell>{shipment.name}</TableCell>
                  <TableCell>{shipment.courier}</TableCell>
                  <TableCell>{shipment.dateShipped}</TableCell>
                  <TableCell className="text-right">
                    <Badge variant="secondary">{shipment.status}</Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <TableCaption className="flex justify-center">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </TableCaption>
        </CardContent>
      </Card>
    </div>
  );
}
