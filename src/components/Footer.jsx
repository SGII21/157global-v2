export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[var(--color-border)]">
      <div className="mx-auto max-w-[1180px] px-6 py-8">
        <p className="text-[0.8125rem] text-secondary">
          157Global {year}
        </p>
      </div>
    </footer>
  )
}
