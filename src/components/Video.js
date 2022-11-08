import ChangeTime from "./ChangeTime";
import DateTime from "./DateTime";

const DateTimePretty = ChangeTime(DateTime);

function Video(props) {
    return (
        <div className="video">
            <iframe src={props.url} frameborder="0" allow="autoplay; encrypted-media" allowFullscreen></iframe>
            <DateTimePretty date={props.date} />
        </div>
    )
}

export default Video;