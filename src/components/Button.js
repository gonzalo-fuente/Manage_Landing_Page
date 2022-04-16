function Button({ isLight = false, children }) {
  return (
    <button
      className={`p-3 px-6 rounded-full baseline focus:outline-none ${
        isLight
          ? "text-brightRed bg-white hover:bg-gray-900 focus:bg-gray-900"
          : "text-white bg-brightRed hover:bg-brightRedLight focus:bg-brightRedLight"
      } `}
    >
      {children}
    </button>
  );
}

export default Button;
