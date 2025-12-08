export function Footer(props) {
    // I don't fully understand the other notation for if/else statements so just did it the way that makes sense to me
    let message;

    if (props.message) {
        message = props.message;
    } else {
        message = "Copyright © 2023 My Website. All rights reserved.";
    }

    return (
        <footer>
            {/* If the message is something custom */}
            {/* using notation talked abt in class */}
            {props.message ? <p>{props.message}</p> : null}

            {/* Fallback message listed above */}
            <p>{message}</p>
        </footer>
    )
}