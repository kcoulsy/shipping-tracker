import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ShipmentStatusNotFound() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Unable to find shipment</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">
          We were unable to find a shipment with the provided tracking number.
        </p>
      </CardContent>
    </Card>
  );
}
