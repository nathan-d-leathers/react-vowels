

function WordOutput(props) {

    let vowelCount = 0

    const FindVowels = () => {


        let chars = [];
        let li = [];
        let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
        let sometimes = ["y", "Y"]


        for (let word of props.word) {

            for (let i = 0; i < word.length; i++) {

                if (vowels.includes(word[i])) {

                    chars.push(<span className="vowel" key={vowelCount}>{word[i]}</span>)
                    vowelCount++

                } else {

                    chars.push(word[i])
                }
            }

            // if (chars.length > 0 && vowelCount == 0) {
            //     chars = []
            //     for (let word of props.word) {
            //         for (let i = 0; i < word.length; i++) {
            //             if (sometimes.includes(word[i])) {
            //                 chars.push(<span className="vowel" key={vowelCount}>{word[i]}</span>)
            //                 vowelCount++
            //             } else {
            //                 chars.push(word[i])
            //             }
            //         }
            //     }
            // }

            // maybe try replacing letter in char with vowel span



            if (chars.length > 0) {
                chars.push(`: ${vowelCount} vowels found in this word`)
            }

            li.push(<li key={props.word}>{chars}</li>)
            vowelCount = 0
            chars = []

        }
        return li

    }

    return (
        <ul className="WordHistory">
            {FindVowels()}
        </ul>
    )
}

export default WordOutput