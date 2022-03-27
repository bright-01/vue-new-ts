import Vue from "vue";
import { MyStore } from "../store/types";

// NOTE: 'node_module/vues/types/vue.d.ts' 파일을 삭제해줘야 아래 타입이 정상 추론됨
declare module "Vue/types/vue" {
  interface Vue {
    $store: MyStore;
  }
}
declare module "Vue/types/options" {
  interface ComponentOptions<V extends Vue> {
    stroe?: MyStore;
  }
}
