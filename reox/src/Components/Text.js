function Text() {

    function handleSubmit(e) {

        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        
        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);
    }

    return (
        <>
        <form method="post" onSubmit={handleSubmit}>
            <div className="buttonContainer">
                <button type="submit" className="button">Save</button>
                <button type="reset" className="button">Reset</button>
            </div>

            <textarea
                name="postContent"
                rows={90}
                cols={160}
            />

        </form>
        </>
    )
}

export default Text;