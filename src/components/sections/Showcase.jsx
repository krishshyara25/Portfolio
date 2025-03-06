

export const Showcase = () => {
 
  return (
    <section className="my-16 text-center">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">Project Showcase</h2>
          <div className="max-w-7xl mx-auto">
            <iframe
              width="100%"
              height="600"
              src="https://www.youtube.com/embed/t9ce_9I34D0?autoplay=1&loop=1&playlist=t9ce_9I34D0&enablejsapi=1"
              title="Arcade Array Showcase"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg shadow-lg border border-gray-800"
            ></iframe>
            <p className="mt-4 text-lg">
              This is a demo of my latest project <strong>Arcade Array</strong>, featuring game store functionality with online payments.
            </p>
          </div>
        </section>
  );
};
