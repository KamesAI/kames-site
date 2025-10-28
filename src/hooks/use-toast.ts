// super-light toast impl (local state later)
export function useToast() {
  return {
    toast: (opts: { title?: string; description?: string }) => {
      console.log('toast', opts)
    },
  }
}
