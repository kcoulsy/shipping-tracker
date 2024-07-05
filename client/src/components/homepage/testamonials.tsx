import { StarIcon } from "lucide-react";

export function HomepageTestamonials() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            What Our Customers Say
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Hear from our satisfied customers about their experience with our
            courier services.
          </p>
        </div>
        <div className="divide-y rounded-lg">
          <div className="grid w-full grid-cols-1 items-stretch justify-center md:grid-cols-3">
            <div className="mx-auto flex w-full items-center justify-center p-8">
              <blockquote className="flex flex-col items-center justify-center space-y-4">
                <div className="flex items-center justify-center">
                  <StarIcon className="h-5 w-5 text-amber-400" />
                  <StarIcon className="h-5 w-5 text-amber-400" />
                  <StarIcon className="h-5 w-5 text-amber-400" />
                  <StarIcon className="h-5 w-5 text-amber-400" />
                  <StarIcon className="h-5 w-5 text-amber-400" />
                </div>
                <p className="text-center text-muted-foreground">
                  "Courier Co has been a game-changer for our business.\n Their
                  reliable and efficient delivery services have\n helped us
                  exceed our customers' expectations."
                </p>
                <div className="font-medium">- John Doe, CEO</div>
              </blockquote>
            </div>
            <div className="mx-auto flex w-full items-center justify-center p-8">
              <blockquote className="flex flex-col items-center justify-center space-y-4">
                <div className="flex items-center justify-center">
                  <StarIcon className="h-5 w-5 text-amber-400" />
                  <StarIcon className="h-5 w-5 text-amber-400" />
                  <StarIcon className="h-5 w-5 text-amber-400" />
                  <StarIcon className="h-5 w-5 text-amber-400" />
                  <StarIcon className="h-5 w-5 text-amber-400" />
                </div>
                <p className="text-center text-muted-foreground">
                  "I've been using Courier Co for all my shipping needs, and\n I
                  couldn't be happier. Their customer service is\n outstanding,
                  and my packages always arrive on time."
                </p>
                <div className="font-medium">
                  - Jane Smith, Small Business Owner
                </div>
              </blockquote>
            </div>
            <div className="mx-auto flex w-full items-center justify-center p-8">
              <blockquote className="flex flex-col items-center justify-center space-y-4">
                <div className="flex items-center justify-center">
                  <StarIcon className="h-5 w-5 text-amber-400" />
                  <StarIcon className="h-5 w-5 text-amber-400" />
                  <StarIcon className="h-5 w-5 text-amber-400" />
                  <StarIcon className="h-5 w-5 text-amber-400" />
                  <StarIcon className="h-5 w-5 text-amber-400" />
                </div>
                <p className="text-center text-muted-foreground">
                  "Courier Co has been a lifesaver for my online business.\n
                  Their fast and reliable delivery services have helped me\n
                  keep my customers happy and coming back."
                </p>
                <div className="font-medium">
                  - Sarah Lee, E-commerce Entrepreneur
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
