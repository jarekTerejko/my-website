import { Button, ChevronsDownIcon } from "./ButtonElements"

export const MainButton = ({src, text, href}) => {
  return (
    <Button href={href}>
      <ChevronsDownIcon src={src} />
      {text}
    </Button>
  )
}

