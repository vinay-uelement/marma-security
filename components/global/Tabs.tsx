import React, { MouseEventHandler } from "react";

interface TabItem {
  label: string;
  id: string;
}

type Props = {
  tabs: TabItem[];
  activeTabId: string;
  onTabChange: (id: string) => void;
};

const Tabs = (props: Props) => {
  const { tabs, activeTabId, onTabChange } = props;
  return (
    <div className="max-w-[1440px] m-auto w-full">
      <div className="md:w-[70%] mx-auto flex justify-between fl3 border-b-3 border-brand-red">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`pt-10 px-4 cursor-pointer grow text-center text-nowrap ${activeTabId === tab.id ? "bg-[linear-gradient(180.48deg,rgba(255,188,188,0)_38.62%,#FF0000_109.23%)]" : ""}`}
            onClick={ () => onTabChange(tab.id)}
          >
            {tab.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
