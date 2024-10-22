import { Shipment } from "@server/schemas/shipment";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";

export function StatusBadge({ status }: { status: Shipment["status"] }) {
  const statusColor = {
    "not-shipped": "bg-primary",
    shipped: "bg-orange-700",
    "in-transit": "bg-yellow-700",
    delivered: "bg-green-700",
  }[status];

  return (
    <Badge variant="secondary" className={cn(statusColor)}>
      {status.split("-").join(" ")}
    </Badge>
  );
}
