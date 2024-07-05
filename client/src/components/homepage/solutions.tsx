export function HomepageSolutions() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container space-y-12 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              Our Services
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Tailored Courier Solutions
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              From same-day delivery to international shipping, we offer a wide
              range of courier services to meet your needs.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <img
            src="https://images.pexels.com/photos/6969844/pexels-photo-6969844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            // src="https://images.pexels.com/photos/6407535/pexels-photo-6407535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            width="550"
            height="310"
            alt="Image"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
          />
          <div className="flex flex-col justify-center space-y-4">
            <ul className="grid gap-6">
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Same-Day Delivery</h3>
                  <p className="text-muted-foreground">
                    Need it fast? Our same-day delivery service ensures your
                    package arrives on time.
                  </p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">International Shipping</h3>
                  <p className="text-muted-foreground">
                    Sending items globally? Our international shipping options
                    make it easy.
                  </p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Tracking & Monitoring</h3>
                  <p className="text-muted-foreground">
                    Stay informed with real-time tracking and delivery updates.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
