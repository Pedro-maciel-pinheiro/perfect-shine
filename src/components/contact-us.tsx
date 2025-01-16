import React from "react";
import { useForm } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { perfectshine_font } from "@/constant/font";
import { toast } from "sonner";

const key = "7b98b54d-38bd-4e39-9225-6d19bb280ce5";

export default function Contact() {
  const { register, handleSubmit, reset } = useForm();
  const [result, setResult] = React.useState<string>("");
  const [selectedService, setSelectedService] = React.useState<string>("");

  const onSubmit = async (data: any) => {
    const formData = new FormData();
    formData.append("access_key", key);
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("message", data.message);

    if (selectedService) {
      formData.append("service", selectedService);
    } else {
      toast.warning("Please select a service type.");
      return;
    }

    toast.success("Sending...");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      }).then((res) => res.json());

      if (res.success) {
        toast.success("Email Submitted Successfully");
        reset();
        setSelectedService("");
      } else {
        console.error("Error", res);
        toast.error(res.message || "An error occurred.");
      }
    } catch (error) {
      console.error("Submit error", error);
      toast.error("An error occurred while submitting the form.");
    }
  };

  const handleSelectChange = (value: string) => {
    setSelectedService(value);
  };

  return (
    <div className="w-full max-w-[420px] p-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4"
        encType="multipart/form-data"
      >
        <ol
          className={`flex flex-col gap-5 font-medium uppercase ${perfectshine_font.className}`}
        >
          <li>
            <Label>Name</Label>
            <Input
              {...register("name", { required: true })}
              type="text"
              required
              placeholder="Your Name"
              className="bg-black shadow-lg focus:shadow-white"
            />
          </li>
          <li>
            <Label>Email</Label>
            <Input
              {...register("email", { required: true })}
              type="email"
              required
              placeholder="Your Email"
              className="bg-black shadow-lg focus:shadow-white"
            />
          </li>
          <li>
            <Label>Service</Label>
            <Select
              required
              value={selectedService}
              onValueChange={handleSelectChange}
            >
              <SelectTrigger className="w-full bg-black shadow-lg focus:shadow-white">
                <SelectValue placeholder="Service Type" />
              </SelectTrigger>
              <SelectContent className="cursor-pointer bg-black font-medium text-white">
                <SelectItem value="basic">Basic</SelectItem>
                <SelectItem value="premium">Premium</SelectItem>
                <SelectItem value="perfect-shine">Perfect-Shine</SelectItem>
              </SelectContent>
            </Select>
          </li>
          <li>
            <Label>Message</Label>
            <Textarea
              {...register("message", { required: true })}
              required
              placeholder="Your Message"
              className="bg-black shadow-lg focus:shadow-white"
            />
          </li>
        </ol>

        <Button
          type="submit"
          className="w-full border bg-red-500 uppercase hover:bg-red-700"
        >
          Submit Email
        </Button>
      </form>
    </div>
  );
}
