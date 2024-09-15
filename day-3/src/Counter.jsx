import { useRef, memo } from 'react'

const Counter = () => {
    const count = useRef(0)

    return (
        <>
            <div>

                child counter:
                <span>{count.current++}</span>
            </div>
        </>
    )
}
export default memo(Counter)