import { useEffect, useState } from 'react'


type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl";

/**
 * 
 * Gets the boolean value by depends on the breakpoints has matches or not
 */
function useBreakpoint(breakpointStr: Breakpoint[]): boolean {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>("md")

  useEffect(() => {
    const handler = () => {
      var bp: Breakpoint = "md";
      if (window.innerWidth >= 2560) {
        bp = "xl";
      }
      else if (window.innerWidth >= 1440) {
        bp = "lg";
      }
      else if (window.innerWidth >= 1024) {
        bp = "md";
      }
      else if (window.innerWidth >= 768) {
        bp = "sm";
      }
      else {
        bp = "xs";
      }
      setBreakpoint(bp);
    }

    handler()
    window.addEventListener('resize', handler)
    return () => {
      window.removeEventListener('resize', handler)
    }
  }, [])
  return breakpointStr.indexOf(breakpoint) > -1;
}

export default useBreakpoint