export default function Home() {
  return (
    <section class="mx-auto flex flex-col-reverse sm:flex-row gap-4 items-center">
      <div class="prose prose-stone dark:prose-invert max-w-[80ch] text-center basis-auto sm:basis-full">
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
          Based in Hertfordshire and London, UK 🌍
        </p>
      </div>
      <div class="basis-auto sm:basis-full flex justify-center">
        <img
          class="rounded-full"
          src="/mahesh.jpeg"
          alt="A photo of Mahesh Makani, under a cherry blossom tree. He is smiling and looking towards the top left of the image."
        />
      </div>
    </section>
  );
}
