import React, { Children } from "react";
import { Text, RichText, Image, types } from "react-bricks/frontend";

//=============================
// Local Types
//=============================
type Padding = "big" | "small";
type Size = "large" | "small";

interface HeroUnitProps {
  padding: Padding;
  title: string;
  size: Size;
}

//=============================
// Component to be rendered
//=============================
const Heading: types.Brick<HeroUnitProps> = ({ padding, size }) => {
  return (
    <div
      className={`max-w-xl mx-auto px-6 ${
        padding === "big" ? "py-20" : "py-12"
      }`}
    >
      <div>
        <Text
          renderBlock={(props) => (
            <h1
              className={`text-3xl ${
                size === "large" ? "sm:text-5xl" : "sm:text-4xl"
              } text-center font-black text-gray-800 dark:text-white leading-tight mb-3`}
            >
              {props.children}
            </h1>
          )}
          placeholder="Type a title..."
          propName="title"
        />
      </div>
    </div>
  );
};

//=============================
// Brick Schema
//=============================
Heading.schema = {
  name: "heading",
  label: "Heading",
  getDefaultProps: () => ({
    padding: "big",
    size: "large",
    title: "This is a custom Hero Unit",
  }),
  sideEditProps: [
    {
      name: "padding",
      label: "Padding",
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Select,
        options: [
          { value: "big", label: "Big Padding" },
          { value: "small", label: "Small Padding" },
        ],
      },
    },
    {
      name: "size",
      label: "Font Size",
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Select,
        options: [
          { value: "large", label: "Large Font" },
          { value: "small", label: "Small Font" },
        ],
      },
    },
  ],
};

export default Heading;
