import type { SeedPost } from "./posts"

/**
 * Piezas que cubren huecos MEDIDOS, no ideas sueltas — 29-ago-2026.
 *
 * De dónde salen: se desmontó la competencia de Lima (8 sitemaps expandidos) y
 * se recorrió el autocompletado de Google con 32 semillas expandidas a-z. Los
 * huecos que quedaron:
 *
 *  1. EL CONTRATO con la agencia — 0 resultados al buscar «contrato» en las 391
 *     URLs de los sitemaps de las SIETE competidoras. Y 3R Core es de las pocas
 *     que publica precios y no usa permanencia, así que puede escribirlo desde
 *     una posición que las demás no tienen.
 *  2. BÚSQUEDA CON IA — kom.pe tiene 118 URLs de GEO/ChatGPT y 3rcore tenía 0
 *     de 218, teniendo el único dato propio del mercado.
 *  3. «MI WEB NO APARECE EN GOOGLE» — consulta de dolor con presupuesto ya
 *     gastado, y 3R Core acaba de vivirla en su propia web con cifras reales.
 *  4. EL EJE DEL TIEMPO en EE.UU. — 0 URLs de «cuánto tarda» / «how long» en
 *     las 218 del sitio, teniendo 7 piezas del eje del precio.
 *
 * ⚠️ ORIGEN DE LAS CIFRAS. Los precios de 3R Core salen de sus páginas /es/precios
 * y /en/pricing. Las cifras de indexación (5→16 URLs en una noche, 26 de 34 sin
 * indexar) están medidas con la API de inspección de URLs de Search Console los
 * días 28 y 29 de agosto de 2026 sobre este mismo dominio. No hay ni una
 * estadística de mercado sin fuente: donde no la hay, se dice de qué depende.
 */

const A = "Equipo 3R Core"
const IMG = (id: string) => `https://images.unsplash.com/photo-${id}?w=1200&h=630&fit=crop&q=80`

export const HUECOS_POSTS_2026_08: SeedPost[] = [
  {
    title: "Contrato con una agencia de marketing digital en Perú: qué debe decir antes de que firmes",
    slug: "contrato-agencia-marketing-digital-peru-que-firmar",
    locale: "es",
    excerpt:
      "La cláusula que más dinero cuesta no es el precio: es quién se queda el dominio, las cuentas y el contenido cuando la relación termina. Ocho puntos que revisar antes de firmar.",
    featured_image: IMG("1450101499163-c8848c66ca85"),
    featured_image_alt: "Persona revisando un contrato de servicios sobre un escritorio",
    meta_title: "Contrato con agencia de marketing digital en Perú: qué firmar",
    meta_description:
      "Permanencia, propiedad de las cuentas, quién paga la pauta y qué se entrega cada mes. Los ocho puntos de un contrato con agencia y las señales de uno malo.",
    og_title: "Contrato con una agencia de marketing digital: qué revisar",
    og_description:
      "La cláusula que más cuesta no es el precio: es quién se queda las cuentas cuando te vas.",
    focus_keyword: "contrato agencia de marketing digital",
    author_name: A,
    content: `
<p><strong>Lo más caro de un mal contrato con una agencia no es la tarifa: es descubrir, el día que te vas, que el dominio, la cuenta de Google Ads y el contenido que pagaste durante dos años están a nombre de otro.</strong> Pasa más de lo que parece y casi nunca por mala fe: pasa porque nadie leyó esa cláusula.</p>

<p>Esta guía repasa los ocho puntos que conviene mirar antes de firmar, en el orden en que suelen doler.</p>

<h2>¿A quién pertenecen las cuentas, el dominio y el contenido?</h2>

<p><strong>Todo debe estar a nombre de tu empresa desde el primer día: el dominio, el hosting, la cuenta de Google Ads, la de Analytics, la ficha de Google y el contenido publicado.</strong> La agencia debe tener acceso, no propiedad. Es la diferencia entre alquilar tu marketing y ser dueño de él.</p>

<p>Cómo comprobarlo sin discutir: pide entrar tú a cada cuenta con tu propio correo y confirma que apareces como propietario o administrador con permiso para revocar accesos. Si en alguna solo puedes mirar, ahí hay un problema que resolver antes de firmar y no después.</p>

<p>El caso peor y más común es el dominio. Si lo compró la agencia con su tarjeta y a su nombre, técnicamente es suyo, y recuperarlo depende de su buena voluntad. En 3R Core el primer año de dominio, SSL y hosting va incluido en el proyecto web, pero registrado a nombre del cliente.</p>

<h2>¿Hay permanencia, y qué pasa si quiero irme?</h2>

<p><strong>Una permanencia larga en marketing digital protege a la agencia, no a ti.</strong> Se justifica cuando hay una inversión inicial grande que amortizar; en un servicio mensual de SEO o de gestión de campañas, rara vez.</p>

<p>Lo que sí es razonable es un preaviso: treinta días para que nadie deje una campaña a medias. Lo que no lo es: cláusulas de permanencia de doce meses con penalización por salida anticipada, sobre todo cuando el resultado todavía no se ha demostrado.</p>

<p>En 3R Core no usamos contratos forzosos y el servicio es mensual. Lo decimos aquí porque es fácil de comprobar: <a href="/es/precios">nuestros precios están publicados</a> y esa condición aparece en la misma página. Si una agencia te pide permanencia, pregúntale qué pasa el mes que no cumpla lo prometido.</p>

<h2>¿Quién paga la pauta publicitaria y a nombre de quién va?</h2>

<p><strong>La pauta —el dinero que se le paga a Google, a Meta o a TikTok— debe ir con la tarjeta de tu empresa, en tu propia cuenta publicitaria.</strong> La agencia cobra su honorario de gestión aparte, y esas dos cifras nunca deberían ir mezcladas en una sola factura.</p>

<p>Por qué importa: si la agencia pone su tarjeta, el historial de la cuenta es suyo, los datos de conversión que ha acumulado son suyos y, si terminan mal, empiezas de cero con una cuenta nueva y sin aprendizaje. Además pierdes la única forma de saber cuánto se gastó de verdad.</p>

<p>Una factura que dice «servicio de marketing digital: S/4,000» sin desglosar cuánto fue honorario y cuánto fue pauta es una factura que no te deja auditar nada.</p>

<h2>¿Qué se entrega cada mes, exactamente?</h2>

<p><strong>El contrato debe listar entregables comprobables, no actividades.</strong> «Optimización SEO continua» no se puede verificar; «un informe mensual con posiciones, tráfico orgánico y consultas recibidas, entregado antes del día 10» sí.</p>

<p>Pide que aparezca por escrito:</p>

<ul>
<li><strong>Qué se entrega</strong> y con qué periodicidad: informes, piezas de contenido, campañas activas.</li>
<li><strong>Qué métrica define el éxito</strong> a los seis meses. Si nadie la escribe, cualquier resultado se podrá presentar como bueno.</li>
<li><strong>Quién es tu interlocutor</strong> y en cuánto tiempo responde.</li>
<li><strong>Qué pasa con lo no consumido</strong>: si un mes se producen tres piezas de las cinco pactadas, ¿se acumulan o se pierden?</li>
</ul>

<h2>¿Cómo se mide el resultado y quién controla la medición?</h2>

<p><strong>La analítica tiene que estar en una propiedad de tu empresa, no en una de la agencia.</strong> Si Google Analytics está en la cuenta del proveedor, el día que te vas pierdes el histórico entero y con él cualquier posibilidad de comparar al siguiente.</p>

<p>Y conviene acordar qué cuenta como conversión antes de empezar. Hemos auditado cuentas donde un clic en el botón de WhatsApp de la cabecera contaba como lead, así que el informe mensual mostraba cientos de «conversiones» que no eran nadie. No es que mintieran: es que nadie definió el término.</p>

<h2>¿Qué señales indican un mal contrato?</h2>

<p><strong>Hay cinco que se detectan antes de firmar y que casi siempre traen problemas.</strong></p>

<ul>
<li><strong>Garantía de posiciones.</strong> «Te ponemos primero en Google» no se puede garantizar porque nadie controla el algoritmo. Quien lo promete, o no lo sabe o lo sabe y lo dice igual.</li>
<li><strong>Precio sin desglose.</strong> Una cifra única que mezcla honorario, pauta, hosting y licencias impide saber qué estás pagando.</li>
<li><strong>Cuentas creadas por la agencia «para simplificar».</strong> Simplifica ahora y cuesta caro después.</li>
<li><strong>Sin fecha de entrega en el proyecto web.</strong> Un desarrollo sin hitos fechados se puede alargar indefinidamente sin incumplir nada.</li>
<li><strong>Cláusula de exclusividad amplia.</strong> Que no puedas contratar a nadie más para nada relacionado con marketing es desproporcionado en un servicio mensual.</li>
</ul>

<h2>¿Qué debe pasar cuando el contrato termina?</h2>

<p><strong>La salida ordenada se pacta al entrar, no al salir.</strong> El contrato debería decir que, al terminar, la agencia transfiere accesos en un plazo concreto, entrega los archivos fuente del diseño y no elimina contenido publicado.</p>

<p>Los archivos fuente son el punto que más se olvida. Si te entregan el logo solo en JPG y no el archivo vectorial, cada modificación futura tendrá que pasar por alguien que lo rehaga. Pide los originales en el contrato, no de favor al final.</p>

<h2>¿Y si soy yo quien redacta el contrato?</h2>

<p><strong>Un buen contrato de agencia cabe en tres o cuatro páginas y responde siete preguntas:</strong> qué se hace, qué se entrega y cuándo, cuánto cuesta desglosado, quién es dueño de qué, cómo se mide, cómo se sale y qué pasa con los accesos al salir.</p>

<p>Todo lo que ocupe más suele ser protección de una de las dos partes contra la otra. No es malo en sí, pero conviene saber a quién protege cada párrafo.</p>

<h2>Preguntas frecuentes</h2>

<h3>¿Es normal que una agencia pida permanencia de doce meses?</h3>
<p>Es habitual y rara vez está justificado en un servicio mensual. Se entiende en un proyecto con inversión inicial fuerte que hay que amortizar; en gestión de SEO o de campañas, lo razonable es mensual con preaviso de treinta días. En 3R Core no usamos permanencia y el servicio es mensual.</p>

<h3>¿Puedo pedir que el contrato incluya un objetivo de resultados?</h3>
<p>Puedes pedir un objetivo de actividad y de métricas intermedias, y deberías. Lo que ninguna agencia seria firmará es un número garantizado de ventas o una posición concreta en Google, porque depende de factores que no controla. Si alguien lo firma, revisa qué letra pequeña lo acompaña.</p>

<h3>¿Quién debe pagar el hosting y el dominio?</h3>
<p>Los paga el cliente y van a su nombre, aunque el primer año esté incluido en el proyecto. En 3R Core el primer año de dominio, SSL y hosting va dentro del precio de la web —desde S/1,800 la landing y S/4,500 la web corporativa— pero registrado a nombre del cliente desde el inicio.</p>

<h3>¿Qué hago si ya firmé y las cuentas están a nombre de la agencia?</h3>
<p>Pídelo por escrito y por buenas antes que nada: en la mayoría de casos se transfiere sin problema porque no había intención de retenerlo. Si hay resistencia, el dominio se puede reclamar ante el registrador y las cuentas publicitarias tienen procedimientos de reclamación de propiedad. Empieza siempre por pedirlo bien.</p>

<h3>¿Esto es asesoría legal?</h3>
<p>No. Es lo que hemos aprendido revisando contratos de agencia desde el lado del proveedor y auditando cuentas de clientes que llegaron con problemas de accesos. Para la validez legal de cualquier cláusula en Perú, consulta con un abogado.</p>

<p>¿Estás comparando propuestas? <a href="/es/precios">Nuestros precios están publicados</a>, sin permanencia, y puedes <a href="/es/cotizar">calcular el estimado de tu proyecto</a> antes de hablar con nadie. Si quieres ver qué hacemos exactamente, está en <a href="/es/servicios">nuestros servicios</a>.</p>
`,
  },
  {
    title: "Cómo aparecer en ChatGPT: qué tiene que tener tu web para que la IA te cite",
    slug: "como-aparecer-en-chatgpt-negocios-peru",
    locale: "es",
    excerpt:
      "Los asistentes no enlazan webs: recortan pasajes. Qué comprobar hoy en tu sitio, en qué orden, y qué esperar de verdad — con los números que medimos en nuestra propia analítica.",
    featured_image: IMG("1677442136019-21780ecad995"),
    featured_image_alt: "Persona consultando un asistente de inteligencia artificial en una laptop",
    meta_title: "Cómo aparecer en ChatGPT: guía para negocios en Perú",
    meta_description:
      "Qué revisar en tu web para que ChatGPT, Perplexity y Copilot te citen: acceso de los rastreadores, forma del pasaje y datos con fuente. Con cifras medidas.",
    og_title: "Cómo aparecer en ChatGPT y que la IA cite tu negocio",
    og_description: "Los asistentes no enlazan webs: recortan pasajes. Esto es lo que hay que cambiar.",
    focus_keyword: "como aparecer en chatgpt",
    author_name: A,
    content: `
<p><strong>Para aparecer en ChatGPT tu web tiene que cumplir tres cosas: que sus rastreadores puedan leerla, que la respuesta a cada pregunta esté en las primeras líneas de su sección, y que los datos que das se puedan verificar.</strong> No hay un panel donde darse de alta ni una posición que comprar.</p>

<p>Aquí está el orden en que conviene revisarlo, y qué esperar de verdad.</p>

<h2>¿Cómo decide ChatGPT a quién cita?</h2>

<p><strong>Cuando ChatGPT busca en internet para responder, recorta fragmentos de páginas concretas y los atribuye con un enlace.</strong> No enlaza la web entera: enlaza el pasaje que respondió. Esa es la diferencia que lo cambia todo respecto al SEO clásico.</p>

<p>OpenAI documenta públicamente qué rastreadores usa y para qué sirve cada uno: <a href="https://platform.openai.com/docs/bots" rel="nofollow noopener" target="_blank">platform.openai.com/docs/bots</a>, consultado el 29 de agosto de 2026. Los relevantes aquí son <strong>GPTBot</strong> y <strong>OAI-SearchBot</strong>. Perplexity, Anthropic y Google tienen los suyos.</p>

<p>La consecuencia práctica: una página que tarda tres párrafos en dar el precio pierde la cita contra otra que lo dice en la primera línea, aunque la primera esté mejor posicionada en Google.</p>

<h2>¿Está tu web bloqueando a los rastreadores de IA sin que lo sepas?</h2>

<p><strong>Es lo primero que hay que comprobar, y se mira en un fichero de texto: tudominio.com/robots.txt.</strong> Busca ahí si aparece alguno de estos nombres seguido de una instrucción de bloqueo: GPTBot, OAI-SearchBot, PerplexityBot, ClaudeBot, Google-Extended.</p>

<p>Ojo con una trampa: hay que leer el bloque completo de cada agente, no buscar la palabra suelta. Un robots.txt puede tener un <code>Disallow: /</code> dentro del bloque de un buscador concreto sin afectar a los demás, y al revés.</p>

<p>Y una segunda trampa, más difícil de ver: <strong>un código 200 no prueba que el bot esté recibiendo tu web</strong>. Algunos cortafuegos le sirven una pantalla de espera vacía al rastreador y la página completa a una persona. La forma de comprobarlo es comparar los bytes que recibe cada agente contra los que recibe un navegador; si el bot recibe mucho menos, algo lo está frenando aunque el código diga que todo va bien.</p>

<h2>¿Qué forma tiene que tener el texto para que se pueda citar?</h2>

<p><strong>Respuesta directa en las primeras cincuenta palabras después de cada encabezado, y encabezados escritos como la pregunta que la gente teclea.</strong> Si tu H2 dice «Nuestra metodología de trabajo», ningún modelo lo va a casar con una pregunta real. Si dice «¿Cuánto cuesta una página web en Perú?», sí.</p>

<p>Lo que más rompe la citabilidad, y casi nadie mira:</p>

<ul>
<li><strong>Bloques largos sin subtítulo.</strong> Ochocientas palabras seguidas no tienen nada que recortar. Cada sección debería quedarse por debajo de las trescientas.</li>
<li><strong>Pasajes que no se entienden sueltos.</strong> Si un párrafo dice «nuestro servicio incluye…», fuera de contexto no significa nada. Nombra la empresa y el sujeto dentro del pasaje.</li>
<li><strong>Anuncios y avisos entre el encabezado y la respuesta.</strong> Un banner insertado justo después del H2 se lleva el sitio que debería ocupar la respuesta.</li>
</ul>

<h2>¿Qué datos cita un asistente y cuáles ignora?</h2>

<p><strong>Cita cifras con unidad, fecha y fuente. Ignora adjetivos.</strong> «Entre S/2,500 y S/25,000 según el tipo de proyecto, revisado en agosto de 2026» es citable. «Precios muy competitivos» no lo será nunca.</p>

<p>Esto es también lo que separa una web útil de un folleto. Si tu página no contiene un solo dato que alguien pueda repetir, no hay nada que citar aunque el texto esté bien escrito.</p>

<p>Y si el dato viene de un tercero —el precio de una plataforma, un plazo oficial—, enlaza la fuente y pon la fecha en que lo comprobaste. Los modelos favorecen lo verificable, y de paso proteges a tu lector cuando ese dato cambie.</p>

<h2>¿Sirve de algo el fichero llms.txt?</h2>

<p><strong>Es un fichero de texto en la raíz del dominio que resume qué hace la empresa y enlaza sus páginas principales, pensado para que lo lea un modelo. Cuesta poco ponerlo y no hace daño, pero no hay evidencia pública de que los grandes asistentes lo usen hoy como señal.</strong></p>

<p>Lo decimos así de claro porque circula bastante entusiasmo con esto. A diferencia de robots.txt o del sitemap, que están documentados por los buscadores, llms.txt es una propuesta que aún no ha adoptado nadie de forma oficial. Nosotros lo implementamos como apuesta barata; si alguien te lo vende como la palanca principal, desconfía.</p>

<h2>¿Merece la pena, en números?</h2>

<p><strong>En nuestra propia analítica, en una ventana de noventa días, el tráfico llegado desde ChatGPT, Perplexity y Copilot convirtió al 12,23%. El tráfico orgánico de Google, en la misma ventana, convirtió al 4,03%.</strong> Tres veces mejor.</p>

<p>El matiz importante: es mucho menos volumen. No sustituye al SEO ni de lejos. Lo que cambia es la intención — la persona ya leyó una respuesta que la convenció y entra a confirmar, no a comparar diez opciones.</p>

<p>Si quieres verlo en tu propio caso, en Google Analytics se puede separar ese tráfico por el origen de la sesión y compararlo con el orgánico en sesiones, permanencia y conversión. Sin esa separación estás promediando dos comportamientos muy distintos.</p>

<h2>¿Por dónde empezar si solo puedes hacer una cosa?</h2>

<p><strong>Comprueba que los rastreadores entran.</strong> Es lo más rápido, lo más barato y lo único que puede estar anulando todo lo demás sin que se note. Una web bloqueada no aparece por muy bien escrita que esté.</p>

<p>Después, reescribe las tres páginas que ya reciben más visitas para que la respuesta esté arriba de cada sección. Cuesta menos hacer citable una página que ya funciona que crear una nueva desde cero.</p>

<h2>Preguntas frecuentes</h2>

<h3>¿Puedo pagar para aparecer en ChatGPT?</h3>
<p>No existe hoy un producto que te ponga dentro de las respuestas orgánicas de un asistente a cambio de dinero. Lo que sí hay es publicidad en algunos de estos productos, que es otra cosa y va identificada. Si alguien te ofrece «posicionarte en ChatGPT» con una tarifa, pregúntale exactamente qué te está vendiendo.</p>

<h3>¿Cómo sé si ChatGPT me está citando?</h3>
<p>La forma fiable es mirar el tráfico: en tu analítica, las visitas cuyo origen es chatgpt.com, perplexity.ai o copilot.com. Preguntarle al asistente «¿conoces a mi empresa?» no sirve como comprobación, porque la respuesta varía entre usuarios y sesiones.</p>

<h3>¿Tengo que bloquear a los bots de IA para proteger mi contenido?</h3>
<p>Depende de qué vendas. Si vives de que te encuentren y te contraten, bloquearlos es cerrarte un canal que hoy convierte mejor que el orgánico. Si vendes el contenido en sí —cursos, informes de pago—, la decisión es distinta y legítima. No hay una respuesta única.</p>

<h3>¿Esto reemplaza al SEO?</h3>
<p>No. Los asistentes se apoyan en buena medida en lo que ya está indexado, así que una web que no aparece en ningún buscador tampoco suele aparecer citada. Si tuvieras que elegir una sola cosa, empieza por el SEO técnico y de contenido.</p>

<p>Si quieres que lo trabajemos contigo, está en <a href="/es/servicios/posicionamiento-ia">nuestro servicio de posicionamiento en IA</a>, que va dentro del <a href="/es/posicionamiento-seo">servicio de SEO</a>. Puedes <a href="/es/cotizar">calcular el estimado</a> antes de escribirnos.</p>
`,
  },
  {
    title: "¿Por qué mi página web no aparece en Google? Siete causas y cómo comprobar cada una",
    slug: "por-que-mi-pagina-web-no-aparece-en-google-peru",
    locale: "es",
    excerpt:
      "Pagaste una web y no aparece. Antes de culpar a nadie, hay siete cosas que puedes comprobar tú mismo en media hora. Con un caso real y sus cifras.",
    featured_image: IMG("1432888622747-4eb9a8efeb07"),
    featured_image_alt: "Persona revisando el rendimiento de su web en un ordenador",
    meta_title: "¿Por qué mi página web no aparece en Google? 7 causas",
    meta_description:
      "Indexación, robots.txt, enlaces internos, contenido por JavaScript o simplemente tiempo. Cómo comprobar cada causa tú mismo antes de pagarle a nadie.",
    og_title: "¿Por qué mi página web no aparece en Google?",
    og_description: "Siete causas, en orden de probabilidad, y cómo comprobar cada una.",
    focus_keyword: "por que mi pagina web no aparece en google",
    author_name: A,
    content: `
<p><strong>Si tu web no aparece en Google, la causa más frecuente no es la calidad del contenido: es que Google no la ha indexado, y la razón más común de eso es que ninguna otra página del sitio la enlaza.</strong> Lo bueno es que casi todo esto se comprueba gratis y en media hora.</p>

<p>Vamos causa por causa, de la más probable a la menos.</p>

<h2>¿Está indexada tu página, o solo publicada?</h2>

<p><strong>Publicar y estar indexado son dos cosas distintas. Una web puede llevar meses en internet y no existir para Google.</strong> Se comprueba en Google Search Console, que es gratis: en la barra superior pegas la dirección exacta de la página y te dice su estado.</p>

<p>Los estados que vas a ver y lo que significa cada uno:</p>

<ul>
<li><strong>«URL disponible en Google»</strong> — está indexada. Si aun así no la ves al buscar, tu problema no es de indexación sino de posición, y eso es otro artículo.</li>
<li><strong>«Descubierta: actualmente sin indexar»</strong> — Google conoce la dirección pero ni siquiera la ha abierto. Es la señal típica de una página que nadie enlaza.</li>
<li><strong>«Rastreada: actualmente sin indexar»</strong> — la ha abierto y ha decidido no incluirla, por ahora. Suele indicar que no encuentra motivo para hacerlo.</li>
<li><strong>«Excluida por etiqueta noindex»</strong> — tu propia web le está pidiendo que no la indexe. Esto se arregla en un minuto y es sorprendentemente común.</li>
</ul>

<h2>¿Tu web le está diciendo a Google que no entre?</h2>

<p><strong>Hay dos formas de bloquear a Google sin querer, y las dos son de una línea.</strong> La primera es el fichero tudominio.com/robots.txt: si contiene <code>Disallow: /</code> bajo <code>User-agent: *</code>, estás bloqueando el sitio entero.</p>

<p>La segunda es la etiqueta <code>noindex</code> en el código de la página. Es la que suele quedarse puesta cuando la web estuvo en desarrollo: se bloquea para que no se indexe la versión de pruebas y nadie la quita al lanzar. En WordPress hay además una casilla de «disuadir a los motores de búsqueda» en los ajustes de lectura que hace lo mismo.</p>

<h2>¿Alguna otra página de tu web enlaza a esa?</h2>

<p><strong>Esta es la causa que más veces hemos encontrado y la que menos se sospecha: una página que no recibe ningún enlace interno es una página que Google descubre y decide no indexar.</strong></p>

<p>Nos pasó en nuestra propia web, así que lo contamos con cifras. En agosto de 2026, la sección de nuestro sitio dirigida a Estados Unidos tenía <strong>26 de sus 34 páginas</strong> en el estado «Descubierta: actualmente sin indexar», según la API de inspección de Search Console. El contenido estaba bien —entre 1.100 y 1.600 palabras, sin noindex, con su etiqueta canónica correcta— y aun así Google no las incluía.</p>

<p>La causa era el enlazado: las dos páginas principales de esa sección tenían <strong>un solo enlace</strong> en todo el sitio, y los pocos enlaces que salían de ellas iban a páginas que nosotros mismos habíamos marcado como no indexables. Estaban aisladas por los dos lados.</p>

<p>Al colgarlas del menú y del pie de página —de forma que recibieran un enlace desde cada página del sitio— pasamos de <strong>5 páginas indexadas a 16 en menos de doce horas</strong>, medido con la misma herramienta. Y las que seguían fuera cambiaron de «Descubierta» a «Rastreada», que es el paso previo.</p>

<p>Cómo comprobarlo en tu caso: abre el menú y el pie de tu web y comprueba si esa página está enlazada desde algún sitio. Si solo se llega a ella escribiendo la dirección, ese es el problema.</p>

<h2>¿Está el contenido en el HTML o lo pinta JavaScript?</h2>

<p><strong>Si el texto de tu página aparece solo después de que el navegador ejecute JavaScript, hay riesgo de que un buscador no lo vea.</strong> Google renderiza JavaScript, pero no siempre, no de inmediato y no todos los buscadores lo hacen igual.</p>

<p>La comprobación casera: en tu navegador, clic derecho sobre la página y «ver código fuente de la página» —no «inspeccionar»—. Busca ahí un párrafo de tu texto. Si aparece, bien. Si el código está casi vacío y solo hay scripts, tienes un problema que resolver con quien desarrolló la web.</p>

<h2>¿Está en el sitemap y lo has enviado?</h2>

<p><strong>El sitemap es la lista de páginas que le entregas a Google, y va en tudominio.com/sitemap.xml.</strong> Ábrelo y comprueba que la página que te preocupa está ahí. Después, en Search Console, en la sección de Sitemaps, comprueba que está enviado y sin errores.</p>

<p>No es magia: estar en el sitemap no obliga a nadie a indexarte. Pero no estar es quitarte una vía fácil de que te encuentren, y además un sitemap que lista páginas que redirigen o que dan error es una señal de descuido.</p>

<h2>¿O simplemente es pronto?</h2>

<p><strong>Una web recién publicada tarda en aparecer, y no hay un plazo garantizado.</strong> Puede ser cuestión de días o de semanas según cuántos enlaces reciba y con qué frecuencia Google visite el sitio.</p>

<p>Lo que sí acelera de verdad: enviar el sitemap, tener enlaces internos desde páginas que ya están indexadas, y conseguir que algún sitio externo te enlace. Lo que no acelera nada: republicar la página una y otra vez, ni cambiarle el título cada semana.</p>

<h2>¿Y si sí aparece, pero para nada que te sirva?</h2>

<p><strong>Este es el caso más frustrante y el más común en webs que llevan tiempo: la página está indexada y recibe visitas, pero de consultas que no traen clientes.</strong></p>

<p>Se ve en Search Console, en el informe de rendimiento: si las consultas que te traen tráfico son informativas o de gente que busca algo distinto de lo que vendes, tienes visibilidad pero no negocio. La solución no es más contenido, sino contenido que responda a lo que busca alguien a punto de comprar.</p>

<h2>Preguntas frecuentes</h2>

<h3>¿Cuánto tarda una página nueva en aparecer en Google?</h3>
<p>No hay un plazo garantizado y depende de cuántos enlaces reciba la página y de la frecuencia con la que Google visite tu sitio. En webs con autoridad ya establecida puede ser cuestión de días; en un dominio nuevo y sin enlaces, semanas. Cualquiera que te dé una fecha exacta está prometiendo algo que no controla.</p>

<h3>¿Sirve de algo pedir la indexación manualmente en Search Console?</h3>
<p>Sirve para avisar, no para obligar. Es útil cuando acabas de corregir algo y quieres que Google lo vea antes. Lo que no hace es convencer a Google de indexar una página que ha decidido no indexar: para eso hay que arreglar la causa, que casi siempre es de enlaces o de contenido.</p>

<h3>Mi web aparece si busco el nombre de mi empresa, pero no por lo que vendo. ¿Es normal?</h3>
<p>Es lo normal al principio. Aparecer por tu propia marca es fácil porque no compites con nadie. Aparecer por lo que vendes es competir con quienes llevan años trabajándolo, y eso es exactamente el trabajo de posicionamiento.</p>

<h3>¿Puedo comprobar todo esto yo mismo?</h3>
<p>Sí, y todo lo de este artículo es gratis. Necesitas Google Search Console verificado para tu dominio, que se configura en unos minutos, y un navegador. Si tras revisarlo sigues sin entender qué pasa, ahí es donde tiene sentido pedir ayuda.</p>

<p>Si quieres que lo miremos nosotros, está en <a href="/es/posicionamiento-seo">nuestro servicio de posicionamiento SEO</a>. Y si estás valorando rehacer la web, puedes <a href="/es/cotizar">calcular el estimado</a> antes de hablar con nadie.</p>
`,
  },
  {
    title: "¿Cuánto tarda una página web en aparecer en Google?",
    slug: "cuanto-tarda-una-pagina-web-en-aparecer-en-google",
    locale: "us",
    excerpt:
      "Aparecer y posicionar son dos cosas distintas, y la gente las confunde. Qué estados existen, qué acelera de verdad y un caso propio: de 5 a 16 páginas indexadas en una noche.",
    featured_image: IMG("1523289333742-be1143f6b766"),
    featured_image_alt: "Reloj de arena junto a una laptop mostrando resultados de búsqueda",
    meta_title: "¿Cuánto tarda una página web en aparecer en Google?",
    meta_description:
      "Indexar y posicionar no es lo mismo. Los estados reales de Search Console, qué acelera la indexación y qué no, con un caso medido: de 5 a 16 páginas en 12 horas.",
    og_title: "¿Cuánto tarda una página web en aparecer en Google?",
    og_description: "Aparecer y posicionar son dos cosas distintas. Esta es la diferencia y los plazos reales.",
    focus_keyword: "cuanto tarda una pagina web en aparecer en google",
    author_name: A,
    content: `
<p><strong>Que tu página aparezca en Google —estar indexada— puede tardar de horas a varias semanas. Que aparezca ARRIBA cuando alguien busca lo que vendes —posicionar— tarda meses. Son dos cosas distintas y confundirlas es la causa de casi toda la frustración con el tema.</strong></p>

<p>Aquí está la diferencia, los plazos reales y qué acelera de verdad cada parte.</p>

<h2>¿Cuál es la diferencia entre indexar y posicionar?</h2>

<p><strong>Indexar es que Google guarde tu página en su base de datos. Posicionar es que decida mostrarla por delante de otras cuando alguien busca.</strong> Lo primero es un requisito; lo segundo es la competencia.</p>

<p>La prueba rápida de si estás indexado: busca en Google una frase exacta y poco común de tu página, entre comillas. Si aparece, estás indexado. Si no aparece ni así, todavía no.</p>

<p>Mucha gente concluye «Google no me indexa» cuando en realidad está indexada y lo que pasa es que está en la página cuatro. Son problemas distintos con soluciones distintas.</p>

<h2>¿Qué estados existen y qué significa cada uno?</h2>

<p><strong>Google Search Console —gratis— te dice el estado exacto de cualquier dirección de tu web.</strong> Pegas la URL en la barra superior y te responde. Estos son los estados que vas a ver:</p>

<table>
<tr><th>Estado</th><th>Qué significa</th><th>Qué hacer</th></tr>
<tr><td>URL disponible en Google</td><td>Indexada</td><td>Nada. Si no la ves, el problema es de posición.</td></tr>
<tr><td>Descubierta: actualmente sin indexar</td><td>Conoce la dirección pero ni la ha abierto</td><td>Casi siempre falta de enlaces internos</td></tr>
<tr><td>Rastreada: actualmente sin indexar</td><td>La abrió y decidió no incluirla, por ahora</td><td>Suele faltar motivo: contenido o autoridad</td></tr>
<tr><td>Excluida por etiqueta noindex</td><td>Tu web le pide que no la indexe</td><td>Quitar la etiqueta. Se arregla en un minuto.</td></tr>
</table>

<p>El paso de «Descubierta» a «Rastreada» ya es una buena señal aunque todavía no estés indexado: significa que Google ha bajado la página y está decidiendo.</p>

<h2>¿Qué acelera de verdad la indexación?</h2>

<p><strong>Tres cosas, en este orden de eficacia: enlaces internos desde páginas que ya están indexadas, el sitemap enviado, y avisos por IndexNow a los buscadores que lo aceptan.</strong></p>

<p>Lo contamos con un caso propio y sus números. En agosto de 2026, la sección de nuestra web dirigida a Estados Unidos tenía <strong>26 de sus 34 páginas</strong> en «Descubierta: actualmente sin indexar». El contenido estaba bien y no había ningún bloqueo técnico. El problema era que las dos páginas principales de esa sección tenían <strong>un solo enlace interno</strong> en todo el sitio.</p>

<p>Al colgarlas del menú y del pie de página, de modo que recibieran un enlace desde cada página del sitio, pasamos de <strong>5 páginas indexadas a 16 en menos de doce horas</strong>, medido con la API de inspección de Search Console. Las que seguían fuera pasaron de «Descubierta» a «Rastreada».</p>

<p>No fue el sitemap —ya estaba enviado— ni la calidad del texto, que no cambió. Fueron los enlaces.</p>

<h2>¿Y qué NO acelera nada?</h2>

<ul>
<li><strong>Republicar la misma página una y otra vez.</strong> Cambiar la fecha no la hace nueva.</li>
<li><strong>Pedir indexación manual en bucle.</strong> Sirve para avisar de un cambio, no para convencer a Google de indexar algo que ha decidido no indexar.</li>
<li><strong>Comprar tráfico.</strong> Las visitas no son una señal de indexación.</li>
<li><strong>Cambiar el título cada semana.</strong> Solo confunde, y borra cualquier posibilidad de saber si un cambio funcionó.</li>
</ul>

<h2>¿Cuánto tarda entonces posicionar?</h2>

<p><strong>Para consultas locales y de cola larga con poca competencia, suele haber movimiento en unos meses de trabajo constante. Para términos comerciales disputados, bastante más.</strong> No damos una cifra cerrada porque depende de la competencia de tu sector, de la autoridad que ya tenga el dominio y de cuánto contenido se publique.</p>

<p>Quien te dé una fecha exacta te está dando un número que no controla. Lo que sí se puede comprometer es el reporte: qué consultas se movieron, cuáles no y qué cambia el mes siguiente.</p>

<h2>¿Cuánto tarda en aparecer una web completamente nueva?</h2>

<p><strong>Un dominio nuevo, sin historial y sin ningún enlace externo, parte con desventaja: Google no tiene ninguna razón para visitarlo a menudo.</strong> Ahí el sitemap y los primeros enlaces desde cualquier sitio real —tus redes, un directorio, un proveedor— importan más de lo que parece.</p>

<p>Si además la web se publicó con la etiqueta <code>noindex</code> puesta desde la fase de desarrollo, puede estar esperando indefinidamente. Es lo primero que revisamos cuando alguien nos dice que «lleva meses y no sale».</p>

<h2>¿Qué puedes hacer tú el mismo día que se publica la web?</h2>

<p><strong>Tres cosas, y las tres son gratis.</strong> Ninguna garantiza nada, pero las tres quitan excusas para que Google tarde más de lo necesario.</p>

<ul>
<li><strong>Verifica el dominio en Google Search Console.</strong> Sin eso no puedes ni comprobar el estado ni enviar el sitemap. Se hace en unos minutos añadiendo un registro en el DNS o subiendo un archivo.</li>
<li><strong>Envía el sitemap.</strong> En la sección de Sitemaps, pegas tudominio.com/sitemap.xml y le das a enviar. Comprueba después que no marca errores.</li>
<li><strong>Consigue el primer enlace externo.</strong> Tu perfil de empresa en Google, tus redes, el directorio de tu gremio o la web de un proveedor. Un dominio sin ningún enlace entrante es un dominio que Google no tiene motivo para visitar.</li>
</ul>

<h2>¿Y si tu negocio es local? El plazo es otro</h2>

<p><strong>Para un negocio con local o con área de servicio, la ficha de Google suele traer clientes antes que la web, y por bastante margen.</strong> Aparecer en el mapa no depende de indexar tu sitio: depende de tener la ficha verificada, con la categoría correcta y con reseñas.</p>

<p>Es la vía más rápida que existe para un negocio nuevo. Mientras el posicionamiento orgánico madura durante meses, la ficha puede empezar a recibir llamadas en semanas. Y las dos se refuerzan: una web bien enlazada desde la ficha, y una ficha enlazada desde la web.</p>

<p>Si tu negocio vende a todo el país o por internet, esto no aplica igual y sí dependes del posicionamiento orgánico. Conviene saber en cuál de los dos casos estás antes de decidir dónde poner el esfuerzo.</p>

<h2>Preguntas frecuentes</h2>

<h3>¿Cuánto tarda Google en indexar una página nueva?</h3>
<p>De horas a varias semanas, según cuántos enlaces reciba y con qué frecuencia Google visite tu sitio. En un dominio establecido y con la página bien enlazada desde el menú, suele ser rápido. En un dominio nuevo y sin enlaces, puede tardar semanas.</p>

<h3>¿Por qué mi página lleva un mes publicada y sigue sin aparecer?</h3>
<p>Lo más probable, por experiencia, es que ninguna otra página de tu web la enlace. Compruébalo: si solo se llega a ella escribiendo la dirección, ese es el problema. Después revisa que no tenga la etiqueta noindex ni esté bloqueada en robots.txt.</p>

<h3>¿Sirve de algo IndexNow?</h3>
<p>Sirve para avisar a Bing y a los buscadores que lo aceptan de que hay una dirección nueva o cambiada, y es inmediato y gratuito. Google no participa en IndexNow, así que para Google el camino sigue siendo el sitemap y los enlaces.</p>

<h3>¿Cuánto tarda en dar resultados una web nueva de 3R Core?</h3>
<p>La indexación empieza desde el día del lanzamiento, porque entregamos el sitio con sitemap, enlazado interno y medición ya configurada. Los resultados de posicionamiento dependen de tu competencia y no los prometemos con fecha. Nuestras webs arrancan desde $850 la landing y $1,200 la corporativa, y el primer año incluye dominio, SSL y hosting.</p>

<p>¿Necesitas que te ayudemos con esto? Está en <a href="/us/posicionamiento-seo">nuestro servicio de posicionamiento SEO</a> y en <a href="/us/servicios/desarrollo-web">desarrollo web</a>. Puedes <a href="/us/cotizar">calcular el estimado de tu proyecto</a> antes de escribirnos.</p>
`,
  },
  {
    title: "How Long Does It Take to Build a Website for a Small Business?",
    slug: "how-long-does-it-take-to-build-a-website",
    locale: "en",
    excerpt:
      "One to two weeks for a landing page, three to six for a corporate site, four to eight for a store. And the thing that actually causes delay is almost never the development.",
    featured_image: IMG("1517245386807-bb43f82c33c4"),
    featured_image_alt: "Designer planning a website build on a calendar and laptop",
    meta_title: "How Long Does It Take to Build a Website in 2026?",
    meta_description:
      "Landing page 1-2 weeks, corporate site 3-6, ecommerce 4-8. What happens each week, what actually causes delay, and why a two-week quote is usually a warning sign.",
    og_title: "How Long Does It Take to Build a Website?",
    og_description: "Real timelines per project type, and the thing that actually causes delay.",
    focus_keyword: "how long does it take to build a website",
    author_name: A,
    content: `
<p><strong>A professional landing page takes one to two weeks. A corporate site of five to eight sections takes three to six. An online store takes four to eight, depending on catalog size.</strong> Those are the ranges we work to, and the variable that decides where you land inside them is almost never the development.</p>

<h2>How long does each type of website take?</h2>

<p><strong>Here are the ranges tied to what each project actually involves, with the prices we publish so you can match scope to timeline.</strong></p>

<table>
<tr><th>Type</th><th>Timeline</th><th>Price</th><th>What drives the range</th></tr>
<tr><td>Landing page</td><td>1–2 weeks</td><td>from $850</td><td>One offer, one action. Copy readiness.</td></tr>
<tr><td>Corporate site</td><td>3–6 weeks</td><td>$1,200–$2,400</td><td>Number of sections, custom design vs configured theme</td></tr>
<tr><td>Online store</td><td>4–8 weeks</td><td>from $1,750</td><td>Catalog size, integrations, payment setup</td></tr>
</table>

<p>Above those ranges you are usually buying something specific rather than something bigger: a booking engine, a members area, an integration with software you already run. Each of those is real engineering and should be quoted with its own timeline.</p>

<h2>What happens each week?</h2>

<p><strong>A corporate site, week by week, looks like this — and knowing it lets you spot when a project is drifting.</strong></p>

<ul>
<li><strong>Week 1 — Discovery and structure.</strong> What the site has to achieve, who it talks to, and the sitemap. Nothing gets designed until this is agreed.</li>
<li><strong>Week 2 — Design in Figma.</strong> You see and approve the actual screens before a line of code exists. This is where changes are cheap.</li>
<li><strong>Weeks 3–4 — Development.</strong> The approved design becomes a responsive site. Analytics and conversion tracking go in here, not afterwards.</li>
<li><strong>Week 5 — Content load and review.</strong> Real copy, real photography, and a round of corrections.</li>
<li><strong>Week 6 — Launch.</strong> Domain, SSL, sitemap, indexing and a final pass on mobile.</li>
</ul>

<h2>What actually causes delay?</h2>

<p><strong>Content and feedback. Not development.</strong> The fastest projects we run are the ones where the client already has copy and photography, and where one named person makes decisions.</p>

<p>The three that stall projects most often:</p>

<ul>
<li><strong>«The client provides content.»</strong> This line in a quote is where months go missing. If writing the copy is on you, block the time for it now or ask for it to be included in the scope.</li>
<li><strong>Feedback by committee.</strong> Four people with equal say and no tie-breaker will produce contradictory rounds. Name one decision-maker before starting.</li>
<li><strong>Scope added mid-build.</strong> «Can we also add a blog?» in week four is a new project, not a tweak. It is fine to want it; it just needs its own timeline.</li>
</ul>

<h2>Why is a two-week quote for a full site usually a warning sign?</h2>

<p><strong>Because something is being skipped, and it is normally the part you cannot see.</strong> Two weeks is realistic for a landing page or for a well-configured template with content already written. It is not realistic for a custom corporate site.</p>

<p>What gets cut to hit that number: the discovery conversation, the design round you approve before coding, and the measurement setup. That last one is the expensive omission — a site that launches without analytics gives you months of decisions made blind.</p>

<h2>How long until the site brings traffic?</h2>

<p><strong>That is a different question with a different answer, and mixing them up is where disappointment comes from.</strong> Launching is weeks; ranking is months.</p>

<p>Indexing starts at launch if the site ships with a sitemap and proper internal linking. Ranking for terms people actually search takes considerably longer and depends on your competition. We do not quote a date for it, because nobody controls it.</p>

<p>One thing worth knowing: internal linking matters more than most people expect. On our own site in August 2026, 26 of 34 pages in one section sat in Search Console as «Discovered – currently not indexed» with perfectly good content. The cause was that the key pages had a single internal link. After linking them from the menu and footer, indexed pages went from 5 to 16 in under twelve hours.</p>

<h2>What can you do to make it faster?</h2>

<p><strong>Three things, and they are all on your side of the table.</strong></p>

<ul>
<li><strong>Have the copy ready, or pay for it.</strong> Either is fine. What is not fine is assuming it will happen in parallel.</li>
<li><strong>Gather photography before week one.</strong> Real photos of your team, your space and your work beat stock every time, and sourcing them takes longer than you think.</li>
<li><strong>Name one decision-maker.</strong> One person who can approve the design round without a meeting.</li>
</ul>

<h2>What does a realistic project schedule look like on your side?</h2>

<p><strong>Most of the calendar is yours, not the agency's, and knowing that changes how you plan.</strong> Here is what a client actually has to produce, and roughly when.</p>

<table>
<tr><th>When</th><th>What you need ready</th><th>Time it usually takes</th></tr>
<tr><td>Before week 1</td><td>Goal, audience, and any site you want to reference</td><td>An hour of thinking</td></tr>
<tr><td>Week 1–2</td><td>Logo files, brand colors, existing photography</td><td>A day if it exists, a week if it doesn't</td></tr>
<tr><td>Week 2–3</td><td>Approval of the design, from one named person</td><td>Two days if one person decides</td></tr>
<tr><td>Week 4–5</td><td>Final copy for every section</td><td>The one that stalls projects</td></tr>
<tr><td>Before launch</td><td>Access to the domain, or the decision to register a new one</td><td>Minutes, but frequently forgotten</td></tr>
</table>

<h2>How do you tell if a project is drifting?</h2>

<p><strong>Three signals, and all three show up before the deadline is actually missed.</strong></p>

<ul>
<li><strong>No design approval by the end of week two.</strong> If you have not seen and signed off on screens, development cannot have started. Everything after this slides by the same amount.</li>
<li><strong>Revision rounds with no version number.</strong> When nobody is counting rounds, the project has no end. Agree on how many are included before starting.</li>
<li><strong>«We're waiting on content» appearing twice.</strong> The first time is normal. The second time means nobody owns it, and it will not resolve on its own.</li>
</ul>

<p>The fix for all three is the same and it is boring: one named decision-maker on your side, and a written list of what is due when. Projects with that ship on schedule far more often than projects without it, regardless of who builds them.</p>

<h2>Frequently asked questions</h2>

<h3>How long does it take to build a website from scratch?</h3>
<p>One to two weeks for a landing page, three to six for a corporate site of five to eight sections, four to eight for an online store. The range depends far more on content readiness and feedback speed than on the development itself.</p>

<h3>Can a website be built in a week?</h3>
<p>A landing page, yes, if the copy is written and the photography exists. A full corporate site in a week means using a template with minimal changes, which is a legitimate product but a different one — and it should be priced as such.</p>

<h3>Why do agencies quote such different timelines for the same brief?</h3>
<p>Usually because the briefs are not the same even when they read that way. Custom design versus configured theme, who writes the copy, and whether measurement is included. Ask for those three line items on every quote and most of the spread explains itself.</p>

<h3>How long does 3R Core take?</h3>
<p>Landing page one to two weeks from $850, corporate site three to six weeks from $1,200, online store four to eight weeks from $1,750. Every proposal includes Figma design, responsive development, basic technical SEO, contact form and analytics; the first year includes domain, SSL and hosting.</p>

<p>Planning a build? <a href="/en/services/web-development">See how we build websites for U.S. brands</a>, <a href="/en/pricing">check our published pricing</a>, or <a href="/en/quote">estimate your project</a> before you talk to anyone.</p>
`,
  },
]
