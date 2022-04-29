import { Container } from "./styles"

export default function CardOne(props) {
  return (
    <Container>
        <h2>
            {props.name}
        </h2>
    </Container>
  )
}
