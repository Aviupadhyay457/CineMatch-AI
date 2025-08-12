import ReactMarkdown from 'react-markdown'
export default function MoviesData(props){
    return(
        <section className='output'>
        <ReactMarkdown>
            {props.movieDataString}
        </ReactMarkdown>
        </section>
    )
}
