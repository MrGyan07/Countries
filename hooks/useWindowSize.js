import { useEffect,useState } from 'react'

export function useWindowSize(){
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
      window.addEventListener("resize", () => {
        setWidth(window.innerWidth);
      });
    }, []);

    return width;
}