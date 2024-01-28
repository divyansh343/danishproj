import Image from "next/image";
import Link from "next/link";
import React from "react";
// import left from "../../assets/left.png";

const Features = () => {
  return (
    <div>
      <div class="max-w-7xl px-8 md:px-12  mx-auto py-12 lg:py-24 relative space-y-24">

        <div class="grid grid-cols-1 gap-4 mt-6 list-none lg:grid-cols-2 lg:gap-24">

          <div>

            <p class="text-sm text-transparent uppercase bg-gradient-to-r from-indigo-300 to-indigo-400 bg-clip-text">
              Features            </p>
            <p class="text-3xl mt-8 font-normal text-white trackingt-tight">
              Seamlessly embrace the convenience and security
            </p>
            <p class="mt-4 text-base text-vulcan-300">
              Our advanced digital  solution, enabling you to make secure
              and streamlined web across various merchants, both online
              and offline.
            </p>
            <div class="flex flex-wrap mt-10">

              <Link
                href="/report"
                class="rounded-lg px-4 border py-2 text-sm font-semibold transition-all flex items-center justify-center bg-vulcan-900 text-white hover:text-indigo-400 h-10 border-vulcan-700"
              >
                Generate Report
              </Link>
              <p
                class="rounded-lg px-4 border py-2 mx-2 mt-2 md:mt-0 text-sm font-semibold transition-all cursor-pointer flex items-center justify-center bg-vulcan-900 text-white hover:text-indigo-400 h-10 border-vulcan-700"
              >
                Terms & condition analysis
              </p>
            </div>
          </div>
          <div class="lg:mt-0 mt-12 h-full">
            {/* <img alt="Lexington thumbnail" class="rounded-2xl shadow-2xl shadow-vulcan-950/50 w-full" src="/assets/card2.svg"> */}
          </div>
        </div>
        {/* <ul
          class="grid grid-cols-2 gap-6 mt-12 list-none md:grid-cols-4 lg:gap-12 lg:mt-24"
          role="list"
        >

          <li>

            <div>

              <p class="text-sm font-medium text-indigo-400">01.</p>
              <p class="text-lg mt-6 font-medium text-white lg:text-xl">
                User-friendly Interface
              </p>
            </div>
            <div class="mt-2 text-base text-vulcan-300">
              Our platform is designed with the user in mind.
            </div>
          </li>
          <li>

            <div>

              <p class="text-sm font-medium text-indigo-400">02.</p>
              <p class="text-lg mt-6 font-medium text-white lg:text-xl">
                Customizable
              </p>
            </div>
            <div class="mt-2 text-base text-vulcan-300">
              Our platform allows for customizable branding.
            </div>
          </li>
          <li>

            <div>

              <p class="text-sm font-medium text-indigo-400">03.</p>
              <p class="text-lg mt-6 font-medium text-white lg:text-xl">
                Scheduled Orders
              </p>
            </div>
            <div class="mt-2 text-base text-vulcan-300">
              Our platform allows for scheduled orders.
            </div>
          </li>
          <li>

            <div>

              <p class="text-sm font-medium text-indigo-400">04.</p>
              <p class="text-lg mt-6 font-medium text-white lg:text-xl">
                Allergen Filtering
              </p>
            </div>
            <div class="mt-2 text-base text-vulcan-300">
              Our platform includes an allergen filtering feature.
            </div>
          </li>
        </ul> */}
      </div>
    </div>
  );
};

export default Features;
