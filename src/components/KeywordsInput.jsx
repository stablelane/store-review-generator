export function KeywordsInput({ keywords, setKeywords }) {
    return (
        <div>
            <p>Keywords</p>
            <textarea
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)
                }
            ></textarea>
        </div>
    );
}