


export default function ContactCard() {
  return (
   <div className="max-w-[360px] w-full mx-auto bg-[#2f1063] rounded-lg shadow-md p-4 border"
   style={{ backgroundColor: '#1b132b' }}>
  <form>
    <div className="mb-4">
      <label className="block mb-2 text-gray-50" for="name"> Name </label>
      <input
        placeholder="John Doe"
        className="w-full p-2 border-b-2 border-purple-400 bg-transparent outline-none focus:border-b-2 focus:border-purple-600"
        type="text"
      />
    </div>
    <div className="mb-4">
      <label className="block mb-2 text-gray-50" for="email"> Email </label>
      <input
        placeholder="John.Doe@gmail.com"
        className="w-full p-2 border-b-2 border-purple-400 bg-transparent outline-none focus:border-b-2 focus:border-purple-600"
        name="email"
        id="email"
        type="email"
      />
    </div>
    <div className="mb-4">
      <label className="block mb-2 text-gray-50" for="message"> Message </label>
      <textarea
        placeholder="Hi! my name is..."
        className="w-full p-2 border-b-2 border-purple-400 bg-transparent outline-none focus:border-b-2 focus:border-purple-600"
        rows="4"
        name="message"
        id="message"
      ></textarea>
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