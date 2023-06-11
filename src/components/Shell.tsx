import { ParentProps } from 'solid-js'
import Navigation from './Navigation'

interface Props extends ParentProps {}

export default function AppShell(props: Props) {
  return (
    <>
      {props.children}
      <Navigation />
    </>
  )
}
