import data from "../assets/data.json";

type IItem = {
  category: "Work" | "Play" | "Study" | "Exercise" | "Social" | "Self Care";
  filter: "daily" | "weekly" | "monthly";
  topOffset: number;
};

const Item = ({ category, filter, topOffset }: IItem) => {
  const dataValue = data.filter((v) => v.title === category)[0];
  const idFormated = dataValue.title.toLowerCase().replace(" ", "-");

  return (
    <section className={`bg-${idFormated} rounded-xl overflow-hidden relative xl:w-[250px]`}>
      <img src={`images/icon-${idFormated}.svg`} alt={category} className="absolute right-3.5" style={{ top: `${topOffset}px` }} />
      <div className="bg-blue-dark rounded-t-xl p-6 flex flex-col justify-between mt-[38px] relative z-10 xl:gap-7">
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-lg mb-1">{category}</h2>
          <div className="ml-auto hover:brightness-200 hover:cursor-pointer grid place-items-center rounded-full">
            <img src="images/icon-ellipsis.svg" alt=""  className="p-2"/>
          </div>
        </div>
        <div className="flex xl:flex-col justify-between items-center xl:items-start">
          <h1 className="font-light text-3xl xl:text-[50px] xl:mb-4">{dataValue.timeframes[filter].current}hrs</h1>
          <p className="font-light text-sm text-blue-pale">
            Last {filter === "daily" ? "Day" : filter === "weekly" ? "Week" : "Month"} - {dataValue.timeframes[filter].previous}hrs
          </p>
        </div>
      </div>
    </section>
  );
};

export default Item;
