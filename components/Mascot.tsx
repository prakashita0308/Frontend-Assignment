import Image from "next/image";
export default function Mascot() {
  return (
    <div>
      <Image src="/assets/mascot.gif" alt="mascot" width={170} height={170} unoptimized className="mascot" />
    </div>
  );
}
