import { Button as Component } from "../components/Button";

export default {
  title: "Components/Button",
  component: Component
}

const Template = args => <Component {...args} />

export const Primary = Template.bind({})