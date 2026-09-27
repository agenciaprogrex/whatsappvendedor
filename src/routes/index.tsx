import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight, Check, CheckCircle2, ChevronRight, Clock3, FileText, MessageCircleMore, ShieldCheck, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import followUpReply from "@/assets/follow-up-resposta.png";
import followUpPayment from "@/assets/follow-up-pagamento.png";
import followUpPurchase from "@/assets/follow-up-compra.png";
import coverImage from "@/assets/whatsapp-vendedor-capa.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "WhatsApp Vendedor | Recupere conversas e venda com método" },
      { name: "description", content: "Conheça o e-book WhatsApp Vendedor: um ciclo de 14 dias com 12 mensagens para retomar conversas, acompanhar clientes com respeito e organizar suas vendas." },
      { property: "og:title", content: "WhatsApp Vendedor | Recupere conversas e venda com método" },
      { property: "og:description", content: "Um guia prático para retomar conversas de venda no WhatsApp com 12 mensagens em um ciclo de 14 dias." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const faq = [
  { q: "O que eu recebo?", a: "O e-book WhatsApp Vendedor em formato PDF, com uma sequência de 14 dias, modelos de mensagens para diferentes tipos de venda, orientações de acompanhamento e checklists de execução." },
  { q: "Serve para o meu tipo de negócio?", a: "O guia traz exemplos para quem vende produtos físicos, serviços e infoprodutos. As mensagens devem ser adaptadas ao seu produto e ao contexto de cada cliente." },
  { q: "Preciso ter muitos contatos para começar?", a: "Não. Você pode começar organizando os contatos recentes que já demonstraram interesse, mesmo que sua lista seja pequena." },
  { q: "Preciso usar automação ou pagar por outro aplicativo?", a: "Não. O processo pode ser executado manualmente com uma agenda e uma planilha simples. O e-book também sugere formas de organizar os contatos." },
  { q: "Em quanto tempo vou ver resultados?", a: "O material propõe um ciclo de acompanhamento de 14 dias. Resultados dependem da sua oferta, da qualidade dos contatos e da forma de execução; não existe promessa de vendas garantidas." },
  { q: "Como funciona o pagamento e a entrega?", a: "O produto é digital e o preço anunciado é R$ 37,00 à vista ou 6x de R$ 6,94 no cartão. O checkout e os detalhes de entrega ainda precisam ser conectados a esta página." },
];

function SectionLabel({ number, children }: { number: string; children: React.ReactNode }) {
  return <div className="mb-5 flex items-center gap-3 text-xs font-extrabold uppercase text-primary"><span className="flex size-7 items-center justify-center rounded-full border border-primary/25 font-display text-[10px]">{number}</span><span className="tracking-wider">{children}</span></div>;
}

function OfferButton({ children, onClick, className = "" }: { children: React.ReactNode; onClick: () => void; className?: string }) {
  return <Button variant="offer" size="lg" onClick={onClick} className={`h-14 w-full rounded-md px-6 text-sm sm:w-auto sm:text-base ${className}`}>{children}<ArrowRight aria-hidden="true" className="ml-1" /></Button>;
}

const followUpScreenshots = [
  { image: followUpReply, title: "5º contato: o lead respondeu", description: "A conversa foi retomada com uma pergunta sobre a realidade do cliente.", width: 886, height: 480 },
  { image: followUpPayment, title: "A conversa avançou para o pagamento", description: "Depois de esclarecer as dúvidas, o cliente recebeu o link para concluir a compra.", width: 896, height: 454 },
  { image: followUpPurchase, title: "Compra concluída e acesso recebido", description: "O cliente retornou com a confirmação de compra e a mensagem de acesso ao curso.", width: 895, height: 484 },
];

function FollowUpConversations() {
  return (
    <div className="mt-8 min-w-0 space-y-5">
      <div className="rounded-lg border border-primary/20 bg-lime-soft p-5">
        <span className="text-xs font-extrabold uppercase tracking-wider text-primary">Uma conversa real, do retorno à compra</span>
        <h3 className="mt-2 font-display text-xl font-bold text-primary">Foi no 5º follow-up que o lead respondeu. Depois, concluiu a compra.</h3>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">Caso compartilhado pelo vendedor. Os prints abaixo mostram a retomada, o envio do pagamento e a confirmação da compra.</p>
      </div>
      {followUpScreenshots.map((step, index) => (
        <figure key={step.title} className="grid overflow-hidden rounded-lg border border-border bg-background shadow-sm lg:grid-cols-[240px_minmax(0,1fr)]">
          <figcaption className="flex items-start gap-3 p-4 lg:p-6">
            <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">{index + 1}</span>
            <div><h4 className="text-sm font-bold text-primary">{step.title}</h4><p className="mt-1 text-xs leading-5 text-muted-foreground">{step.description}</p></div>
          </figcaption>
          <a href={step.image} target="_blank" rel="noreferrer" className="block min-w-0 border-t border-border focus-visible:outline-2 focus-visible:outline-primary lg:border-l lg:border-t-0" aria-label={`Ampliar print: ${step.title}`}>
            <img src={step.image} alt={`Conversa real de WhatsApp: ${step.title}`} width={step.width} height={step.height} loading="lazy" className="h-auto w-full" />
          </a>
        </figure>
      ))}
      <p className="text-center text-xs leading-5 text-muted-foreground">Toque nos prints para ampliar. Este é um caso individual; os resultados variam.</p>
    </div>
  );
}

function Index() {
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const goToOffer = () => document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" });

  return (
    <main className="overflow-x-hidden bg-background">
      <div className="bg-lime px-5 py-2.5 text-center text-[11px] font-extrabold uppercase text-lime-foreground sm:text-xs">Para quem já recebe contatos pelo WhatsApp e quer vender com mais consistência</div>

      <section className="sales-hero relative flex min-h-[700px] flex-col overflow-hidden text-hero-foreground sm:min-h-[790px]" aria-labelledby="hero-title">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
          <a href="#inicio" className="font-display text-sm font-extrabold text-hero-foreground sm:text-base">WhatsApp<span className="text-lime">.</span>Vendedor</a>
          <a href="#oferta" className="group inline-flex items-center gap-1.5 text-xs font-bold text-hero-foreground/80 transition-colors hover:text-lime">Conhecer o guia <ArrowUpRight size={15} aria-hidden="true" /></a>
        </div>
        <div id="inicio" className="mx-auto flex w-full max-w-4xl flex-1 flex-col items-center justify-center px-5 pb-12 pt-7 text-center sm:px-8 sm:pb-16 sm:pt-6">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-line-light bg-primary/40 px-3.5 py-1.5 text-[10px] font-extrabold uppercase text-lime sm:text-xs"><span className="size-1.5 rounded-full bg-lime" />Um guia prático para vendas pelo WhatsApp</div>
          <h1 id="hero-title" className="max-w-[800px] font-display text-[clamp(2.15rem,4.2vw,3.8rem)] font-extrabold leading-[1.11]">WhatsApp Vendedor: <span className="text-lime">recupere conversas paradas</span> e venda com método todos os dias.</h1>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-hero-foreground/80 sm:text-base">A pessoa demonstrou interesse, chamou no WhatsApp e a conversa esfriou? Aprenda a retomar o contato com uma sequência de 14 dias, mensagens prontas e uma rotina simples de acompanhamento.</p>
          <div className="relative mt-8 flex h-[220px] w-full items-center justify-center sm:mt-9 sm:h-[285px]">
            <div className="absolute bottom-3 h-5 w-56 rounded-full bg-primary/80 blur-xl" />
            <img src={coverImage} alt="Capa original do e-book WhatsApp Vendedor: A Técnica da Recuperação Imediata" width={676} height={900} className="book-cover book-shadow relative h-[210px] w-auto rounded-[3px] object-contain sm:h-[275px]" />
            <div className="absolute right-[max(0px,calc(50%-200px))] top-6 hidden rotate-6 rounded-md border border-line-light bg-primary/90 px-3 py-2 text-left shadow-lg sm:block"><span className="block font-display text-xl font-extrabold text-lime">14 dias</span><span className="text-[10px] font-bold text-hero-foreground/75">para criar sua rotina</span></div>
          </div>
          <p className="mt-2 text-xs font-semibold text-hero-foreground/75 sm:text-sm">Para empresários e vendedores que preferem acompanhar bem a deixar oportunidades no silêncio.</p>
          <OfferButton onClick={goToOffer} className="mt-6 min-w-[285px]">Quero recuperar minhas vendas</OfferButton>
          <a href="#historia" className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-hero-foreground/65 hover:text-hero-foreground">Entenda como funciona <ArrowDown size={13} aria-hidden="true" /></a>
        </div>
      </section>

      <section id="historia" className="bg-surface py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div>
            <SectionLabel number="01">A conversa que ficou para depois</SectionLabel>
            <h2 className="max-w-3xl font-display text-3xl font-bold leading-tight sm:text-4xl">Você investiu para chegar até o cliente. <span className="text-primary">E depois ele sumiu.</span></h2>
            <div className="mt-5 grid gap-4 lg:grid-cols-2 lg:gap-8"><p className="text-base leading-7 text-muted-foreground">Você respondeu, enviou a proposta, explicou o produto. A pessoa disse “vou pensar” e a conversa foi descendo na caixa de entrada. Entre uma tarefa e outra, ninguém voltou ali.</p>
            <p className="text-base leading-7 text-muted-foreground">Essa história é comum em negócios de todos os tamanhos. O problema não é sempre a oferta ou o preço. Muitas vezes, faltou um próximo contato no momento certo.</p></div>
            <p className="mt-6 border-l-[3px] border-coral pl-5 font-display text-lg font-semibold leading-7 text-foreground">Antes de correr atrás de novos contatos, vale olhar para quem já demonstrou interesse.</p>
          </div>
          <FollowUpConversations />
        </div>
      </section>

      <section className="border-y border-border bg-surface-alt py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionLabel number="02">O verdadeiro problema</SectionLabel>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div><h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl">Não é falta de interesse.<br /><span className="text-primary">É falta de continuidade.</span></h2><p className="mt-5 text-base leading-8 text-muted-foreground">Boa parte das vendas não acontece na primeira mensagem. Mas quando o acompanhamento depende apenas da memória, a oportunidade se perde.</p></div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[{ n: "01", title: "A conversa esfria", text: "O cliente se interessa, mas a rotina interrompe a decisão." }, { n: "02", title: "Falta um próximo passo", text: "Ninguém registra quando e por que retomar o contato." }, { n: "03", title: "O silêncio parece um não", text: "O vendedor evita insistir e deixa a conversa para trás." }, { n: "04", title: "A venda fica parada", text: "O contato que já chegou até você nunca recebe uma nova chance." }].map(item => <div key={item.n} className="border-t border-border bg-surface px-5 pb-6 pt-5"><span className="font-display text-xs font-bold text-coral">{item.n} /</span><h3 className="mt-5 font-display text-lg font-semibold">{item.title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{item.text}</p></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 text-primary-foreground sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mb-5 flex items-center gap-3 text-xs font-extrabold uppercase text-lime"><span className="flex size-7 items-center justify-center rounded-full border border-line-light font-display text-[10px]">03</span>Uma forma melhor de vender</div>
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20"><div><h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl">O segredo não é insistir mais. <span className="text-lime">É acompanhar melhor.</span></h2><p className="mt-5 max-w-lg leading-8 text-primary-foreground/75">O ciclo de 14 dias organiza o momento de voltar, a mensagem a enviar e a hora de fazer uma pausa. Cada contato tem uma intenção: entender, ajudar e facilitar a decisão.</p></div>
          <div className="relative space-y-0 pl-1 step-line">{[{ phase: "Dias 1 a 4", title: "Reconecte sem pressão", text: "Retome o contexto da conversa e descubra o que ainda importa para a pessoa." }, { phase: "Dias 6 a 10", title: "Construa clareza e valor", text: "Responda objeções, compartilhe informações úteis e mantenha o interesse vivo." }, { phase: "Dias 12 a 14", title: "Feche com respeito", text: "Faça um convite claro e saiba encerrar sem desgastar a relação." }].map((step, i) => <div key={step.phase} className="relative flex gap-5 pb-8 last:pb-0"><div className="z-10 flex size-10 shrink-0 items-center justify-center rounded-full border border-lime bg-primary font-display text-xs font-bold text-lime">0{i + 1}</div><div className="pt-0.5"><span className="text-xs font-extrabold uppercase text-lime">{step.phase}</span><h3 className="mt-1 font-display text-lg font-semibold">{step.title}</h3><p className="mt-1.5 text-sm leading-6 text-primary-foreground/70">{step.text}</p></div></div>)}</div></div>
          <div className="mt-9 border-t border-line-light pt-5 text-sm text-primary-foreground/65"><Clock3 className="mr-2 inline size-4 text-lime" aria-hidden="true" />O guia inclui pausas estratégicas para não transformar acompanhamento em insistência.</div>
        </div>
      </section>

      <section className="bg-surface py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionLabel number="04">O método dentro do guia</SectionLabel>
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><h2 className="max-w-2xl font-display text-3xl font-bold leading-tight sm:text-4xl">Um processo simples para colocar o seu WhatsApp para trabalhar com você.</h2><p className="max-w-xs text-sm leading-7 text-muted-foreground">Sem precisar de uma equipe grande ou uma ferramenta complicada para começar.</p></div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">{[
            { icon: MessageCircleMore, stat: "12", label: "mensagens", text: "Modelos prontos para adaptar ao seu produto e à conversa de cada cliente." },
            { icon: Clock3, stat: "14", label: "dias", text: "Uma sequência organizada para saber quando retomar e quando dar espaço." },
            { icon: CheckCircle2, stat: "01", label: "rotina", text: "Checklists para acompanhar respostas, objeções e próximas ações." },
          ].map(item => <div key={item.label} className="rounded-md border border-border bg-background p-6 sm:p-7"><item.icon size={25} className="text-primary" strokeWidth={1.7} aria-hidden="true" /><div className="mt-7 font-display text-5xl font-extrabold text-primary">{item.stat}<span className="ml-2 text-lg font-semibold text-foreground">{item.label}</span></div><p className="mt-4 text-sm leading-7 text-muted-foreground">{item.text}</p></div>)}</div>
          <div className="mt-9 flex justify-center"><Button variant="outline" size="lg" onClick={goToOffer} className="h-11 px-6">Ver o conteúdo do e-book <ChevronRight size={16} aria-hidden="true" /></Button></div>
        </div>
      </section>

      <section className="border-y border-border bg-surface-alt py-12 sm:py-16">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div><SectionLabel number="05">WhatsApp Vendedor</SectionLabel><h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl">Tudo o que você precisa para começar a recuperar conversas.</h2><p className="mt-5 leading-8 text-muted-foreground">Um material direto, feito para sair da teoria e entrar na sua rotina comercial.</p><div className="mt-7 flex items-center gap-3 text-sm font-bold text-primary"><FileText size={19} aria-hidden="true" /> E-book digital em PDF</div></div>
          <div className="divide-y divide-border border-t border-border">{[
            ["O ciclo de recuperação de 14 dias", "A lógica por trás de cada contato e as pausas entre as mensagens."],
            ["Mensagens para diferentes tipos de venda", "Exemplos para infoprodutos, produtos físicos e serviços."],
            ["Objeções e timing de cada conversa", "Como retomar sem pressionar e ajudar o cliente a decidir."],
            ["Checklists e organização diária", "Uma forma simples de registrar os contatos e planejar próximas ações."],
          ].map(([title, text], i) => <div key={title} className="flex gap-4 py-6"><span className="font-display text-xs font-bold text-coral">0{i + 1}</span><div><h3 className="font-display text-lg font-semibold">{title}</h3><p className="mt-1.5 text-sm leading-6 text-muted-foreground">{text}</p></div><Check size={18} className="ml-auto shrink-0 text-primary" aria-hidden="true" /></div>)}</div>
        </div>
      </section>

      <section className="bg-surface py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-8"><SectionLabel number="06">Para quem faz sentido</SectionLabel><h2 className="max-w-3xl font-display text-3xl font-bold leading-tight sm:text-4xl">Se existe uma conversa parada, existe uma oportunidade de fazer melhor.</h2><div className="mt-9 grid gap-4 md:grid-cols-3">{[
          ["Para quem vende", "Você conversa com interessados todos os dias, mas não consegue voltar a todos eles com consistência."],
          ["Para quem empreende", "Você quer aproveitar melhor os contatos que seu negócio já conquistou antes de investir mais para atrair novos."],
          ["Para quem presta serviços", "Você envia orçamentos e propostas, mas precisa de um jeito respeitoso de retomar a conversa."],
        ].map(([title, text]) => <div key={title} className="rounded-md border border-border p-6"><CheckCircle2 size={20} className="text-primary" aria-hidden="true" /><h3 className="mt-6 font-display text-lg font-semibold">{title}</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">{text}</p></div>)}</div><p className="mt-7 text-sm text-muted-foreground">Não é para quem procura uma fórmula mágica ou mensagens automáticas que dispensam cuidado com o cliente.</p></div>
      </section>

      <section id="oferta" className="bg-primary py-16 text-primary-foreground sm:py-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-8"><div className="text-center"><span className="text-xs font-extrabold uppercase text-lime">Sua próxima conversa pode começar hoje</span><h2 className="mx-auto mt-4 max-w-3xl font-display text-3xl font-bold leading-tight sm:text-4xl">Pare de deixar vendas esfriando nas primeiras conversas.</h2><p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-primary-foreground/70 sm:text-base">Tenha em mãos um plano de acompanhamento que você consegue adaptar ao seu negócio.</p></div>
          <div className="mx-auto mt-10 max-w-2xl overflow-hidden rounded-md border border-line-light bg-surface text-foreground shadow-2xl"><div className="flex items-center gap-4 border-b border-border px-6 py-5 sm:px-8"><img src={coverImage} alt="Capa do e-book WhatsApp Vendedor" loading="lazy" width={676} height={900} className="h-20 w-auto rounded-[2px] shadow-md" /><div><div className="font-display text-lg font-bold">WhatsApp Vendedor</div><p className="mt-1 text-xs text-muted-foreground">A Técnica da Recuperação Imediata · E-book em PDF</p></div></div><div className="px-6 py-7 sm:px-8"><ul className="space-y-3 text-sm">{["Sequência prática de 14 dias", "12 mensagens para adaptar e usar", "Exemplos para produtos, serviços e infoprodutos", "Checklists para organizar sua rotina"].map(item => <li key={item} className="flex items-center gap-3"><Check size={17} className="shrink-0 text-primary" aria-hidden="true" />{item}</li>)}</ul><div className="mt-7 border-t border-border pt-6 text-center"><p className="text-sm text-muted-foreground">De <span className="line-through">R$ 97,00</span> por apenas</p><div className="mt-1 font-display text-5xl font-extrabold text-primary sm:text-6xl">R$ 37,00</div><p className="mt-1 text-sm font-semibold text-muted-foreground">à vista ou 6x de R$ 6,94 no cartão</p><OfferButton onClick={() => setCheckoutOpen(true)} className="mt-6 w-full">Quero garantir meu e-book</OfferButton><p className="mt-3 text-xs text-muted-foreground">Pagamento seguro quando o checkout estiver disponível.</p></div></div></div>
          <div className="mx-auto mt-8 flex max-w-2xl items-start gap-3 text-sm text-primary-foreground/75"><ShieldCheck className="mt-0.5 size-5 shrink-0 text-lime" aria-hidden="true" /><p>Compra digital. O acesso e as condições de entrega serão apresentados no checkout assim que a conexão de pagamento estiver disponível.</p></div>
        </div>
      </section>

      <section className="bg-background py-12 sm:py-16"><div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20"><div><SectionLabel number="07">Perguntas frequentes</SectionLabel><h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl">Ainda ficou alguma dúvida?</h2><p className="mt-5 text-sm leading-7 text-muted-foreground">Respostas diretas para você decidir com clareza.</p></div><Accordion type="single" collapsible className="border-t border-border">{faq.map((item, i) => <AccordionItem key={item.q} value={`item-${i}`}><AccordionTrigger className="py-5 pr-3 font-display text-base font-semibold hover:no-underline">{item.q}</AccordionTrigger><AccordionContent className="pb-5 text-sm leading-7 text-muted-foreground">{item.a}</AccordionContent></AccordionItem>)}</Accordion></div></section>

      <footer className="border-t border-border bg-surface px-5 py-8 sm:px-8"><div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 sm:flex-row sm:items-center"><span className="font-display text-sm font-extrabold">WhatsApp<span className="text-primary">.</span>Vendedor</span><p className="max-w-lg text-xs leading-5 text-muted-foreground">Material educativo. A aplicação das estratégias não garante resultados específicos de vendas.</p><a href="#inicio" className="text-xs font-bold text-primary hover:underline">Voltar ao início ↑</a></div></footer>

      <Dialog open={checkoutOpen} onOpenChange={setCheckoutOpen}><DialogContent className="max-w-md border-border bg-surface p-7 sm:p-8"><DialogHeader><div className="mb-3 flex size-11 items-center justify-center rounded-md bg-lime-soft text-primary"><FileText size={23} aria-hidden="true" /></div><DialogTitle className="font-display text-xl">Compra ainda indisponível</DialogTitle><DialogDescription className="pt-2 text-sm leading-6 text-muted-foreground">O e-book está apresentado por R$ 37,00 à vista ou 6x de R$ 6,94, mas ainda não foi informado um link de pagamento. Assim que o checkout for conectado, você poderá concluir a compra por aqui.</DialogDescription></DialogHeader><Button variant="outline" onClick={() => setCheckoutOpen(false)} className="mt-3 w-full">Entendi <X size={15} aria-hidden="true" /></Button></DialogContent></Dialog>
    </main>
  );
}