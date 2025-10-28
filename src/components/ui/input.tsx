export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className="w-full rounded-xl border border-white/20 bg-black px-3 py-2 text-sm text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#FF6D00]"
      {...props}
    />
  )
}
