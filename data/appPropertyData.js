import { Briefcase, BookOpen, DollarSign, Home, MapPin, Settings } from "react-feather";

export const AppPropertyData = {
  WhatAreYouLookingFor: [
    { title: "Nhà", img: "/assets/svg/icons.svg#home-lock", path: "/listing/grid-view/3-grid/no-sidebar" },
    { title: "Khách sạn", img: "/assets/svg/icons.svg#home-heart", path: "/pages/other-pages/coming-soon-2" },
    { title: "Nghỉ dưỡng", img: "/assets/svg/icons.svg#key", path: "/pages/other-pages/coming-soon-2" },
  ],
  PropertyServices: [
    { title: "Tư vấn Bất động sản", img: <Home />, details: "Chúng tôi sẽ cung cấp cho bạn những lời khuyên chuyên nghiệp và tận tâm từ đội ngũ chuyên gia bất động sản của chúng tôi. Chúng tôi hiểu rõ nhu cầu của bạn và sẽ giúp bạn tìm được căn nhà hoàn hảo với mức giá hợp lý." },
    { title: " Đàm phán Giá thuê", img: <DollarSign />, details: "Đội ngũ chúng tôi sẽ thương lượng một giá thuê hợp lý và cạnh tranh, giúp bạn tiết kiệm tối đa chi phí khi thuê nhà. Chúng tôi cam kết đảm bảo bạn nhận được giá trị tốt nhất cho ngôi nhà mà bạn muốn thuê." },
    { title: "Hỗ trợ Thủ tục Hợp đồng", img: <Settings />, details: "Đội ngũ chúng tôi sẽ hỗ trợ bạn trong mọi bước thủ tục liên quan đến hợp đồng thuê nhà. Từ xác nhận thông tin cá nhân đến kiểm tra giấy tờ hợp lệ, chúng tôi đảm bảo quá trình ký hợp đồng diễn ra một cách thuận tiện và nhanh chóng." },
    { title: "Sửa chữa và Bảo trì", img: <Briefcase />, details: " Chúng tôi cung cấp dịch vụ sửa chữa và bảo trì định kỳ để đảm bảo ngôi nhà của bạn luôn được duy trì tốt nhất. Chúng tôi cam kết cung cấp chất lượng cao và đáng tin cậy, giúp bạn sống thoải mái và an tâm trong ngôi nhà mà bạn đã thuê." },
    { title: "Tư vấn Pháp lý và Thuế", img: <BookOpen />, details: " Đội ngũ chuyên gia pháp lý của chúng tôi sẽ cung cấp sự hỗ trợ toàn diện về các vấn đề pháp lý và thuế liên quan đến việc thuê nhà. Chúng tôi sẽ giúp bạn hiểu rõ về các quy định, điều khoản và điều kiện trong hợp đồng thuê nhà, đồng thời đảm bảo bạn tuân thủ đúng quy định và tránh các rủi ro pháp lý trong quá trình thuê nhà." },
    { title: "Xem nhà và Thăm quan", img: <MapPin />, details: "Chúng tôi sẽ sắp xếp các cuộc hẹn xem nhà và thăm quan dẫn bạn đến từng căn nhà một cách chuyên nghiệp. Bạn sẽ có cơ hội khám phá từng góc nhỏ trong ngôi nhà và tạo ra quyết định chính xác về việc thuê ngôi nhà ưng ý nhất." },
  ],
  OurNewOffer: [
    { title: "Looking for the new home?", details: "10 new offers every day. 350 offers on site, trusted by a community of thousands of users.", img: "/assets/images/others/icon-1.png" },
    { title: "Are you looking for home?", details: "350 offers on site, trusted by a community of thousands of users. 10 new offers every day.", img: "/assets/images/others/icon-2.png" },
    { title: "Looking for the new Office?", details: "10 new offers every day. 350 offers on site, trusted by a community of thousands of users.", img: "/assets/images/others/icon-1.png" },
  ],
  corporateLayoutHomeBanner: [
    {
      title: "How Much is My Land Worth ?",
      details: "Elegant retreat in a quiet Coral Gables setting. This home provides wonderful entertaining spaces with a chef kitchen opening Elegant retreat in a quiet Coral Gables setting.",
    },
    {
      title: "How Much is My House Worth ?",
      details: "This home provides wonderful entertaining spaces with a chef kitchen opening Elegant retreat in a quiet Coral Gables setting. Elegant retreat in a quiet Coral Gables setting.",
    },
  ],
  ProvidedServices: [
    {
      img: "/assets/svg/icons.svg#home-heart",
      title: "Property Insurance",
      details: "Elegant retreat in a quiet Coral Gables setting. This home provides wonderful entertaining spaces with a chef kitchen opening.",
    },
    {
      img: "/assets/svg/icons.svg#customer-service",
      title: "Fastest Service",
      details: "This home provides wonderful entertaining spaces with a chef kitchen opening.Elegant retreat in a quiet Coral Gables setting.",
    },
    {
      img: "/assets/svg/icons.svg#shield",
      title: "Largest Real Estate",
      details: "A great name for a ranch surrounded by valley.This home provides wonderful entertaining space with kitchen opening.",
    },
  ],
  PricingPlan: [
    {
      img: "/assets/svg/icons.svg#home-heart",
      title: "Personal",
      details: "Residential design is the design of the interior of private residences.",
      moreDetails: ["Entertaining spaces with kitchen opening.", "Elegant retreat in a quiet setting.", "Apartment An individual multi-unit building."],
      price: "120.00",
    },
    {
      img: "/assets/svg/icons.svg#home-lock",
      title: "Professional",
      details: "Elegant retreat in a quiet Coral Gables setting. This home provides opening.",
      moreDetails: ["house is a single-unit residential building.", "This House provides opening.", "Location of resources will draw attention."],
      price: "310.00",
    },
    {
      img: "/assets/svg/icons.svg#homes",
      title: "Business",
      details: "Apartment An individual multi-unit building. Elegant Coral Gables setting.",
      moreDetails: ["Development team work together in many ways.", "Apartment individual multi-unit building.", "great name for ranch surrounded by valleys."],
      price: "430.00",
    },
    {
      img: "/assets/svg/icons.svg#home-lock",
      title: "Professional",
      details: "Entertaining spaces with kitchen opening. This home provides opening.",
      moreDetails: ["house is a single-unit residential building.", "This House provides opening.", "Location of resources will draw attention."],
      price: "310.00",
    },
  ],
  FeaturedCitiesInEnterprise: [
    { img: "/assets/images/feature/3.jpg", city: "U.S.A" },
    { img: "/assets/images/feature/4.jpg", city: "New York" },
    { img: "/assets/images/feature/6.jpg", city: "England" },
    { img: "/assets/images/feature/5.jpg", city: "America" },
    { img: "/assets/images/feature/7.jpg", city: "Dubai" },
    { img: "/assets/images/feature/5.jpg", city: "England" },
  ],
  PropertyServicesInClassic: [
    {
      img: "/assets/images/service/2.png",
      title: "Mortgage Services",
      details: "Residences can be classified and connected to residences. Different types of housing can be used same physical type.",
    },
    { img: "/assets/images/service/1.png", title: "Property Management", details: "Property management is the operation, maintenance, and oversight of real estate and physical property." },
    { img: "/assets/images/service/3.png", title: "Currency Services", details: "A currency is standardization of money in any form when use or circulation as medium of exchange." },
    {
      img: "/assets/images/service/4.png",
      title: "Important Notification",
      details: "Residences can be classified and connected to residences. Different types of housing can be used same physical type.",
    },
    { img: "/assets/images/service/5.png", title: "Near by me", details: "Residences can be classified and connected to residences. Different types of housing can be used same physical type." },
    { img: "/assets/images/service/1.png", title: "Property Management", details: "Property management is the operation, maintenance, and oversight of real estate and physical property." },
  ],
  Brand1: ["/assets/images/brand/17.png", "/assets/images/brand/18.png", "/assets/images/brand/19.png", "/assets/images/brand/20.png", "/assets/images/brand/21.png", "/assets/images/brand/18.png"],
  Brand2: [
    "/assets/images/brand/6.png",
    "/assets/images/brand/7.png",
    "/assets/images/brand/8.png",
    "/assets/images/brand/9.png",
    "/assets/images/brand/10.png",
    "/assets/images/brand/11.png",
    "/assets/images/brand/7.png",
  ],
  Brand3: ["/assets/images/brand/12.png", "/assets/images/brand/13.png", "/assets/images/brand/14.png", "/assets/images/brand/15.png", "/assets/images/brand/16.png", "/assets/images/brand/13.png"],
  Brand4: ["/assets/images/brand/1.png", "/assets/images/brand/2.png", "/assets/images/brand/3.png", "/assets/images/brand/4.png", "/assets/images/brand/5.png", "/assets/images/brand/2.png"],
};
