export default function PickedForYou() {

  const day = Intl.DateTimeFormat('en-US', { weekday: "short" }).format(new Date())

  return (
    <div class="mt-8">
      <header class="flex mb-4 items-center justify-between">
        <h2 class="text-2xl font-semibold">Picked for you</h2>
      </header>
      <article class="flex gap-4 p-4 bg-red-950/80 rounded-lg">
        <img
          src="https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36"
          alt="Album cover"
          class="w-48 aspect-square rounded-md shadow"
        />
        <div class="flex flex-1 flex-col justify-between">
          <div class="text-gray-300/60">
            <small class="text-xs leading-loose">Single ⋅ {day}</small>
            <h2 class="text-base md:text-xl font-semibold text-white">
              Repeat after me (Interlude)
            </h2>
            <p class="text-sm">The Weeknd, After Hours</p>
          </div>
          <div class="flex items-center justify-between">
            <button
              type="button"
              class="appearance-none outline-none text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 md:w-10"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </button>
            <button
              type="button"
              class="appearance-none shadow-md outline-none text-red-950 w-8 h-8 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-5 md:w-8 md:ml-1"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </article>
    </div>
  )
}
