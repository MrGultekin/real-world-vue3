import { createRouter, createWebHistory } from "vue-router";
import EventList from "../views/EventList.vue";
import EventDetails from "@/views/EventDetails.vue";
import About from "../views/About.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "EventList",
      component: EventList,
    },
    {
      // path: "/event/123",
      path: "/event/:id",
      name: "EventDetails",
      props: true,
      component: EventDetails,
    },
    {
      path: "/about",
      name: "About",
      component: About,
    },
  ],
});

export default router;
