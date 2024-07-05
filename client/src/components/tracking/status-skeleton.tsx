import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "../ui/skeleton";

export function ShipmentStatusSkeleton() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Order Status</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-2">
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Carrier:</span>

            <Skeleton className="w-[100px] h-[14px] rounded-full" />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Tracking Number:</span>

            <Skeleton className="w-[100px] h-[14px] rounded-full" />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Date Shipped:</span>

            <Skeleton className="w-[100px] h-[14px] rounded-full" />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Status:</span>
            <span className="text-green-600 font-medium">
              <Skeleton className="w-[100px] h-[14px] rounded-full" />
            </span>
          </div>
        </div>
        <Skeleton className="w-full mt-4 h-[14px] rounded-full" />
      </CardContent>
    </Card>
  );
}
