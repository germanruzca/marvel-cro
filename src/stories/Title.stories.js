import React from "react";
import { Title as Component } from "../components/Title";

export default {
  title: "Components/Title",
  component: Component
}

const Template = args => <Component {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: "Chronological Order: Marvel Movies"
}

export const Secondary = Template.bind({});
Secondary.args = {
  title: "This is a title"
}