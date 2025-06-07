import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP); // register the hook to avoid React version discrepancies

const Gsap = () => {
  return <div>Gsap</div>;
};

export default Gsap;
