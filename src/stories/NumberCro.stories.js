import { NumberCro as Component} from "../components/NumberCro";

export default {
  title: "Components/NumberCro",
  component: Component
}

const Template = args => <Component {...args} />

export const Primary = Template.bind({})