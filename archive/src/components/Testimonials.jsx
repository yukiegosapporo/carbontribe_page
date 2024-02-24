// import { QuoteIcon } from "../assets/icons/QuoteIcon";
// import testimonial1 from "../assets/images/testimonial1.png";
// import testimonial2 from "../assets/images/testimonial2.png";
// import testimonial3 from "../assets/images/testimonial3.png";
import kay from "../assets/images/kay.png";
import yuki from "../assets/images/yuki.png";

import { motion } from "framer-motion";

export const Testimonials = () => (
  <section className="w-full flex justify-center pt-10 mb-16 lg:mb-32 bg-customDarkBg2 relative">
    <div className="absolute -top-16" id="feedback" />
    <div className="flex flex-col w-full lg:w-[1150px] justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <div className="custom-block-subtitle text-center mb-6">
          PRESERVING NATURE TO EARN
        </div>
        <div className="custom-block-big-title text-center mb-16 px-8 sm:px-24 md:px-48">
          Team
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-5 xl:gap-10 px-6 xl:px-0 items-center">
          <div className="w-11/12 sm:w-4/5 md:w-[560px] lg:w-1/2 custom-border-gray-darker rounded-xl bg-customDarkBg3 flex flex-col px-6 py-4">


            <div className="flex mt-4 mb-2 xl:mt-8 xl:mb-4">
              <a href="https://www.linkedin.com/in/keiichiroyano/"><img src={kay} alt="" width="45px" /></a>
              <div className="flex flex-col ml-4">
                <div className="custom-content-text-white font-medium">
                  <a href="https://www.linkedin.com/in/keiichiroyano/">Keiichiro (Kay) Yano</a>
                </div>
                <div className="custom-content-text-gray">
                  Co-Founder, CEO
                </div>
              </div>

            </div>

            <div className="custom-content-text-white">
              Ex-Google, ex-Salesforce, resides in Berlin. +15 years B2B tech enterprise bizdev. 4 times founder in Germany, Japan, Estonia. Web3 entrepreneur since 2017. IE Business School MBA
            </div>

          </div>
          <div className="w-11/12 sm:w-4/5 md:w-[560px] lg:w-1/2 custom-border-gray-darker rounded-xl bg-customDarkBg3 flex flex-col px-6 py-4">

            <div className="flex mt-4 mb-2 xl:mt-8 xl:mb-4">
              <a href="https://www.linkedin.com/in/yukiegosapporo/"><img src={yuki} alt="" width="45px" /></a>
              <div className="flex flex-col ml-4">
                <div className="custom-content-text-white font-medium">
                  <a href="https://www.linkedin.com/in/yukiegosapporo/">Yuki Katoh</a>
                </div>
                <div className="custom-content-text-gray">
                  Co-Founder, CTO
                </div>
              </div>
            </div>


            <div className="custom-content-text-white">
              A master in computer vision, machine learning, AI, big data, blockchain and software engineering. University of Essex, MSC with distinction
            </div>

          </div>

        </div>
      </motion.div>
    </div>
  </section>
);
