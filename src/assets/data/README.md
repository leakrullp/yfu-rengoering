written by [leakrullp](https://github.com/leakrullp) on Jan 30, 2026

# Updating image and project files
`individuals.js` is where a file is indexed after it is added inside the `public/img` folder. The image can be any format.
New projects are added to the `individual_pieces` array in the following format.
```javascript
{
    id: 100,
    file: "01_boy-in-red.png", //must contain filetype, e.g. ".png"
    alt: "Boy in Red",
},
```
`projects.js` is where the indexed projects can be referenced as part of a project. It is also possible to reference a single file to showcase it alone.
Projects are added to the `projects` array in the following format:
```javascript
{
    id: 1,
    title: "This is a project presentation",
    pieceIds: [100, 101], //must also contain brackets when only listing one piece, e.g. "pieceIds: [101],"
    thumbnailId: 101,
    year: 2025,
    description: "simple-markdown.md", // optional! If there is no description this line can be deleted.
},
```
The `description` field must reference the name of a Markdown file loacted in `public/description`.
No other locations will work. Always include `.md` in the name.
The individual pieces use indexing numbers 100 or larger. The projects use indexing numbers between 1 and 99. 

## Updating the carousel
`carousel.js` controls which images from the `individuals_pieces` array in `individuals.js` we display in the carousel on the frontpage.
They appear in the order they are listed inside the array.
