import { useRouter } from 'next/router'
import { useRef, useCallback } from 'react'

export default function App() {
  const router = useRouter()
  const inputElement = useRef(null);

  const callbackRef = useCallback(inputElement => {
    if (inputElement) {
      inputElement.focus();
    }
  }, []);


  const handleChange = (e) => {
    e.target.value
    router.push(`/api/${e.target.value}`)
  }

  return (
    <div
      className="flex justify-center h-[100vh] items-center"
    >
      <input
        onChange={handleChange}
        className="border border-stone-900 p-2 w-[80vw] h-[50px]"
        ref={callbackRef}
      />
    </div>
  )
}