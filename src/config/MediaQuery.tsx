import { useEffect, useState } from "react"

export const MediaQuery = (query: string) => {
    const [matches, setMatches] = useState(false)

    useEffect(() => {
        const mediaQuery = window.matchMedia(query)
        setMatches(mediaQuery.matches)

        const handler = (e: MediaQueryListEvent) => {
            setMatches(e.matches)
        }

        mediaQuery.addEventListener('change', handler)

        return() => {
            mediaQuery.removeEventListener('change', handler)
        }
    }, [query])

    return matches;
}

export const Mobile = () => {
    const isMobile = MediaQuery("(max-width: 600px)");
    return isMobile;
}