import { For } from 'solid-js'
import TopicCard from './TopicCard'

interface Topic {
  title: string
  image: string
}

const topics: Topic[] = [
  { title: 'Podcasts', image: 'assets/podcast.webp' },
  { title: 'Made for you', image: 'assets/made-for-you.webp' },
  { title: 'Charts', image: 'assets/charts.webp' },
  { title: 'New releases', image: 'assets/new-releases.webp' },
  { title: 'Concerts', image: 'assets/concerts.webp' },
  { title: 'Pride', image: 'assets/pride.webp' },
  { title: 'Discover', image: 'assets/discover.webp' },
  { title: 'At home', image: 'assets/at-home.webp' },
  { title: 'Friends vibes', image: 'assets/your-friends-listen-to.webp' },
  { title: 'Latin', image: 'assets/latin.webp' },
  { title: 'Live Events', image: 'assets/live-events.webp' },
  { title: 'Genres & moods', image: 'assets/genres-and-moods.webp' },
  { title: 'Black History is Now', image: 'assets/black-history-is-now.webp' },
]

export default function BrowseTopics() {
  return (
    <div class="mt-4 md:mt-8">
      <header class="flex mb-4 items-center justify-between">
        <h2 class="text-2xl font-semibold">Browse all</h2>
      </header>
      <div>
        <div class="grid grid-cols-2 gap-y-2 gap-x-4">
          <For each={topics}>{(topic) => <TopicCard title={topic.title} image={topic.image} />}</For>
        </div>
      </div>
    </div>
  )
}
