import { Link } from "@tanstack/react-router";

export function HomepageHero() {
  return (
    <section className="w-full pt-12 md:pt-24 lg:pt-52">
      <div className="container space-y-10 xl:space-y-52">
        <div className="grid gap-4 px-4 md:px-6 md:grid-cols-2 md:gap-16">
          <div>
            <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
              Seamless Delivery, Anytime, Anywhere
            </h1>
          </div>
          <div className="flex flex-col items-start space-y-4">
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Experience the fastest and most reliable courier service in the
              city. Track your shipment in real-time and get your packages
              delivered on time, every time.
            </p>
            <Link
              to="/track"
              className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              Track Shipment
            </Link>
          </div>
        </div>
        <img
          src="https://images.pexels.com/photos/5025669/pexels-photo-5025669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          width="1270"
          height="300"
          alt="Hero"
          className="mx-auto aspect-[3/1] overflow-hidden rounded-t-xl object-cover object-center"
        />
      </div>
    </section>
  );
}
