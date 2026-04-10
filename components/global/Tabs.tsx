import React, { MouseEventHandler } from "react";

interface TabItem {
  label: string;
  id: string;
}

type Props = {
  tabs: TabItem[];
  activeTabId: string;
  onTabChange: (id: string) => void;
  align?: "left" | "center" | "right";
};

const alignClass = {
  left: "justify-start",
  center: "justify-center",
  right: "justify-end",
};

const Tabs = (props: Props) => {
  const { tabs, activeTabId, onTabChange, align = "left" } = props;
  return (
    <div className="max-w-[1440px] m-auto w-full px-6 lg:px-12">
      <div className={`flex ${alignClass[align]}`}>
        <div className="flex border-b-3 border-brand-red">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`pt-10 px-8 cursor-pointer text-center fl3-2 ${
                activeTabId === tab.id
                  ? "bg-[linear-gradient(180.48deg,rgba(255,188,188,0)_38.62%,#FF0000_109.23%)]"
                  : ""
              }`}
              onClick={() => onTabChange(tab.id)}
            >
              {tab.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
