import { logoSrc } from '../data/site'

interface LogoProps {
  className?: string
}

export default function Logo({ className = 'h-12 w-12 sm:h-14 sm:w-14' }: LogoProps) {
  return (
    <img
      src={logoSrc}
      alt="Nick's Barber Shop"
      className={`rounded-full object-cover ${className}`}
    />
  )
}
