import { Icon } from '../components/Icon.jsx'
import { Link } from '../components/Link.jsx'

/* ===== PÁGINA: 404 ===== */

export function NotFound() {
  return (
    <section className="noise relative isolate grid min-h-[80svh] place-items-center overflow-hidden px-4 pt-28 text-center">
      <div aria-hidden="true" className="grid-lines absolute inset-0 -z-10" />
      <div aria-hidden="true" className="absolute left-1/2 top-1/2 -z-10 size-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan/15 blur-[120px] [animation:aurora-a_16s_ease-in-out_infinite]" />
      <div>
        <p className="animate-rise text-[clamp(7rem,22vw,16rem)] font-extrabold leading-none tracking-[-0.06em] text-white/90">
          4<span className="text-shine">0</span>4
        </p>
        <h1 className="mt-4 animate-rise text-2xl font-bold text-white [animation-delay:150ms]">Essa página não está no balancete.</h1>
        <p className="mx-auto mt-3 max-w-md animate-rise text-muted [animation-delay:250ms]">A página que você procurou não existe ou foi movida.</p>
        <Link
          href="/"
          className="group mt-9 inline-flex animate-rise items-center gap-2 rounded-full bg-cyan px-7 py-4 font-semibold text-ink transition-all duration-300 [animation-delay:350ms] hover:-translate-y-0.5"
        >
          Voltar para o início
          <Icon name="arrow" className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  )
}
