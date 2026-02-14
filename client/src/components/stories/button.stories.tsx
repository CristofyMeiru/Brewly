import type { Meta, StoryObj } from "@storybook/react-vite";
import { IconMail, IconSearch } from "@tabler/icons-react";
import { fn } from "storybook/test";
import { Button } from "../ui/button";

const meta = {
  title: "UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Primary: Story = {
  args: { variant: "default", children: "Primary Button" },
};

export const Outline: Story = {
  args: { variant: "outline", children: "Outline Button" },
};

export const Secondary: Story = {
  args: { variant: "secondary", children: "Secondary Button" },
};

export const Ghost: Story = {
  args: { variant: "ghost", children: "Ghost Button" },
};

export const Destructive: Story = {
  args: { variant: "destructive", children: "Delete Account" },
};

export const Link: Story = {
  args: { variant: "link", children: "Link Style" },
};

// --- VARIANTES DE TAMANHO ---

export const ExtraSmall: Story = {
  args: { size: "xs", children: "Extra Small" },
};

export const Small: Story = {
  args: { size: "sm", children: "Small Button" },
};

export const Large: Story = {
  args: { size: "lg", children: "Large Button" },
};

// --- VARIANTES DE ÍCONE ---

export const IconLarge: Story = {
  args: {
    size: "icon-lg",
    children: <IconSearch />,
  },
};

export const IconOnly: Story = {
  args: {
    size: "icon",
    children: <IconSearch />,
    "aria-label": "Search",
  },
};

export const IconSmall: Story = {
  args: {
    size: "icon-sm",
    children: <IconSearch />,
  },
};

export const WithIcon: Story = {
  args: {
    children: (
      <>
        <IconMail /> Send Email
      </>
    ),
  },
};

// --- ESTADOS ---

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled Button",
  },
};
