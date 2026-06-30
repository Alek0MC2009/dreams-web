export function DemoPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white flex justify-center items-center px-6">
      <section className="">
        <div className="">
          <h1 className="text-4xl font-bold mb-6 text-center font-title">
            "Dreams?" Demo
          </h1>
          <p className="text-xl text-purple-300 text-center mb-8 font-bold">
            Currently the "Dreams?" demo is in development
          </p>
        </div>

        <div className="space-y-6 text-gray-300 leading-relaxed">
          <h2 className="text-2xl font-semibold text-white">
            Dreams? DEMO features
          </h2>

          <div className="bg-gray-800 rounded-xl p-5 border border-gray-700">
            <h3 className="font-bold text-red-400 mb-2">Disclaimer:</h3>

            <p>
              Dreams demo is the first chapter of the game. Take in note that
              the savefile of the demo will transfer to the full version,
              because it is the same game but with only the first chapter
              content.
            </p>

            <p className="mt-4">
              However, the demo may not be 100% indicative of the final game,
              because it is developed on the first version of the project.
            </p>

            <p className="mt-4">
              If you encounter any bug on the demo, contact me on my{' '}
              <a
                className="
                  text-blue-400
                  hover:text-blue-300
                  hover:underline
                  underline-offset-4
                  transition
                "
                href="mailto:alejandrobravolingyte@gmail.com"
              >
                mail
              </a>
              .<br />
              <p className="mt-3 text-[10px] text-center">(Thank you :D)</p>
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
