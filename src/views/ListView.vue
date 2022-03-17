<template>
  <div>
    <!--    <list-item></list-item>-->
    <ListItem :items="newsItems"></ListItem>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ListItem from "../components/ListItem.vue";
import { fetchNews, NewsItem } from "@/api";

export default Vue.extend({
  components: {
    ListItem,
  },
  data() {
    return {
      newsItems: [] as NewsItem[],
    };
  },
  created() {
    this.fetchNewsItems();
  },
  methods: {
    async fetchNewsItems() {
      const response = await fetchNews();
      console.log(response.data);
      this.newsItems = response.data;
    },
  },
});
</script>

<style></style>
