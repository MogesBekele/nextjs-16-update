export const metadata = {
  title: "About page",
  description: "this is about page description for seo",
  keywords: "different keywork to describe the page",
  openGraph: {
    title: "About page",
    description: "this is about page description for seo",
    url: "https://www.example.com",
    siteName: "My site",
    images: [
      {
        url: "https://www.example.com/og-image.png",
        width: 800,
        height: 600,
      },
    ],
  },
  twitter:{
    card: "summary large image",
    title: "About page",
    description:"master metadata for robots and social media",
    images: ["https://www.example.com/twitter-image.png"],
  },
  robots:{
    index: true,
    follow: true,
    nocache: true,
    googleBot:{
      index:true,
      follow:true,
    }
    
  }
};
export default function AboutPage() {
  return (
    <div>
      <h1>this is about page on client side</h1>
    </div>
  );
}
