import { Shipment } from "@server/api/v1/shipments";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";

export function StatusBadge({ status }: { status: Shipment["status"] }) {
  const statusColor = {
    "not-shipped": "bg-red-700",
    "in-transit": "bg-yellow-700",
    shipped: "bg-blue-800",
    delivered: "bg-green-700",
  }[status];

  return (
    <Badge variant="secondary" className={cn(statusColor)}>
      {status.split("-").join(" ")}
    </Badge>
  );
}
