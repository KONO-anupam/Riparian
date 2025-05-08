import Button from "./Button";
import logoFinal from "../assets/logoFinal.png"; // Adjust path if needed

export default function Navbar() {
  return (
    <div className="sticky top-0 w-full z-50 py-2">
      <div className="bg-[#2fe6de]/30 backdrop-blur-sm rounded-lg flex justify-around mx-auto max-w-5xl h-18 px-[1px] items-center shadow-lg">
        <div className="w-fit h-full flex items-center">
          <img src={logoFinal} alt="ILNB Logo" className="h-30 w-30 object-contain" />
        </div>

        <div>
          <a href="#" className="text-sm/8 font-semibold px-3 hover:text-[#2fe6de] transition">RECORD</a>
          <a href="#" className="text-sm/8 font-semibold px-3 hover:text-[#2fe6de] transition">LIVESTREAM</a>
          <a href="#" className="text-sm/8 font-semibold px-3 hover:text-[#2fe6de] transition">FOR BUISNESS</a>
          <a href="#" className="text-sm/8 font-semibold px-3 hover:text-[#2fe6de] transition">PRICING</a>
        </div>

        <div className="flex items-center gap-3">
          <a href="#" className="text-sm/8 font-semibold px-2 hover:text-[#2fe6ddb3] transition">Sign In</a>
          <Button>Sign Up</Button>
        </div>
      </div>
    </div>
  );
}
