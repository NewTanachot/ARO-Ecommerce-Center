import Image from "next/image"
import AROlogo from "../public/image/AROlogo.png"

export default function home() {
    return (
      <div className="text-center my-5">
          <Image 
            src={AROlogo.src} 
            alt="ARO logo" 
            width={600} 
            height={250}
          ></Image>
      </div>
    )
}
