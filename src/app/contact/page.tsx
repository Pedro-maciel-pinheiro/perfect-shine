"use client";

import { useSectionInView } from "@/hooks/active-section-hook";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  return <div ref={ref}></div>;
}
