/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import "./App.css";
import Dropdown from "./Dropdown";
import { DiReact } from "react-icons/di";
import { BiLogoTypescript, BiPlus } from "react-icons/bi";

function App() {
  const [position, setPosition] = useState<
    | "bottom-left"
    | "bottom-right"
    | "bottom-center"
    | "top-left"
    | "top-right"
    | "top-center"
  >("bottom-left");

  const [submenuPosition, setSubmenuPosition] = useState<"left" | "right">(
    "right"
  );

  // 🔹 Generate very deep nested menu recursively
  const generateDeepSubmenu = (
    prefix: string,
    depth = 1,
    maxDepth = 4
  ): any => {
    if (depth > maxDepth) return undefined;
    const children = Array.from({ length: 3 }).map((_, i) => ({
      label: `${prefix}.${depth}.${i + 1}`,
      children: generateDeepSubmenu(
        `${prefix}.${depth}.${i + 1}`,
        depth + 1,
        maxDepth
      ),
    }));
    return children;
  };

  // 🔹 Helper to generate menu groups (Menu 1–4)
  const generateMenu = (menuNumber: number) => [
    {
      label: `Submenu ${menuNumber}.1`,
      children: generateDeepSubmenu(`Submenu ${menuNumber}.1`),
    },
    {
      label: `Submenu ${menuNumber}.2`,
      children: generateDeepSubmenu(`Submenu ${menuNumber}.2`),
    },
    {
      label: `Submenu ${menuNumber}.3`,
      children: generateDeepSubmenu(`Submenu ${menuNumber}.3`),
    },
    {
      label: `Submenu ${menuNumber}.4`,
      children: generateDeepSubmenu(`Submenu ${menuNumber}.4`),
    },
  ];

  // 🔹 Build full menu tree
  const menuItems = [
    {
      labelHeader: "Menu Group 1",
      label: "Menu 1",
      children: generateMenu(1),
    },
    {
      label: "Menu 2",
      children: generateMenu(2),
    },
    {
      label: "Menu 3",
      children: generateMenu(3),
    },
    {
      label: "Menu 4",
      children: generateMenu(4),
    },
  ];

  return (
    <div className="h-screen flex flex-col items-center p-20 gap-10 bg-gray-50">
      {/* Dropdown Controls */}
      <h1 className="text-4xl font-semibold">Multilabel DropDown</h1>
      <p className="flex items-center text-2xl justify-center">
        <DiReact /> <BiPlus />
        <BiLogoTypescript />
      </p>
      <div className="flex flex-col gap-5">
        <div>
          <h1 className="text-center text-lg font-semibold text-gray-800">
            Set Dropdown Position
          </h1>
        </div>

        <div className="flex flex-wrap gap-3 items-center justify-center">
          {[
            "bottom-left",
            "bottom-right",
            "bottom-center",
            "top-left",
            "top-right",
            "top-center",
          ].map((pos) => (
            <button
              key={pos}
              onClick={() => setPosition(pos as any)}
              className={`px-4 py-2 rounded border ${
                position === pos
                  ? "bg-blue-600 text-white"
                  : "bg-white hover:bg-gray-100"
              } transition`}
            >
              {pos.replace("-", " ")}
            </button>
          ))}
        </div>

        <h1 className="text-center text-lg font-semibold text-gray-800">
          Set Submenu Position
        </h1>
        <div className="flex gap-5 items-center justify-center">
          {["left", "right"].map((subPos) => (
            <button
              key={subPos}
              onClick={() => setSubmenuPosition(subPos as any)}
              className={`px-4 py-2 rounded border ${
                submenuPosition === subPos
                  ? "bg-green-600 text-white"
                  : "bg-white hover:bg-gray-100"
              } transition`}
            >
              {subPos.charAt(0).toUpperCase() + subPos.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <Dropdown
        label="Main Menu"
        menuItems={menuItems}
        position={position}
        submenuPosition={submenuPosition}
        searchInput={true}
      />
      <a href="/">go to github repo</a>
    </div>
  );
}

export default App;
