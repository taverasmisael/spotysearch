import BrowseTopics from './Browse'
import PickedForYou from './PickedForYou'

export default function SearchPage() {
  return (
    <div class="children:px-4 py-4">
      <header class="flex items-center justify-between">
        <h1 class="text-4xl font-semibold tracking-tight">Search</h1>
        <a href="#" class="text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
            />
          </svg>
        </a>
      </header>
      <div class="p-4 bg-black sticky top-0 z-10">
        <div class="flex gap-4 w-full p-4 text-black bg-white rounded-md text-lg">
          {/* TODO: A misterious thing to come   */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            class="w-8"
          >
            <path
              fill-rule="evenodd"
              d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
              clip-rule="evenodd"
            />
          </svg>
          <label for="search-input" class="sr-only">
            Search
          </label>
          <input
            id="search-input"
            name="search"
            type="text"
            placeholder="What do you want to listen to?"
            class="w-full outline-none placeholder:text-black placeholder:tracking-wide text-xl"
          />
        </div>
      </div>
      <PickedForYou />
      <BrowseTopics />
    </div>
  )
}
