import Image from "next/image";

const Explore = () => {
  return (
    <section className="py-12 xl:py-0 xl:h-[90vh] xl:w-screen">
      <div className="container mx-auto xl:w-full xl:h-full flex xl:justify-center xl:items-center">
        <div className="bg-yellow-200 w-full flex flex-col lg:flex-row gap-12 xl:gap-20">
          <div className="flex-1 bg-blue-200 flex flex-col justify-around items-end text-center xl:text-left gap-12 xl:gap-0 max-w-[400px] mx-auto xl:max-w-none xl:mx-0  ">
            {/* item 1*/}
            <div> item 1</div>
            {/* item 2*/}
            <div> item 2</div>
          </div>
          {/* image*/}
          <div className="hidden xl:flex justify-center">
            <div className="relative w-[322px] h-[580px]">
              <Image
                src="/assets/explore/cup.png"
                fill
                alt=""
                className="object-cover"
                quality={100}
                priority
              />
            </div>
          </div>
          <div className="flex-1 bg-pink-200 flex flex-col justify-around items-end text-center xl:text-left gap-12 xl:gap-0 max-w-[400px] mx-auto xl:max-w-none xl:mx-0  ">
            {/* item 3*/}
            <div> item 3</div>
            {/* item 4*/}
            <div> item 4</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
