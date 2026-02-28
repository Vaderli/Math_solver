import TimerComponent from "./TimerComponent";

export default {
  title: "Components/Timer",
  component: TimerComponent,
  tags: ["autodocs"],
  argTypes: {
    timerValue: { control: "number" },
  },
  parameters: {
    docs: {
      description: {
        component:
          "Visual timer component that displays remaining time and changes style when expired.",
      },
    },
  },
};

const Template = (args) => (
  <TimerComponent {...args} useHook={false} />
);

export const Normal = Template.bind({});
Normal.args = {
  timerValue: 30,
};

export const ShortTime = Template.bind({});
ShortTime.args = {
  timerValue: 5,
};

export const Critical = Template.bind({});
Critical.args = {
  timerValue: 2,
};

export const Expired = Template.bind({});
Expired.args = {
  timerValue: 0,
};