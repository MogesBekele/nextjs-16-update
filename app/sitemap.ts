//for privacy police page


import { MetadataRoute } from "next";

//block those sencetive areas
export default function sitemap(): MetadataRoute.Sitemap {
  const baseurl="https://www.example.com"
return[
  {
    url:"https://www.example.com/",
    lastModified:new Date(),
    changeFrequency:"daily",
    priority: 0.4
  }

]
}
