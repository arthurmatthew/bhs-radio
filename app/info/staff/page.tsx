export default function Staff() {
  return (
    <main className="font-(family-name:--font-inter)">
      <section className="max-w-7xl items-center flex flex-col gap-4 mx-auto px-8">
        <article className="max-w-4xl my-20">
          <h1 className="font-(family-name:--font-alike) text-center text-5xl mb-10">
            Station Staff
          </h1>
          <div className="flex gap-4 items-center">
            <h2 className="text-2xl text-red-700">MATTHEW ARTHUR</h2>
            <h3 className="opacity-50">matthew@bhsradio.com</h3>
          </div>

          <p className="text-lg mb-10">
            I'm Matthew, one of the founders of Radio Club. I'm currently a
            senior at Ballard. I run and write the software behind the station,
            like the website and the livestream. I started this club because I
            really want to try and replicate the awesome music communities and
            scenes you can find in other schools, cities, or states. Reach out
            to me if you have any technical comments or questions.
          </p>
          <div className="flex gap-4 items-center">
            <h2 className="text-2xl text-red-700">DUNCAN BLAIR</h2>
            <h3 className="opacity-50">duncan@bhsradio.com</h3>
          </div>
          <p className="text-lg mb-10">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod ex
            commodi quaerat aperiam rerum ab adipisci! Quae similique
            repellendus veritatis saepe, distinctio quod velit facilis illo?
            Saepe, excepturi! Fugit, quam!
          </p>
          <h2 className="text-2xl text-red-700">NICK WHITE</h2>
          <p className="text-lg mb-10">
            My name is Nick, a senior at Ballard. I recruit new members for KBHS
            and create new playlists for the radio. I hope to help grow the KBHS
            community and create playlists that highlight lesser know artists
            and local musicians.
          </p>
        </article>
      </section>
    </main>
  );
}
