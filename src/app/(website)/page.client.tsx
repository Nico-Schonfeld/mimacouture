"use client";

import React from "react";
import { ProductsType } from "@/types/Products.type";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const AppComponent = ({ products }: { products: ProductsType[] }) => {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <main className="w-full h-auto py-[6rem]">
      <div className="w-full h-full">
        <Carousel
          plugins={[plugin.current]}
          className="w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {products.map((item) => (
              <CarouselItem key={item.id}>
                <div className="relative w-full h-auto lg:h-[50rem] flex items-center justify-center">
                  <Image
                    src="/assets/imgExampleSlider.webp"
                    overrideSrc="/assets/imgExampleSlider.webp"
                    width={1280}
                    height={853}
                    alt="demo"
                    layout="responsive"
                    objectFit="cover"
                  />

                  <div className="absolute flex flex-col gap-5 items-center justify-center">
                    <h3 className=" text-wrap font-bold text-6xl uppercase text-white">
                      {item.title}
                    </h3>

                    <Button variant={"secondary"}>Ver más</Button>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-10 bg-transparent border-none hover:bg-[#ffffff50] text-white hover:text-white" />
          <CarouselNext className="absolute right-10 bg-transparent border-none hover:bg-[#ffffff50] text-white hover:text-white" />
        </Carousel>

        <div className="w-full h-full container mx-auto py-[50rem]">
          {JSON.stringify(products, null, 2)}
        </div>
      </div>
    </main>
  );
};

export default AppComponent;
