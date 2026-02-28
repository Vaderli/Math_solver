import SettingsForm from "./SettingsForm";

export default {
  title: "Components/Settings Form",
  component: SettingsForm,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div
        style={{
          maxWidth: "420px",
          margin: "2rem auto",
          padding: "2rem",
          background: "#f5f5f5",
          borderRadius: "12px",
        }}
      >
        <Story />
      </div>
    ),
  ],
  argTypes: {
    defaultValues: {
      control: "object",
      description: "Initial form values",
    },
    onSave: {
      action: "saved",
      description: "Triggered when form is submitted",
    },
    onCancel: {
      action: "cancelled",
      description: "Triggered when cancel button is pressed",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "SettingsForm component allows users to configure quiz difficulty and number of questions before starting the test.",
      },
    },
  },
};

const Template = (args) => <SettingsForm {...args} />;

/* ---------------------------------- */
/* STORIES */
/* ---------------------------------- */

export const EasyLevel = Template.bind({});
EasyLevel.args = {
  defaultValues: {
    difficulty: "easy",
    count: 5,
  },
};
EasyLevel.parameters = {
  docs: {
    description: {
      story: "Default easy mode configuration suitable for beginners.",
    },
  },
};

export const HardStart = Template.bind({});
HardStart.args = {
  defaultValues: {
    difficulty: "hard",
    count: 20,
  },
};
HardStart.parameters = {
  docs: {
    description: {
      story: "Hard difficulty with maximum number of questions.",
    },
  },
};

export const MinimumAllowed = Template.bind({});
MinimumAllowed.args = {
  defaultValues: {
    difficulty: "medium",
    count: 4,
  },
};
MinimumAllowed.parameters = {
  docs: {
    description: {
      story: "Minimum allowed number of questions.",
    },
  },
};

export const MaximumAllowed = Template.bind({});
MaximumAllowed.args = {
  defaultValues: {
    difficulty: "medium",
    count: 20,
  },
};
MaximumAllowed.parameters = {
  docs: {
    description: {
      story: "Maximum allowed number of questions.",
    },
  },
};