import React from "react";
import Image from "next/image";
import { service_information} from "@/constant/hero-service-options";
import Link from "next/link";

export const HeroMidSection = () => {
  return (
    <div className="min-h-screen max-w-7xl">
      <div className="flex items-center w-full h-auto ">
        <Image
          src={"/img/product_shots_1500x1500.webp"}
          alt={"product Image"}
          width={400}
          height={400}
          className=""
        />
        <div className="text-black text-xl">
          <h2 className="font-bold text-3xl uppercase">AMMO products</h2>
          <h2>We only use AMMO products on our Detailing !</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            veritatis, magni incidunt tempore, unde dolorem ipsam molestias
            labore obcaecati alias id assumenda expedita voluptates sit vitae
            natus. Numquam, est animi.
          </p>
        </div>
      </div>

      <ul className="max-w-[90%] mx-auto  grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {service_information.map((service, index) => (
          <li key={index} className=" ">
            <Link href={""} className="">
              <div className="flex flex-col ">
                <span className="overflow-hidden">
                  <Image
                    src={service.img_src}
                    alt={service.title}
                    width={350}
                    height={350}
                    className="hover:scale-105 transition-all duration-300"
                  />
                </span>

                <p className="text-xl font-semibold mt-2">{service.title}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
