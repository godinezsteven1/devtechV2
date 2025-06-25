export default function ContactCard() {
  return (
   <div className="max-w-[360px] w-full mx-auto rounded-lg shadow-md p-4 border">
  <form action="https://formspree.io/f/manjlnaj" method="POST">
    <div className="mb-4">
      <label className="block mb-2 text-gray-50" htmlFor="name"> Name </label>
      <input
        placeholder="John Doe"
        className="w-full p-2 border-b-2 border-purple-400 bg-transparent outline-none focus:border-b-2 focus:border-purple-600"
        type="text"
        name="name"
        id="name"
      />
    </div>
    <div className="mb-4">
      <label className="block mb-2 text-gray-50" htmlFor="email"> Email </label>
      <input
        placeholder="John.Doe@gmail.com"
        className="w-full p-2 border-b-2 border-purple-400 bg-transparent outline-none focus:border-b-2 focus:border-purple-600"
        name="email"
        id="email"
        type="email"
      />
    </div>
    <div className="mb-4">
      <label className="block mb-2 text-gray-50" htmlFor="message"> Message </label>
      <textarea
        placeholder="Hi! I am reaching out to you because..."
        className="w-full p-2 border-b-2 border-purple-400 bg-transparent outline-none focus:border-b-2 focus:border-purple-600"
        rows="4"
        name="message"
        id="message"
      ></textarea>
    </div>
    <div style={{ display: 'none' }}>
      <label htmlFor="_gotcha">gotcha</label>
      <input type="text" name="_gotcha" id="_gotcha" />
    </div>
    <div className="mb-4">
      <button
        className="w-full bg-[#d8b4fe] text-gray-400 font-semibold p-2 rounded transition-all hover:bg-[#e9d5ff]"
        type="submit"
      >
        Submit
      </button>
    </div>
  </form>
</div>
  );
}