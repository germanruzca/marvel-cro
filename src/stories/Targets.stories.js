import { Targets as Component } from "../components/Targets";

export default {
  title: "Components/Targets",
  component: Component
}

const Template = args => <Component {...args} />

export const Primary = Template.bind({})