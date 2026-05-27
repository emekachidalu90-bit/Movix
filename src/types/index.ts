export interface IMovie {
  id: string;
  title: string;
  description: string;
  genre: string[];
  language: string;
  year: number;
  rating: number;
  thumbnail: string;
  banner: string;
  video_url: string;
  trailer_url: string;
  quality_options: string[];
  category: 'trending' | 'popular' | 'anime';
  created_at?: string;
}
