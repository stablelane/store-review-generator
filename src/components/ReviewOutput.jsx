
export function ReviewOutput({ review }) {
    function handleCopyReview() {
        navigator.clipboard.writeText(review)
          .then(() => {
            alert("Review copied to clipboard!");
          })
      }
    return (
        <div className="review-output">
            <button className="copy-button"
            type="button" 
              onClick={handleCopyReview}
            >
            Copy
            </button>
            {review}
        </div>
    )
}