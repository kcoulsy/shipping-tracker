import { Shipment } from "@server/api/v1/shipments";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { capitalize } from "@/lib/utils";

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
        <div className="grid gap-2">
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
              {capitalize(shipment.status.split("-").join(" "))}
            </span>
          </div>
        </div>
        <Progress value={progressValue} className="w-full bg-secondary mt-4" />
      </CardContent>
    </Card>
  );
}
