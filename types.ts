
export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  category: string;
  time: string;
}

export interface ScheduleItem {
  time: string;
  program: string;
  description: string;
  isLive?: boolean;
}

export interface WeatherInfo {
  city: string;
  temp: number;
  condition: string;
}
