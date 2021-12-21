import React from "react";
import { Target as Component } from "../components/Target";

export default {
  title: "Components/Target",
  component: Component
}

const Template = args => <Component {...args} />;

export const Primary = Template.bind({});