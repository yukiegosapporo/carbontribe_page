import { motion } from "framer-motion";

import feature1 from "../assets/images/yuk_satelite_scanning_the_eath_isometric_cartoon_8k_octane_06ae898c-b015-4395-a6d9-a32cd6fb8159.png";
import feature2 from "../assets/images/yuk_satelite_scanning_the_eath_without_background_isometric_car_48e9ee53-838d-42e0-af63-8d1f0a117013.png";
import feature3 from "../assets/images/yuk_forest_detection_from_space_website_image_0c01f990-b359-47f7-ab4f-c96f2a8a6a47.png";
import feature4 from "../assets/images/yuk_forest_detection_from_space_website_image_9fd182d9-cfb8-4c42-bdca-bcd5e01de02b.png";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

export const Features1 = () => {
  return (
    <section
      className="w-full bg-customDarkBg2 mt-20 mb-8 sm:mt-16 sm:mb-16 xl:mt-0  xl:m pt-[2rem]  md:pt-[12vw] lg:pt-0"
      id="features"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <div className="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset">
              <span className="custom-block-subtitle">
                Dolor sit amet consectutar
              </span>
              <h2 className="mt-6 mb-8 text-4xl lg:text-5xl custom-block-big-title">
                Science backed digital twin
              </h2>
              <p className="mb-10 text-customGrayText leading-loose">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque efficitur nisl sodales egestas lobortis. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <ul className="mb-6 text-white">
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Vestibulum viverra</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Morbi mollis metus pretium</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Etiam lectus nunc, commodo</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-3 mx-auto lg:w-1/2 flex flex-wrap lg:-mx-4 sm:pr-8 lg:pt-10 justify-center lg:pl-4 xl:px-8">
            <div className="">
              <div className="rounded">
                <img
                  src={feature1}
                  alt="f1"
                  className="rounded-xl  custom-border-gray mx-auto sm:mx-unset"
                />
              </div>
              {/* <div className="py-3 pl-3 pr-2 rounded ">
                <img
                  src={feature2}
                  alt="f2"
                  className="rounded-xl  custom-border-gray mx-auto sm:mx-unset"
                />
              </div>
            </div>
            <div className="w-1/2 lg:mt-20  pt-12 lg:pt-0 px-2 hidden sm:inline-block">
              <div className="mb-4 py-3 pl-3 pr-2 rounded-lg ">
                <img
                  src={feature3}
                  alt="f3"
                  className="rounded-xl  custom-border-gray"
                />
              </div>
              <div className="py-3 pl-3 pr-2 rounded-lg ">
                <img
                  src={feature4}
                  alt="f4"
                  className="rounded-xl  custom-border-gray"
                />
              </div> */}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
