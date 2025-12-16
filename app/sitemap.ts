// export default function sitemap() {
//   return [
//     {
//       url: "https://varunkumar.online",
//       lastModified: new Date(),
//       changeFrequency: "monthly",
//       priority: 1.0,
//     },
//   ];
// }


import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://varunkumar.online",
      lastModified: "2025-01-01",
      changeFrequency: "monthly",
      priority: 1.0,
    },
  ];
}
