# 🔽 Dropdown Ninja — Advanced Multi-Level Menu System

A fully customizable **React + TypeScript dropdown component** designed for modern UIs. It supports **infinite nested submenus**, flexible styling, search, keyboard navigation, and more.

---

## 🚀 Features

✅ Infinite nested submenus
✅ Position control (top/bottom + left/right/center)
✅ Optional search field in menus
✅ Depth-based headers
✅ Custom render support for menu items
✅ Portal-based positioning
✅ Full keyboard and screen reader accessibility
✅ TailwindCSS-friendly styling system

---

## ⚙️ Installation

```bash
npm install react-icons lodash.throttle clsx
```

Then import the component and styles in your app:

```tsx
import Dropdown from "./Dropdown";
import "./App.css";
```

---

## 🧩 Example Usage

```tsx
const menuItems = [
  {
    labelHeader: "Main Menu",
    label: "Menu 1",
    children: [
      { label: "Submenu 1.1" },
      { label: "Submenu 1.2" },
      {
        label: "Submenu 1.3",
        children: [
          { label: "Submenu 1.3.1" },
          { label: "Submenu 1.3.2" },
          {
            label: "Submenu 1.3.3",
            children: [
              { label: "Submenu 1.3.3.1" },
              { label: "Submenu 1.3.3.2" },
              { label: "Submenu 1.3.3.3" },
            ],
          },
        ],
      },
    ],
  },
  { label: "Menu 2" },
  { label: "Menu 3" },
];
```

Render it like this:

```tsx
<Dropdown
  label="Open Menu"
  menuItems={menuItems}
  position="bottom-left"
  submenuPosition="right"
/>
```

---

## 📚 Props Reference

| Prop                                         | Type                                                                                              | Default              | Description                       |
| -------------------------------------------- | ------------------------------------------------------------------------------------------------- | -------------------- | --------------------------------- |
| **label**                                    | `ReactNode`                                                                                       | —                    | Dropdown trigger text or element  |
| **menuItems**                                | `DropdownItem[]`                                                                                  | —                    | Array defining menu structure     |
| **position**                                 | `"bottom-left" \| "bottom-right" \| "bottom-center" \| "top-left" \| "top-right" \| "top-center"` | `"bottom-left"`      | Menu position relative to trigger |
| **submenuPosition**                          | `"left" \| "right"`                                                                               | `"right"`            | Direction submenus open           |
| **searchInput**                              | `boolean`                                                                                         | `false`              | Enables built-in search filter    |
| **closeOnItemClick**                         | `boolean`                                                                                         | `true`               | Closes dropdown on item click     |
| **submenuIcon**                              | `ReactNode \| React.ElementType`                                                                  | `LiaAngleRightSolid` | Submenu arrow icon                |
| **submenuIconClass**                         | `string`                                                                                          | —                    | Custom class for submenu icons    |
| **labelClass / triggerClassName**            | `string`                                                                                          | —                    | CSS class for trigger button      |
| **menuClassName / submenuClassName**         | `string`                                                                                          | —                    | CSS classes for menus             |
| **itemClassName**                            | `string`                                                                                          | —                    | CSS class for menu items          |
| **labelHeader / depthHeader / depthHeaders** | `ReactNode` / `ReactNode[]` / `(depth) => ReactNode`                                              | —                    | Header labels for depth levels    |
| **showDepthHeader**                          | `boolean`                                                                                         | `false`              | Enables nested headers            |
| **maxMenuHeight**                            | `number \| string`                                                                                | —                    | Adds scroll with height limit     |
| **menuOffset**                               | `{ x: number; y: number }`                                                                        | `{ x: 0, y: 0 }`     | Menu position offset              |
| **onMenuOpen / onMenuClose**                 | `() => void`                                                                                      | —                    | Callbacks for open/close          |
| **renderItem**                               | `(item, handlers, depth) => ReactNode`                                                            | —                    | Custom item renderer              |
| **closeOnScroll**                            | `boolean`                                                                                         | `false`              | Auto-closes on page scroll        |

---

## 🧱 `DropdownItem` Structure

| Field               | Type             | Description                  |
| ------------------- | ---------------- | ---------------------------- |
| **label**           | `ReactNode`      | Text or JSX element          |
| **id**              | `string`         | Unique key for React         |
| **children**        | `DropdownItem[]` | Nested submenus              |
| **onClick**         | `() => void`     | Action for leaf items        |
| **labelHeader**     | `ReactNode`      | Header at submenu start      |
| **content**         | `ReactNode`      | Optional content below label |
| **showDepthHeader** | `boolean`        | Override header visibility   |

---

## 🎨 Styling Guide

All styles are Tailwind-compatible and override-friendly.

| Element     | Class Key | Default Styles                                                                        |
| ----------- | --------- | ------------------------------------------------------------------------------------- |
| **Trigger** | `trigger` | `flex items-center justify-center border px-3 py-1 text-sm font-medium text-gray-700` |
| **Menu**    | `menu`    | `absolute bg-white border rounded-md min-w-[12rem]`                                   |
| **Item**    | `item`    | `px-4 py-2 text-sm hover:bg-gray-100 flex justify-between items-center`               |
| **Header**  | `header`  | `px-4 pt-2 pb-1 text-sm font-semibold text-gray-700 border-b`                         |
| **Search**  | `search`  | `w-full px-2 py-1 border-t border-b text-sm`                                          |

You can override styles like this:

```tsx
<Dropdown
  triggerClassName="bg-indigo-600 text-white hover:bg-indigo-700"
  menuClassName="shadow-xl border-gray-200 rounded-xl"
  itemClassName="hover:bg-indigo-50"
  submenuIconClass="text-gray-500"
/>
```

---

## 🧭 Positioning Examples

```tsx
position="bottom-left"    // Below trigger, aligned left
position="bottom-center"  // Below trigger, centered
position="top-right"      // Above trigger, aligned right
submenuPosition="left"    // Submenus open to the left
submenuPosition="right"   // Submenus open to the right
```

---

## 🔍 Searchable Dropdown Example

```tsx
<Dropdown
  label="Search Menu"
  menuItems={menuItems}
  position="bottom-right"
  searchInput
/>
```

Automatically adds a search bar to filter items by label.

---

## 🧠 Custom Item Rendering Example

```tsx
<Dropdown
  label="Custom Render"
  menuItems={menuItems}
  renderItem={(item, { handleClick, isOpen }) => (
    <div
      onClick={handleClick}
      className={`flex items-center justify-between px-4 py-2 hover:bg-gray-100 ${
        isOpen ? "bg-gray-50" : ""
      }`}
    >
      <span>{item.label}</span>
      {item.children && <span className="text-gray-400">▶</span>}
    </div>
  )}
/>
```

---

## ⌨️ Keyboard Shortcuts

* **Enter / Space** → open submenu or trigger item
* **ArrowRight / ArrowLeft** → navigate between levels
* **Escape** → close all menus

Built with full ARIA compliance and focus management.

---

## 🧩 Deeply Nested Example

```tsx
const deepMenu = [
  {
    label: "Menu 1",
    children: [
      {
        label: "Submenu 1.1",
        children: [
          {
            label: "Submenu 1.1.1",
            children: [
              { label: "Submenu 1.1.1.1" },
              { label: "Submenu 1.1.1.2" },
              { label: "Submenu 1.1.1.3" },
            ],
          },
        ],
      },
    ],
  },
];
```

---

## 🪄 Tips & Best Practices

* Use `closeOnScroll` for menus in scrollable layouts
* Add `maxMenuHeight="300px"` for tall dropdowns
* Combine `menuOffset` with position for perfect alignment
* Use callbacks (`onMenuOpen` / `onMenuClose`) for analytics

---

## 🧾 License

MIT © Dropdown Ninja
Created with ❤️ using **React**, **TypeScript**, and **TailwindCSS**.
