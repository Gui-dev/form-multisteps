import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill
} from 'react-icons/bs'

import { DataProps } from "../../App"

import './style.css'


type ReviewFormProps = {
  data: DataProps
  onUpdateField: (key: string, value: string) => void
}

export const ReviewForm = ({ data, onUpdateField }: ReviewFormProps) => {
  return (
    <div className="review-form">
      <div className="form-control score-container">
        <label htmlFor="unsatisfied" className="radio-container">
          <input
            type="radio"
            name="review"
            id="unsatisfied"
            value="unsatisfied"
            onChange={event => onUpdateField('review', event.target.value)}
            required
          />
          <BsFillEmojiFrownFill />
          <p>Insatisfeito</p>
        </label>
        <label htmlFor="neutral" className="radio-container">
          <input
            type="radio"
            name="review"
            id="neutral"
            value="neutral"
            onChange={event => onUpdateField('review', event.target.value)}
            required
          />
          <BsFillEmojiNeutralFill />
          <p>Poderia ser melhor</p>
        </label>
        <label htmlFor="satisfied" className="radio-container">
          <input
            type="radio"
            name="review"
            id="satisfied"
            value="satisfied"
            required
            onChange={event => onUpdateField('review', event.target.value)}
          />
          <BsFillEmojiSmileFill />
          <p>Satisfeito</p>
        </label>

        <label htmlFor="very_satisfied" className="radio-container">
          <input
            type="radio"
            name="review"
            id="very_satisfied"
            value="very_satisfied"
            required
            onChange={event => onUpdateField('review', event.target.value)}
          />
          <BsFillEmojiHeartEyesFill />
          <p>Muito Satisfeito</p>
        </label>
      </div>
      <div className="form-control">
        <label htmlFor="comment">Comentário</label>
        <textarea
          name="comment"
          id="comment"
          placeholder="Conte como foi sua experiência com o produto..."
          value={data.comment}
          onChange={event => onUpdateField('comment', event.target.value)}
          required
        >
        </textarea>
      </div>
    </div>
  )
}
