export function ReviewOutput({ review }) {
    return (
        <div className="review-output">
            <button className="copy-button"
            type="button" 
            //   onClick={handleCopyReview}
            >
            Copy
            </button>
            {review}
        </div>
    )
}