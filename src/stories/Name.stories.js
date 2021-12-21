import { Name as Component} from "../components/Name"

export default {
  title: "Components/Name",
  component: Component
}

const Template = args => <Component {...args} />

export const Primary = Template.bind({})