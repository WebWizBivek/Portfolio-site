import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP); // register the hook to avoid React version discrepancies

const Gsap = () => {
  return <div className="h-screen bg-transparent opacity-0">Gsap</div>;
};

export default Gsap;
