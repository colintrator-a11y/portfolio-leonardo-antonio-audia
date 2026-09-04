import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

/**
 * The image for whatever row the pointer is on, floating beside it.
 *
 * Positioned by the compositor from the pointer coordinates the page already
 * publishes, so hovering seventy-two rows costs no React renders and no layout.
 * Hidden entirely for touch and for reduced motion, where a pointer-following
 * panel has nothing to follow.
 *
 * Rendered into the body. `position: fixed` is only relative to the viewport
 * while no ancestor establishes a containing block, and the projects section
 * carries a backdrop-filter, which does. Left where it sits in the tree the
 * panel was offset by the width of the rail.
 */
export default function ProjectPeek({ project }) {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node || !project) return undefined
    // Snap to the pointer on the first frame rather than sliding in from
    // wherever the last row left it.
    node.style.transition = 'none'
    requestAnimationFrame(() => {
      if (node.isConnected) node.style.transition = ''
    })
    return undefined
  }, [project])

  if (!project?.image) return null

  const peek = (
    <figure className="peek" ref={ref} aria-hidden="true">
      <img src={project.image} alt="" width="1280" height="800" />
    </figure>
  )

  return typeof document === 'undefined' ? peek : createPortal(peek, document.body)
}
