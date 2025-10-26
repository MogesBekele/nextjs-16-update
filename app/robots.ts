//for privacy police page

import { MetadataRoute } from "next";

//block those sencetive areas
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: "/sencetive-data",
      },
      {
        userAgent: "googlebot",
        allow: "/",
        disallow: "/sensetive-data",
      },
    ],
    sitemap: "https://www.example.com/sitemap.xml",
  }
  
}
