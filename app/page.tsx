import BlogCard from "./_component/BlogCard";
import avtar from "@/public/assets/avtar.png";

export default function Home() {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] auto-rows-auto gap-4 p-4 min-h-screen">
      <BlogCard
        avtar={avtar}
        title="Short Title"
        desc="This is a short description."
        date="01-01-2024"
        userName="Adam"
        blogImage={avtar}
      />
      <BlogCard
        avtar={avtar}
        title="A Much Longer Title to Test Dynamic Sizing"
        desc="This description is a bit longer to test how the height of the card adjusts dynamically based on the content length. It also helps in ensuring proper alignment when placed next to smaller cards."
        date="02-01-2024"
        userName="Jack"
        blogImage={avtar}
      />
      <BlogCard
        avtar={avtar}
        title="Another Title"
        desc="Medium-length description to ensure everything looks good."
        date="03-01-2024"
        userName="John"
        blogImage={avtar}
      />
      <BlogCard
        avtar={avtar}
        title="Minimal Content"
        desc="Minimal description."
        date="04-01-2024"
        userName="Alice"
        blogImage={avtar}
      />
      <BlogCard
        avtar={avtar}
        title="Another Short Card"
        desc="Short description."
        date="05-01-2024"
        userName="Eve"
        blogImage={avtar}
      />
      <BlogCard
        avtar={avtar}
        title="Another Long Card for Testing"
        desc="This description is quite long to demonstrate how cards of different heights stack and align in a dense layout."
        date="06-01-2024"
        userName="Bob"
        blogImage={avtar}
      />
    </div>
  );
} 