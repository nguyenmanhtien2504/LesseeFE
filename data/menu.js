import { Clipboard, Home, Layers, Link, MapPin, User, Zap } from "react-feather";

export const MainNavMenuItems = [
  {
    title: "Trang chủ",
    icon: <Home />,
    type: "sub",
    children: [
      {
        path: "/pages/blog-page/masonry-no-sidebar",
        title: "Tin tức",
        type: "link",
      },
      { path: "/listing/grid-view/map-header/pigeon-map", title: "Bản đồ", type: "link" },
      { path: "/listing/grid-view/3-grid/no-sidebar", title: "Toàn bộ nhà", type: "link" },
    ],
  },
  {
    title: "Tài khoản",
    icon: <Clipboard />,
    type: "sub",
    children: [
      {
        path: "/pages/user-panel/user-dashboard",
        title: "Thông tin chung",
        type: "link",
      },
    ],
  },

  {
    title: "Biểu mẩu",
    icon: <Link />,
    type: "sub",
    children: [
      { path: "/contact/contact-us-1", title: "Đóng góp", type: "link" },
      { path: "/pages/other-pages/faq", title: "FAQ", type: "link" },
    ],
  },
  {
    title: "Chúng tôi",
    icon: <MapPin />,
    type: "sub",
    children: [
      {
        path: "/pages/other-pages/about-us-1",
        title: "Thông tin",
        type: "link",
      },
      { path: "/pages/other-pages/privacy-policy", title: "Chính sách", type: "link" },
    ],
  },
];

export const RightNavMenuItem = [
  {
    title: "language",
    option: [
      { lang: "en", language: "English" },
      { lang: "fr", language: "French" },
      { lang: "ar", language: "Arabic" },
      { lang: "es", language: "Spanish" },
    ],
  },
  {
    title: "cart",
  },
  {
    title: "currency",
    type: [
      {
        currency: "USD",
        name: "dollar",
        symbol: "$",
        value: 1,
      },
      {
        currency: "EUR",
        name: "euro",
        symbol: "€",
        value: 0.997,
      },
      {
        currency: "GBP",
        name: "pound",
        symbol: "£",
        value: 0.847,
      },
      {
        currency: "IND",
        name: "rupees",
        symbol: "₹",
        value: 79.9,
      },
    ],
  },
  { title: "user" },
];
