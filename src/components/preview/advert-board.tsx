import Image from "next/image";
import Button from "../ui/button";

export default function AdvertBoard() {
  return (
    <div className="w-full h-fit pb-5 bg-white border-2 border-blue-400 rounded-md overflow-hidden">
      <div className="w-full h-[180px] relative">
        <Image
          src={"/images/fill-image-2.png"}
          alt="Glyph"
          className="object-center"
          fill
        />
      </div>
      <div className="p-5 ">
        <p className="text-[#334155] leading-tight m-0">
          Let’s create boldly, write freely, and never lose a great idea again.
        </p>
      </div>
      <div className="px-5">
        <Button
          href=""
          //   variant={"secondary"}
          classname="w-full text-sm bg-blue-200 border-[1px] border-blue-300 text-blue-900 h-[40px] flex justify-center items-center"
        >
          Try Glyph
        </Button>
      </div>
    </div>
  );
}
