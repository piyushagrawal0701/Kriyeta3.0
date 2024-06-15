import React from "react";
import LineChart from "../../Components/Line Chart/LineChart";

const ReportDashboard = () => {
  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap w-full mb-20">
            <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-200">
                Fraud Report
              </h1>
              <div class="h-1 w-20 bg-blue-500 rounded"></div>
            </div>
            <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Our Fraud Report Dashboard offers a comprehensive view of your
              transaction security, providing real-time insights and detailed
              analysis to help you stay ahead of fraudulent activities. Designed
              with user-friendliness and efficiency in mind, the dashboard
              presents crucial data in a clear and actionable format, empowering
              you to make informed decisions quickly.
            </p>
          </div>
          <div class="flex flex-wrap -m-4">
            <div class="xl:w-1/4 md:w-1/2 p-4 cardHover">
              <div class="bg-gray-900 p-6 rounded-lg">
                {/* <h3 class="tracking-widest text-blue-500 text-xs font-medium title-font">
                  SUBTITLE
                </h3> */}
                <h2 class="text-lg text-gray-200 font-medium title-font mb-4">
                  Total Fraud
                </h2>
                <p class="leading-relaxed text-base text-red-400">10</p>
              </div>
            </div>
            <div class="xl:w-1/4 md:w-1/2 p-4 cardHover">
              <div class="bg-gray-900 p-6 rounded-lg">
                {/* <h3 class="tracking-widest text-blue-500 text-xs font-medium title-font">
                  SUBTITLE
                </h3> */}
                <h2 class="text-lg text-gray-200 font-medium title-font mb-4">
                  Secured transactions
                </h2>
                <p class="leading-relaxed text-base text-green-400">40</p>
              </div>
            </div>
            <div class="xl:w-1/4 md:w-1/2 p-4 cardHover">
              <div class="bg-gray-900 p-6 rounded-lg">
                {/* <h3 class="tracking-widest text-blue-500 text-xs font-medium title-font">
                  SUBTITLE
                </h3> */}
                <h2 class="text-lg text-gray-200 font-medium title-font mb-4">
                  Total cases
                </h2>
                <p class="leading-relaxed text-base text-blue-400">7</p>
              </div>
            </div>
            <div class="xl:w-1/4 md:w-1/2 p-4 cardHover">
              <div class="bg-gray-900 p-6 rounded-lg">
                {/* <h3 class="tracking-widest text-blue-500 text-xs font-medium title-font">
                  SUBTITLE
                </h3> */}
                <h2 class="text-lg text-gray-200 font-medium title-font mb-4">
                  Case Completed
                </h2>
                <p class="leading-relaxed text-base">5</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container w-[100%] flex justify-center items-center mx-auto bg-slate-50 px-10 py-10">
        <LineChart/>
      </section>
    </>
  );
};

export default ReportDashboard;
