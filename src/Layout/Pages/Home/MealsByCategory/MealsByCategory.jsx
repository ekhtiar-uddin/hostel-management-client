import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import UseMeal from "../../../../Hooks/UseMeal";
import "../MealsByCategory/TabCss/Tab.css";
import MealTab from "./MealTab/MealTab";

const MealsByCategory = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [meals, loading, refetch] = UseMeal();

  const breakfast = meals?.filter((item) => item.category === "Breakfast");
  const lunch = meals?.filter((item) => item.category === "Lunch");

  const dinner = meals?.filter((item) => item.category === "Dinner");

  return (
    <div className="mt-10">
      <h2 className="text-3xl  lg:text-4xl uppercase mb-6 font-bold text-center text-white ">
        <span className="text-[#EB3656] ">Explore</span> meals
      </h2>

      <Tabs className="">
        <div className="bg-[#101010] lg:w-[550px]  my-5 mx-auto py-3 rounded">
          <TabList className="flex gap-3 items-center lg:gap-5 justify-center">
            <Tab
              className={`cursor-pointer  lg:px-7 py-1 px-3 rounded lg:py-2   ${
                activeTab === 0 ? "active" : "inActive"
              }`}
              onClick={() => setActiveTab(0)}
            >
              All Meals
            </Tab>

            <Tab
              className={`cursor-pointer rounded lg:px-7 lg:py-2 py-1 px-3    ${
                activeTab === 1 ? "active" : "inActive"
              }`}
              onClick={() => setActiveTab(1)}
            >
              Breakfast
            </Tab>

            <Tab
              className={`cursor-pointer rounded lg:px-7 lg:py-2 py-1 px-3   ${
                activeTab === 2 ? "active" : "inActive"
              }`}
              onClick={() => setActiveTab(2)}
            >
              Lunch
            </Tab>
            <Tab
              className={`cursor-pointer rounded lg:px-7 lg:py-2 py-1 px-3   ${
                activeTab === 3 ? "active" : "inActive"
              }`}
              onClick={() => setActiveTab(3)}
            >
              Dinner
            </Tab>
          </TabList>
        </div>
        <TabPanel>
          <MealTab items={meals}></MealTab>
        </TabPanel>

        <TabPanel>
          <MealTab items={breakfast}></MealTab>
        </TabPanel>

        <TabPanel>
          <MealTab items={lunch}></MealTab>
        </TabPanel>

        <TabPanel>
          <MealTab items={dinner}></MealTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default MealsByCategory;
