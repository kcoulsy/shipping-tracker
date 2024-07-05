import { Link } from "@tanstack/react-router";

export function HomepageFooter() {
  return (
    <footer className="p-6 md:py-12 mt-16 w-full">
      <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
        <div className="grid gap-4">
          <h3 className="font-bold text-xl">Company</h3>
          <Link href="#">About Us</Link>
          <Link href="#">Our Team</Link>
          <Link href="#">Careers</Link>
          <Link href="#">News</Link>
        </div>
        <div className="grid gap-4">
          <h3 className="font-bold text-xl">Services</h3>
          <Link href="#">Same-Day Delivery</Link>
          <Link href="#">International Shipping</Link>
          <Link href="#">Tracking & Monitoring</Link>
          <Link href="#">Freight Forwarding</Link>
        </div>
        <div className="grid gap-4">
          <h3 className="font-bold text-xl">Resources</h3>
          <Link href="#">FAQs</Link>
          <Link href="#">Shipping Guides</Link>
          <Link href="#">Sustainability</Link>
          <Link href="#">Partner with Us</Link>
        </div>
        <div className="grid gap-4">
          <h3 className="font-bold text-xl">Legal</h3>
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Terms of Service</Link>
          <Link href="#">Refund Policy</Link>
        </div>
        <div className="grid gap-4">
          <h3 className="font-bold text-xl">Contact</h3>
          <Link href="#">Support</Link>
          <Link href="#">Sales</Link>
          <Link href="#">Partnerships</Link>
          <Link href="#">Media Inquiries</Link>
        </div>
      </div>
    </footer>
  );
}
