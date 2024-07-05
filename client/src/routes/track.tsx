import { ShipmentStatus } from "@/components/tracking/status";
import { ShipmentStatusNotFound } from "@/components/tracking/status-not-found";
import { ShipmentStatusSkeleton } from "@/components/tracking/status-skeleton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useGetShipment } from "@/lib/api";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useForm } from "react-hook-form";

export const Route = createFileRoute("/track")({
  component: TrackPage,
});

function TrackPage() {
  const [id, setId] = useState<string | undefined>(undefined);
  const { data: shipment, isLoading } = useGetShipment(id);
  const form = useForm({
    defaultValues: {
      shipmentId: "",
    },
  });

  const onSubmit = form.handleSubmit((data) => {
    setId(data.shipmentId);
  });

  return (
    <div className="w-full max-w-md mx-auto py-12 px-4">
      <div className="space-y-4 text-center">
        <h1 className="text-3xl font-bold">Track Your Order</h1>
        <p className="text-muted-foreground">
          Enter your order number to check the status of your shipment.
        </p>
      </div>
      <form className="mt-8 space-y-4" onSubmit={onSubmit}>
        <div>
          <Label htmlFor="order-number">Order Number</Label>
          <Input
            type="text"
            placeholder="Enter your order number"
            className="w-full"
            {...form.register("shipmentId")}
          />
        </div>
        <Button type="submit" className="w-full">
          Track Order
        </Button>
      </form>
      {id ? (
        <div className="mt-12 space-y-6">
          {!isLoading && !shipment && <ShipmentStatusNotFound />}
          {isLoading ? <ShipmentStatusSkeleton /> : null}
          {/* @ts-expect-error - TODO fix response type */}
          {shipment ? <ShipmentStatus shipment={shipment} /> : null}
        </div>
      ) : null}
    </div>
  );
}
