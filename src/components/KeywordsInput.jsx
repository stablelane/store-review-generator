export function KeywordsInput({ keywords, setKeywords }) {
    return (
        <div>
            <h1 className="form-title">Store Review Generator</h1>
            <label>Keywords</label>
            <textarea 
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)
                }
            ></textarea>
        </div>
    );
}