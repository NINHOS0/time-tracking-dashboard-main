import { useState } from "react";
import Item from "./components/Item";

type IFilter = "daily" | "weekly" | "monthly";

function App() {
  const [filter, setFilter] = useState<IFilter>("weekly");

  return (
    <main className="grid xl:grid-cols-4 my-16 mx-6 gap-7">
      <section className=" bg-blue-dark rounded-xl overflow-hidden xl:row-span-2 xl:w-[250px] flex flex-col">
        <div className="bg-blue rounded-xl px-8 py-10 flex xl:flex-col">
          <img src="images/image-jeremy.png" alt="" className="w-[4.5em] outline rounded-full outline-white mr-4" />
          <div className="w-full my-auto font-light xl:my-7">
            <p className="text-blue-pale">Report for</p>
            <h2 className="text-2xl xl:text-[42px] leading-[48px]">Jeremy Robson</h2>
          </div>
        </div>
        <div className="h-full flex xl:flex-col justify-around xl:justify-between py-4 xl:p-6">
          <span
            className={`cursor-pointer ${filter === "daily" ? "text-white" : "text-blue-desaturated"} hover:text-white w-fit transition-all`}
            onClick={() => setFilter("daily")}
          >
            Daily
          </span>
          <span
            className={`cursor-pointer ${filter === "weekly" ? "text-white" : "text-blue-desaturated"} hover:text-white w-fit transition-all`}
            onClick={() => setFilter("weekly")}
          >
            Weekly
          </span>
          <span
            className={`cursor-pointer ${filter === "monthly" ? "text-white" : "text-blue-desaturated"} hover:text-white w-fit transition-all`}
            onClick={() => setFilter("monthly")}
          >
            Monthly
          </span>
        </div>
      </section>
      <Item category="Work" filter={filter} topOffset={-11} />
      <Item category="Play" filter={filter} topOffset={-4} />
      <Item category="Study" filter={filter} topOffset={-7} />
      <Item category="Exercise" filter={filter} topOffset={-1} />
      <Item category="Social" filter={filter} topOffset={-15} />
      <Item category="Self Care" filter={filter} topOffset={-12} />
      {/* <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>.
      </div> */}
    </main>
  );
}

export default App;
