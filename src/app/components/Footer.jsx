import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-[#0C0D10] py-8 px-[2.19%] flex justify-between items-center">
      <div>
        <Image
          src="/brand-logo-left.png"
          alt="Footer logo"
          width={100}
          height={50}
        />
      </div>
      <div>
        <p className="text-[#6B7280] text-[16px] font-inter">
          &copy;2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </div>
  );
};

export default Footer;
