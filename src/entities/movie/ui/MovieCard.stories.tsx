import type { Meta, StoryObj } from "@storybook/react-vite";
import { MemoryRouter } from "react-router-dom";

import { MovieCard } from "./MovieCard";

const meta = {
  title: "Entities/MovieCard",
  component: MovieCard,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  argTypes: {
    variant: {
      control: "select",
      options: ["long", "wide"],
    },
    showInfo: {
      control: "boolean",
    },
    rating: {
      control: "number",
    },
    type: {
      control: "select",
      options: ["movie", "series"],
    },
  },
} satisfies Meta<typeof MovieCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 1,
    title: "Побег из Шоушенка",
    posterPath: "/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    variant: "long",
    rating: 8.7,
    type: "movie",
    genres: ["Драма", "Криминал"],
    showInfo: true,
  },
};

export const Wide: Story = {
  args: {
    id: 2,
    title: "Темный рыцарь",
    posterPath: "/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    variant: "wide",
    rating: 9,
    type: "movie",
    genres: ["Боевик", "Криминал"],
    showInfo: true,
  },
};

export const WithoutInfo: Story = {
  args: {
    id: 3,
    title: "Начало",
    posterPath: "/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
    variant: "long",
    showInfo: false,
  },
};
