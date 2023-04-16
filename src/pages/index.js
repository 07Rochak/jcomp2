import Hero from "@/components/Hero";
import Dishes from "@/components/Dishes";
import HeroCompA from "@/components/HeroCompA";
import HeroCompB from "@/components/HeroCompB";

export default function Home() {
  return (
    <>
      <Hero />
      <Dishes />
      <HeroCompA>
        <div className="flex w-[70%] justify-around mt-10">
          <div className="ml-1">
            <p className="text-3xl">Order on call</p>
            <p className="text-3xl">Pre Reservation</p>
            <p className="text-3xl">Super Chefs</p>
            <p className="text-3xl">Tiffin Service Available</p>
          </div>
          <div className="ml-8">
            <p className="text-3xl">Lightning Fast Delivery</p>
            <p className="text-3xl">Clean Kitchen</p>
            <p className="text-3xl">Organized Food Place</p>
          </div>
        </div>
      </HeroCompA>
      <HeroCompB>
        <div className="flex w-[70%] justify-around mt-10">
          <div className="ml-6">
            <p className="text-3xl" >Instagram</p>
            <p className="text-3xl">Facebook</p>
            <p className="text-3xl">Email-ID</p>
            <p className="text-3xl">Youtube</p>
          </div>
          <div className="ml-8">
            <a className="text-3xl" href="https://instagram.com/orange.twist_n_taste?igshid=MTIzZWQxMDU=">@Orange.twist_n_taste</a><br />
            <a className="text-3xl" href="https://www.facebook.com/people/Orange_twist_n_taste/100091707464742/">Orange_twist_n_taste</a>
            <p className="text-3xl" >orangetwistntaste@gmail.com</p>
            <a className="text-3xl" href="https://www.youtube.com/@OrangeTwistnTaste">Orange Twist n Taste</a>
          </div>
        </div>
      </HeroCompB>
    </>
  );
}
