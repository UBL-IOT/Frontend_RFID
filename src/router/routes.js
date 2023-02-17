const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "dashboard",
        component: () => import("pages/Index.vue"),
      },
      {
        path: "",
        name: "inputAplikasi",
        component: () => import("pages/menu/InputAplikasi.vue"),
      },
      {
        path: "",
        name: "listUser",
        component: () => import("pages/menu/user/ListUser.vue"),
      },
      {
        path: "",
        name: "inputUser",
        component: () => import("src/pages/menu/user/InputUser.vue"),
      },
      {
        path: "/admin",
        component: () => import("pages/admin/Index"),
        meta: { requireLogin: true },
      },
    ],
  },
  {
    name: "LoginIn",
    path: "/login",
    component: () => import("pages/Login.vue"),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
