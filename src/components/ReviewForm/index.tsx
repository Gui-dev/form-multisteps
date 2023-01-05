import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill
} from 'react-icons/bs'

import './style.css'

export const ReviewForm = () => {
  return (
    <div className="review-form">
      <div className="form-control score-container">
        <label htmlFor="unsatisfied" className="radio-container">
          <input type="radio" name="review" id="unsatisfied" value="unsatisfied" required />
          <BsFillEmojiFrownFill />
          <p>Insatisfeito</p>
        </label>
        <label htmlFor="neutral" className="radio-container">
          <input type="radio" name="review" id="neutral" value="neutral" required />
          <BsFillEmojiNeutralFill />
          <p>Poderia ser melhor</p>
        </label>
        <label htmlFor="satisfied" className="radio-container">
          <input type="radio" name="review" id="satisfied" value="satisfied" required />
          <BsFillEmojiSmileFill />
          <p>Satisfeito</p>
        </label>

        <label htmlFor="very_satisfied" className="radio-container">
          <input type="radio" name="review" id="very_satisfied" value="very_satisfied" required />
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
          required
        >
        </textarea>
      </div>
    </div>
  )
}
