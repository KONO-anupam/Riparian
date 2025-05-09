export default function Button({ children }) {
    return (
      <button className="bg-[#2fe6de] py-2 px-4 rounded-md hover:bg-[#2fe6ddd9] text-sm font-semibold transition duration-250 ease-in-out shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#2fe6ddc8] focus:ring-opacity-50">
        {children}
      </button>
    );
  }
  