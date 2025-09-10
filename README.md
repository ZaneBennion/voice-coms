# YouTube Video Grid

A Next.js application that displays a grid of embedded YouTube videos managed through a Supabase database.

## Features

- 📺 Responsive grid layout for YouTube videos
- 🗄️ Supabase integration for video management
- 🎨 Modern UI with Tailwind CSS
- 📱 Mobile-friendly design
- ⚡ Real-time data fetching

## Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Set up Supabase

1. Create a new project at [supabase.com](https://supabase.com)
2. Go to your project's SQL editor and run the SQL from `database-schema.sql`
3. Copy your project URL and anon key from the project settings

### 3. Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
```

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Database Schema

The application uses a simple `youtube_videos` table with the following structure:

- `id` (UUID, Primary Key)
- `title` (Text) - Video title
- `youtube_url` (Text) - Full YouTube URL
- `thumbnail_url` (Text, Optional) - Custom thumbnail URL
- `created_at` (Timestamp) - Creation date
- `updated_at` (Timestamp) - Last update date

## Adding Videos

You can add videos to your database by:

1. Using the Supabase dashboard
2. Running SQL INSERT statements
3. Using the Supabase API directly

Example SQL:
```sql
INSERT INTO youtube_videos (title, youtube_url) 
VALUES ('My Video', 'https://www.youtube.com/watch?v=VIDEO_ID');
```

## Customization

- Modify `components/VideoGrid.tsx` to change the grid layout
- Update `app/page.tsx` to customize the main page
- Adjust styles in `app/globals.css` for custom styling

## Technologies Used

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Supabase
