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
      class="block rounded-lg p-4 aspect-[2/1] relative overflow-hidden transition-colors"
      style={{ 'background-color': colors.loading ? '#333' : colors() }}
    >
      <h3 class="font-semibold text-white text-2xl w-48 wrap-balance">
        {props.title}
      </h3>
      <img
        class="absolute rounded-lg shadow-xl aspect-square object-cover w-28 rotate-12 -right-4 bottom-0 transition-transform group-hover:-translate-x-4"
        src={props.image}
        alt={props.title}
      />
    </a>
  )
}
