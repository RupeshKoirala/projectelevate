import Image from "next/image"

interface LogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
}

export function Logo({ className = "", size = "md" }: LogoProps) {
  const sizes = {
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-12 w-12",
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className={`relative rounded-full bg-[#0A4958] ${sizes[size]} overflow-hidden`}>
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo-O3UwWzt5DNzqvCc9lef3q2BM4hmkcn.png"
          alt="ProjectElevate Logo"
          fill
          className="object-contain p-2"
        />
      </div>
      <span className="text-2xl font-bold text-[#0A4958]">ProjectElevate</span>
    </div>
  )
}

