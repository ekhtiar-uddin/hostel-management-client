import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { useFetchGlobal } from "../../../../Hooks/useFetchGlobal";
import "../MealsByCategory/TabCss/Tab.css";
import MealTab from "./MealTab/MealTab";
import imgOne from "/assets/breakfast.jpeg";
import imgThree from "/assets/dinner.jpg";
import imgTwo from "/assets/lunch.jpg";
const MealsByCategory = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [meals, loading, refetch] = useFetchGlobal("/meals");
  const tabs = [
    {
      id: 1,
      category: "Breakfast",
      img: `${imgOne}`,
    },
    {
      id: 2,
      category: "Lunch",
      img: `${imgTwo}`,
    },
    {
      id: 3,
      category: "Dinner",
      img: `${imgThree}`,
    },
  ];

  const breakfast = meals?.filter((item) => item.category === "Breakfast");
  const lunch = meals?.filter((item) => item.category === "Lunch");

  const dinner = meals?.filter((item) => item.category === "Dinner");

  return (
    <div className="mt-10">
      <h2
        className="text-3xl  mb-4 font-semibold 
       "
      >
        <span className="text-p1 ">Explore</span> our meals
      </h2>
      <p>
        Discover a variety of flavorful meals crafted for students. Our meals
        are quick, nutritious, and perfect for busy days on campus.{" "}
        <br className="lg:block hidden" />
        Enjoy delicious, balanced options made to keep you energized and focused
        all day long.
      </p>

      <Tabs className="">
        <TabList className="my-10 addFlexItems gap-4  lg:gap-12 ">
          {tabs.map(({ id, category, img }) => (
            <Tab
              key={id}
              className={`cursor-pointer border-none outline-none  ${
                activeTab === id ? "active" : ""
              }  `}
              onClick={() => setActiveTab(id)}
            >
              <div className="flex flex-col   items-center gap-2">
                <img
                  className={` w-[100px] h-[100px] rounded-full`}
                  src={img}
                  alt=""
                />
                <span className="text-lg"> {category}</span>
              </div>
            </Tab>
          ))}
        </TabList>

        {loading ? (
          "Loading.."
        ) : (
          <>
            {activeTab === 0 && (
              <TabPanel>
                <MealTab items={meals}></MealTab>
              </TabPanel>
            )}

            <TabPanel>
              <MealTab items={breakfast}></MealTab>
            </TabPanel>

            <TabPanel>
              <MealTab items={lunch}></MealTab>
            </TabPanel>

            <TabPanel>
              <MealTab items={dinner}></MealTab>
            </TabPanel>
          </>
        )}
      </Tabs>
    </div>
  );
};

export default MealsByCategory;
