import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import Image from "next/image";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

type SubscriptionProps = {
  title: string;
  description: string;
  price: number;
  href: string;
  className?: string;
};

export default function Subscription({
  title,
  description,
  price,
  href,
  className,
}: SubscriptionProps) {
  return (
    <Dialog>
      <DialogTrigger>
        <Card
          className={cn(
            "hover:scale-105 duration-300 shadow-xl min-w-full flex items-center flex-col text-white bg-gradient-to-r from-blue-500 to-purple-500",
            className
          )}
        >
          <CardHeader>
            <CardTitle className="text-center text-xl md:text-2xl lg:text-3xl">
              {title}
              <br />
              Subscription
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className=" text-lg md:text-xl text-center my-16">
              {description}
            </p>
            <Image
              src={href}
              alt={title}
              fill
              style={{ objectFit: "contain" }}
              className="!static max-h-96"
            />
          </CardContent>
          <CardFooter>
            <p className="font-bold text-3xl">{price}$</p>
          </CardFooter>
        </Card>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <p className="text-xl font-bold">{title}</p>
          <p className="mt-2 text-2xl font-bold">{price}$</p>
          <p className="text-black/70 font-medium dark:text-white/50">
            {description}
          </p>
          <p className="text-black/70 font-medium dark:text-white/50">
            One-time payment. Cancel at any time. Free return
          </p>
        </DialogHeader>
        <DialogFooter>
          <Button>Buy subscription</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
