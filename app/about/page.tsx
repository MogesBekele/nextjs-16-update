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
  ]}
};
export default function AboutPage() {
  return (
    <div>
      <h1>this is about page on client side</h1>
    </div>
  );
}
