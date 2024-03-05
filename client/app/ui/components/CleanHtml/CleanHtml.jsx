
import parse from "html-react-parser";
import DOMPurify from 'dompurify';

// компонент возвращает очищеный  HTML-контент.
export default function CleanHTML({dirtyHTML}) {
    const cleanHTML = DOMPurify.sanitize(dirtyHTML, {
        // USE_PROFILES: { html: true },
    });
    return (
        <>
            {parse(cleanHTML)}
        </>
    )
}