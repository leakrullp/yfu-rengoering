const base = import.meta.env.BASE_URL || "/"; // "/" or "/art-portfolio/"
const baseWithSlash = base.endsWith("/") ? base : `${base}/`;

const projects = [
  {
    id: 1,
    title: "Portraits",
    pieceIds: [1, 2, 1, 2, 1, 2, 1, 2],
    thumbnailId: 1,
    year: 2025,
    description: "fancy-markdown.md",
  },
  {
    id: 2,
    title: "Animals and Things",
    pieceIds: [3, 4],
    thumbnailId: 3,
    year: 2025,
    description: "simple-markdown.md",
  },
  {
    id: 3,
    title: "Old stuff",
    pieceIds: [4, 1],
    thumbnailId: 4,
    year: 2025,
  },
  {
    id: 4,
    title: "Van Gogh",
    pieceIds: [2],
    thumbnailId: 2,
    year: 1960,
  },
  {
    id: 5,
    title: "Electrical Circuit",
    pieceIds: [5],
    thumbnailId: 5,
    year: 2026,
    description: "simple-markdown.md",
  },
].map((item) => ({
  ...item,
  descriptionPath: item.description
    ? `${baseWithSlash}descriptions/${item.description}`
    : null,
}));

export default projects;
