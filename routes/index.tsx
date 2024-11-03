export default function Home() {
  return (
    <section class="mx-auto flex flex-col items-center justify-center">
      <img
        class="my-6 rounded-full"
        src="/mahesh.jpeg"
        width="128"
        height="128"
        alt="the Fresh logo: a sliced lemon dripping with juice"
      />
      <div class="prose sm:prose-sm md:prose-md lg:prose-lg prose-stone dark:prose-invert text-center">
        <h1>Mahesh Makani</h1>
        <h2>Software Developer</h2>
        <p>
          he/him
        </p>
        <p>
          Cruising the information superhighway 🏄
        </p>
        <p>
          Coding along the full stack across the way 👨‍💻
        </p>
        <p>
          Based in Hertfordshire and London, UK
        </p>
      </div>
    </section>
  );
}
