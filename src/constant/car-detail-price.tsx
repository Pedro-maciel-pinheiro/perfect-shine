// Data/data.ts
import { Separator } from "@/components/ui/separator";
import { StaticImageData } from "next/image";

interface AccordionItem {
  title: string;
  content: JSX.Element;
  backgroundImage: string | StaticImageData;
}

export const AccordionData: AccordionItem[] = [
  {
    title: "BASIC",
    content: (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold">Price Range:</span>
          <span className="text-lg">$149 - $199</span>
        </div>
        <Separator />
        <div>
          <h3 className="mb-2 font-semibold">Exterior Services:</h3>
          <ul className="list-disc space-y-1 pl-5">
            <li>Hand wash with pH-neutral soap</li>
            <li>Wheel cleaning & tire dressing</li>
            <li>Paint decontamination</li>
            <li>Basic paint sealant</li>
            <li>Windows cleaned inside & out</li>
            <li>Door jambs cleaned</li>
          </ul>
        </div>
        <Separator />
        <div>
          <h3 className="mb-2 font-semibold">Interior Services:</h3>
          <ul className="list-disc space-y-1 pl-5">
            <li>Thorough vacuum including trunk</li>
            <li>Dust & wipe all surfaces</li>
            <li>Clean all windows</li>
            <li>Floor mats cleaned</li>
            <li>Air freshener</li>
          </ul>
        </div>
      </div>
    ),
    backgroundImage: "/logo/logo-black.png", // Replace with your actual image path
  },
  {
    title: "PREMIUM",
    content: (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold">Price Range:</span>
          <span className="text-lg">$249 - $329</span>
        </div>
        <Separator />
        <div>
          <h3 className="mb-2 text-lg font-semibold uppercase">
            Basic plus +{" "}
          </h3>
        </div>

        <Separator />
        <div>
          <h3 className="mb-2 font-semibold">Additional Treatments:</h3>
          <ul className="list-disc space-y-1 pl-5">
            <li>Paint correction for minor scratches</li>
            <li>Synthetic wax application</li>
            <li>Trim & plastic restoration</li>
          </ul>
        </div>
      </div>
    ),
    backgroundImage: "/logo/logo-black.png", // Replace with your actual image path
  },
  {
    title: "PERFECT SHINE",
    content: (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold">Price Range:</span>
          <span className="text-lg">$449 - $599</span>
        </div>
        <Separator />
        <div>
          <h3 className="mb-2 text-lg font-semibold uppercase">
            Basic + PREMIUM
          </h3>
        </div>
        <Separator />
        <div>
          <h3 className="mb-2 font-semibold">Additional Treatments:</h3>
          <ul className="list-disc space-y-1 pl-5">
            <li>Paint thickness measurement</li>
            <li>IPA wipedown</li>
            <li>Multi-year ceramic coating</li>
            <li>Extensive paint correction</li>
            <li>Premium interior fabric protection</li>
          </ul>
        </div>
      </div>
    ),
    backgroundImage: "/logo/logo-black.png", // Replace with your actual image path
  },
];
