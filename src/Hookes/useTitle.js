import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title}-EstheticaSalon`;
    }, [title])
}
export default useTitle;