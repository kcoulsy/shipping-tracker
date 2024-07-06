import { Shipment } from "@server/schemas/shipment";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { StatusBadge } from "../shipments/status-badge";

export function ShipmentStatus({ shipment }: { shipment: Shipment }) {
  let progressValue = 0;

  switch (shipment.status) {
    case "not-shipped":
      progressValue = 25;
      break;
    case "shipped":
      progressValue = 50;
      break;
    case "in-transit":
      progressValue = 75;
      break;
    case "delivered":
      progressValue = 100;
      break;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Order Status</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Carrier:</span>
            <span>{shipment.courier}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Tracking Number:</span>
            <span>{shipment.id}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Date Shipped:</span>
            <span>{shipment.dateShipped}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Status:</span>
            <span className="text-green-600 font-medium">
              <StatusBadge status={shipment.status} />
            </span>
          </div>
        </div>
        <Progress value={progressValue} className="w-full bg-secondary my-4" />
      </CardContent>
    </Card>
  );
}
