# Viraj H2 Website

A modern website for Viraj H2!

## Prerequisites

- Git
- Node.js (v20.x or higher)
- npm (v10.x or higher)

## How to run locally

1. Clone the repository:
```bash
git clone https://github.com/yourusername/viraj-h2-website.git
cd viraj-h2-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and go to:
```bash
http://localhost:5173
```

## How to deploy

1. Build the project:
```bash
npm run build
```

2. Copy the contents of the `dist` directory to your web server.

## How to add posts
### Instructions

1. Navigate to the `public/blog/data.json` file.
2. Add a new post object to the array with the following structure:
```json
{
  "title": "Your Post Title",
  "description": "A brief description of your post",
  "authors": ["Author Name"],
  "category": "Category Name",
  "tags": ["zero", "or", "more", "tags"],
  "date": "YYYY-MM-DD",
  "content_dir": "directory_of_your_post_content",
  "preview": "path_to_preview_image"
}
```
3. Create a markdown file named `post.md` in the `content_dir` directory.

### Example

Suppose you want to add a post with the following details:

```json
{
  "title": "My First Post",
  "description": "This is my first post!",
  "authors": ["John Doe"],
  "category": "General",
  "tags": ["first", "post"],
  "date": "2021-01-01",
  "content_dir": "my_first_post",
  "preview": "images/preview.jpg"
}
```

The directory structure should look like this:
```
public
└── blog
    ├── data.json
    └── my_first_post
        ├── images
        │   └── preview.jpg
        └── post.md
```

The content of the `post.md` file can be:
```markdown
# My First Post

This is my first post! It's `awesome`!
```

## How to edit team members
### Instructions

1. Navigate to the `public/team/data.json` file.
2. Edit the existing team member objects or add new ones within the appropriate section. Each team member object should have the following structure:
```json
{
  "photo": "path_to_photo",
  "name": "Team Member Name",
  "position": "Position",
  "linkedin": "LinkedIn Profile URL (optional)"
}
```

### Example

Suppose you want to add a new team member with the following details:

```json
{
  "photo": "john_doe.jpg",
  "name": "John Doe",
  "position": "Software Developer",
  "linkedin": "johndoe"
}
```

⚠️ The LinkedIn URL should be the last part of the profile URL. For example, if the LinkedIn profile URL is `https://www.linkedin.com/in/johndoe`, the `linkedin` field should be `johndoe`.

The directory structure should look like this:
```
public
└── team
    ├── images
    │   └── john_doe.jpg
    └── data.json
```

## How to add job offers
### Instructions

1. Navigate to the `public/careers/data.json` file.
2. Add a new job offer object to the array with the following structure:
```json
{
  "id": "Unique Job Identifier",
  "title": "Job Title",
  "department": "Department Name",
  "location": "Job Location",
  "type": "Job Type",
  "description": "Job Description",
  "requirements": ["one", "or", "more", "requirements"],
  "helloworkLink": "Optional Hellowork Link",
  "indeedLink": "Optional Indeed Link",
  "linkedinLink": "Optional LinkedIn Link"
}
```

### Example

Suppose you want to add a new job offer with the following details:

```json
{
  "id": "175631",
  "title": "Software Developer",
  "department": "Development",
  "description": "We are looking for a software developer to join our team!",
  "location": "Remote",
  "requirements": ["Experience with JavaScript", "Experience with Node.js"],
  "linkedinLink": "https://www.linkedin.com/fake_job_link"
}
```

The directory structure should look like this:
```
public
└── careers
    └── data.json
```

## How to edit sponsors
### Instructions

1. Navigate to the `public/sponsors/data.json` file.
2. Add, edit, or remove the sponsor image file names in the array. Each entry should be the file name of the sponsor's logo image:
```json
[
  "sponsor1.png",
  "sponsor2.png",
  "sponsor3.png"
]
```
3. Ensure the sponsor logo images are placed in the `public/sponsors/images` directory.

