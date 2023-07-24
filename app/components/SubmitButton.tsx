"use client";

export default function SubmitButton() {
  return (
    <button
      type="submit"
      className="bg-teal-500 px-4 py-2 rounded-lg text-white"
    >
      {<>pending</> ? <>loading...</> : <>Add comment...</>}
    </button>
  );
}
