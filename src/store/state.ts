import { NewsItem } from "@/api";

const state = {
  news: [] as NewsItem[],
};

// state로 정의된 코드를 그대로 RootState 란 타입으로 들고 오겠다.
type RootState = typeof state;

export { state, RootState };
