import SpacificBlog from "@/Components/BlogPages/SpacificBlog";
import BlogLayout from "@/Components/layouts/blogLayout";

export default function Page({
  params,
}: Readonly<{ params: { title: string } }>) {
  return (
    <BlogLayout>
      <SpacificBlog title={params.title} />
    </BlogLayout>
  );
}
