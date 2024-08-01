import Nav from "@/components/Nav";
import Section1 from "@/components/Section1";
import Section2 from "@/components/Section2";
import Section3 from "@/components/Section3";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Nav />

      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
}
