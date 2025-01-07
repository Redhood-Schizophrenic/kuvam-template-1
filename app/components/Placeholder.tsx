type PlaceholderProps = {
  width: number
  height: number
  text: string
  className?: string
}

export default function Placeholder({ width, height, text, className = '' }: PlaceholderProps) {
  // Calculate aspect ratio for responsive scaling
  const aspectRatio = height / width
  
  return (
    <div 
      className={`relative w-full ${className}`}
      style={{ paddingTop: `${aspectRatio * 100}%` }}
    >
      <div 
        className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center"
      >
        <div className="text-center p-4">
          <div className="text-white font-medium text-sm sm:text-base md:text-lg">
            {text}
          </div>
        </div>
      </div>
    </div>
  )
} 