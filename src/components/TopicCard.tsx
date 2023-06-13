import { createResource } from 'solid-js'
import { getColorFromImage } from '../utils/image'

interface Props {
  title: string
  image: string
}

export default function TopicCard(props: Props) {
  const [colors] = createResource(() => getColorFromImage(props.image))

  return (
    <a
      href="#"
      class="block rounded p-4 px-2 md:px-4 md:aspect-[2/1] md:h-auto h-24 relative overflow-hidden transition-colors"
      style={{ 'background-color': colors.loading ? '#333' : colors() }}
    >
      <h3 class="font-semibold text-white text-base md:text-2xl w-[calc(100%_-_3.25rem)] md:w-[calc(100%_-_4rem)] wrap-balance">
        {props.title}
      </h3>
      <img
        class="absolute rounded-lg shadow-xl aspect-square object-cover w-20 md:w-24 rotate-12 -right-4 bottom-0 transition-transform group-hover:-translate-x-4"
        src={props.image}
        alt={props.title}
      />
    </a>
  )
}
