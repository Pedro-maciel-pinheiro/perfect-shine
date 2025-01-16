import Accordion from "@/components/Accordion";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import Image from "next/image";

export default function BookDetail() {
  return (
    <div className="productPage-bg-image  min-h-screen w-full items-center justify-center flex">
      {/* <div className="relative h-full w-full">
        <h1 className="absolute flex h-full w-full items-center justify-end p-4 text-6xl font-semibold text-white underline">
          Book Your Car Wash Now!
        </h1>
        <Image
          src={"/img/wash.jpg"}
          alt=""
          width={1500}
          height={1500}
          className="mx-auto h-[400px] w-full object-cover object-center"
        />
      </div> */}
      <div className="flex min-h-screen w-full max-w-screen-2xl items-center justify-center">
        <Accordion />
      </div>
    </div>
  );
}
