import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill
} from 'react-icons/bs'

import { DataProps } from "../../App"

import './style.css'

type ThanksProps = {
  data: DataProps
}

export const Thanks = ({ data }: ThanksProps) => {
  const emojiData: any = {
    unsatisfied: <BsFillEmojiFrownFill />,
    neutral: <BsFillEmojiNeutralFill />,
    satisfied: <BsFillEmojiSmileFill />,
    very_satisfied: <BsFillEmojiHeartEyesFill />
  }

  return (
    <div className="thanks-container">
      <h2>Falta pouco...</h2>
      <p>
        A sua opinião é muito importante, em breve você receberá um cupom de 10% de desconto
        para a sua próxima compra
      </p>
      <p>
        Para concluir sua avaliação clique no botão de Enviar abaixo
      </p>
      <h3>Aqui está o resumo da sua avaliação {data.name}</h3>
      <p className="review-data">
        <span>Satisfação com o produto: {emojiData[data.review]}</span>
      </p>
      <p className="review-data">
        <span>Comentário:</span>
        {data.comment}
      </p>
    </div>
  )
}
