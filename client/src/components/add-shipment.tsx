import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export function AddShipment() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add Shipment</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Shipment</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <form className="grid gap-4">
            <div className="space-y-2">
              <Label htmlFor="tracking">Tracking Number</Label>
              <Input id="tracking" placeholder="Enter tracking number" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contents">Contents</Label>
              <Input id="contents" placeholder="Enter contents" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="date">Date Shipped</Label>
                <Input id="date" type="date" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="status">Status</Label>
                <Select id="status">
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="not-shipped">Not Shipped</SelectItem>
                    <SelectItem value="shipped">Shipped</SelectItem>
                    <SelectItem value="delivered">Delivered</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter recipient name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="address-1">Address Line 1</Label>
                <Input id="address-1" placeholder="Enter address line 1" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="address-2">Address Line 2</Label>
              <Input id="address-2" placeholder="Enter address line 2" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Input id="city" placeholder="Enter city" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="postcode">Postcode</Label>
                <Input id="postcode" placeholder="Enter postcode" />
              </div>
            </div>
          </form>
        </div>
        <DialogFooter>
          <Button type="submit" variant="default">
            Add
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
