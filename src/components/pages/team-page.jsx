function TeamPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white flex justify-center px-6 py-20">
      <section className="max-w-3xl w-full">
        <h1 className="text-center text-4xl font-bold mb-10">
          The <span className="font-title">"Dreams?"</span> team:
        </h1>

        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 shadow-xl">
          <h2 className="text-2xl font-semibold mb-3">
            Alejandro Bravo Lingyte
          </h2>

          <p className="text-gray-300 leading-relaxed">
            Yep, I'm the only team member working on this game hehe. I'm a 16
            years old game developer who started making
            <span className="font-title"> "Dreams?" </span>
            after a dream I had while I was sick.
          </p>

          <p className="text-gray-300 leading-relaxed mt-4">
            That simple dream slowly evolved into a whole world, with its own
            story, characters, music and mechanics. What started as an idea
            became the game I'm currently building.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            My roles on the game:
          </h2>

          <ul className="grid gap-3 text-gray-300">
            <li className="bg-gray-800 rounded-lg p-3">
              💻 <b>Programmer</b>
              <br />
              Creating the gameplay systems, tools and mechanics.
            </li>

            <li className="bg-gray-800 rounded-lg p-3">
              🎵 <b>Musician & Composer</b>
              <br />
              Making the soundtrack and creating the atmosphere of the game.
            </li>

            <li className="bg-gray-800 rounded-lg p-3">
              🎨 <b>Artist</b>
              <br />
              Designing visuals and drawing the artwork.
            </li>

            <li className="bg-gray-800 rounded-lg p-3">
              👾 <b>Sprite Artist</b>
              <br />
              Creating sprites and visual elements for the game.
            </li>

            <li className="bg-gray-800 rounded-lg p-3">
              🎬 <b>Director</b>
              <br />
              Managing the vision, story and overall direction of
              <span className="font-title"> "Dreams?"</span>.
            </li>
          </ul>

          <div className="mt-8 border-t border-gray-700 pt-5 text-gray-400 italic">
            "A game made by one person, one idea, and a dream.{' '}
            {/* Null comment */}
            That is '<span className="font-title"> Dreams? </span>'"
          </div>
        </div>
      </section>
    </main>
  )
}

export default TeamPage
