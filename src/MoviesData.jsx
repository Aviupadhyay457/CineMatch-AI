import ReactMarkdown from 'react-markdown'
export default function MoviesData(props){
    return(
        <ReactMarkdown>
            {props.movieDataString}
        </ReactMarkdown>
    )
}
