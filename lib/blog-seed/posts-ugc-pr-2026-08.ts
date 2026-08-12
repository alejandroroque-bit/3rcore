/**
 * Blogs en ESPAÑOL para Lima y Perú (locale 'es') sobre la línea nueva del
 * negocio: UGC, influencer marketing y relaciones públicas.
 *
 * Ninguno choca con los ~60 posts ya publicados: el cluster existente cubre
 * web, tiendas, SEO, Google Ads, Meta y branding, pero no tenía una sola pieza
 * sobre creadores ni prensa. Cada post enlaza a su página de servicio, que
 * hasta ahora devolvía 404 en producción.
 */

import type { SeedPost } from "./posts"

const AUTHOR = "Equipo 3R Core"
const IMG = (id: string) => `https://images.unsplash.com/photo-${id}?w=1200&h=630&fit=crop&q=80`

export const UGC_PR_POSTS_2026_08: SeedPost[] = [
  {
    slug: "cuanto-cuesta-contenido-ugc-peru-2026",
    title: "Cuánto cuesta el contenido UGC en Perú 2026: precios reales por tipo de entrega",
    focus_keyword: "cuanto cuesta contenido ugc peru",
    meta_title: "Cuánto cuesta el contenido UGC en Perú 2026 — Precios reales | 3R Core",
    meta_description: "Precios reales de video UGC en Perú 2026: tarifas por pieza, qué encarece el presupuesto, cuánto suman los derechos de uso y cómo se compara producir por lote.",
    excerpt: "En Perú una pieza de UGC va de S/250 a S/1,800 según el creador, los derechos de uso y las variantes. Esta guía desglosa qué compra cada rango y dónde están los costos que nadie cotiza.",
    og_title: "Cuánto cuesta el contenido UGC en Perú 2026",
    og_description: "Tarifas reales por pieza, qué encarece el presupuesto y cuánto suman los derechos de uso.",
    featured_image: IMG("1526628953301-3e589a6a8b74"),
    featured_image_alt: "Creadora grabando un video UGC para una marca en Lima",
    author_name: AUTHOR,
    content: `<p class="lead"><strong>Resumen:</strong> en el Perú, una pieza de <strong>video UGC</strong> cuesta entre <strong>S/250 y S/1,800</strong> según el perfil del creador, los derechos de uso y cuántas variantes entrega. Producir por lote con una agencia baja el costo por pieza a un rango de <strong>S/200 a S/600</strong>, porque la investigación de ángulos, el guion y el casting se reparten entre todas las piezas. Lo que más mueve el precio no es el creador: son los derechos de uso publicitario.</p>

<h2>Por qué la misma solicitud recibe cotizaciones de S/300 y S/1,500</h2>
<p>Si pides cotización de "un video UGC" en cinco lugares, los precios van a estar separados por un factor de cinco. No es que unos cobren de más: es que "un video" significa cosas distintas en cada propuesta, y casi nadie lo desglosa.</p>
<p>Hay cuatro variables detrás de esa diferencia. La primera es <strong>qué incluye la entrega</strong>: un clip crudo no es lo mismo que una pieza editada, subtitulada, cortada por plataforma y con dos versiones de gancho. La segunda son los <strong>derechos de uso</strong>. La tercera, las <strong>rondas de corrección</strong>. Y la cuarta, si el guion lo pone el creador o lo pones tú.</p>

<h2>Tarifas de UGC en Perú, 2026</h2>
<table>
<thead><tr><th>Perfil</th><th>Por pieza terminada</th><th>Qué suele incluir</th></tr></thead>
<tbody>
<tr><td><strong>Creador inicial</strong></td><td>S/250 – S/500</td><td>Un corte, edición básica, uso orgánico. La calidad varía mucho: compras volumen, no consistencia.</td></tr>
<tr><td><strong>Creador intermedio</strong></td><td>S/500 – S/1,000</td><td>Entrega con guion, subtítulos, una o dos variantes de gancho y 3 a 6 meses de uso en pauta.</td></tr>
<tr><td><strong>Creador consolidado</strong></td><td>S/1,000 – S/1,800</td><td>Historial de conversión, entrega rápida y exclusividad negociable.</td></tr>
<tr><td><strong>Producción por lote</strong></td><td>S/200 – S/600</td><td>Costo por pieza en lotes de 8 o más, con ángulos, guion, casting, edición y variantes por plataforma.</td></tr>
</tbody>
</table>
<p>Que el lote salga más barato que un creador inicial sorprende, pero tiene explicación: los ángulos y los guiones se trabajan una sola vez para todo el lote, y grabar varias piezas en bloque reparte el montaje entre todas. La contrapartida es que el lote tiene un mínimo: por debajo de unas ocho piezas la economía deja de funcionar.</p>

<h2>Los derechos de uso: la línea que duplica el presupuesto</h2>
<p>Aquí es donde se lleva la sorpresa quien compra UGC por primera vez. Una cotización de "un video UGC" normalmente cubre <strong>uso orgánico</strong>: el creador publica, tú republicas. En el momento en que quieres poner presupuesto de pauta detrás de esa pieza, estás comprando otra cosa.</p>
<ul>
<li><strong>Solo orgánico</strong> — incluido en la tarifa base.</li>
<li><strong>Uso en pauta, 3 meses</strong> — suma entre 25% y 50% sobre la base.</li>
<li><strong>Uso en pauta, 12 meses</strong> — suma entre 50% y 100%.</li>
<li><strong>Perpetuo, todos los canales</strong> — suma entre 100% y 200%, y muchos creadores no lo venden a ningún precio.</li>
<li><strong>Exclusividad de categoría</strong> — se negocia aparte y suele ser caro: le estás pidiendo que rechace ingresos.</li>
</ul>
<p>El error costoso es comprar solo orgánico, descubrir que la pieza funciona y volver a negociar el uso en pauta <em>después</em>. Acabas de eliminar tu propia posición de negociación. Compra los derechos que podrías necesitar al inicio, cuando todavía nadie sabe si el video sirve.</p>

<h2>Qué encarece una producción, en orden</h2>
<h3>1. Derechos y plazo</h3>
<p>Ya está explicado y es genuinamente el primero. Una pieza de S/600 con 12 meses de uso en pauta sale más barata en la práctica que una de S/400 que solo puedes publicar en orgánico.</p>
<h3>2. Cantidad de entregables por grabación</h3>
<p>Pedir tres versiones del gancho del mismo guion cuesta mucho menos que tres guiones distintos, porque el montaje y el tiempo del creador ya están pagados. Si tu presupuesto es fijo, compra variantes antes que conceptos nuevos: probar ganchos es donde están las mejoras rápidas.</p>
<h3>3. Rondas de corrección</h3>
<p>Las correcciones ilimitadas suenan a protección para el cliente, pero se cotizan dentro del precio. Dos rondas contra un brief escrito es el estándar razonable. Si necesitas más de dos, el problema estaba en el brief.</p>
<h3>4. Plazo de entrega</h3>
<p>Lo normal son de 10 a 15 días hábiles desde el guion aprobado. La entrega urgente en menos de una semana suele cobrar entre 25% y 50% adicional, y casi siempre sale más cara de lo que ahorra porque comprime la etapa de revisión.</p>
<h3>5. Perfil específico</h3>
<p>Un creador con una credencial concreta —una enfermera para un producto de salud, un maestro de obra para herramientas— cuesta más y convierte mejor. Es de los pocos casos donde pagar más se recupera de forma bastante fiable.</p>

<h2>¿Cuántas piezas necesitas realmente?</h2>
<p>El piso honesto son <strong>seis a ocho piezas cubriendo tres o cuatro ángulos distintos</strong>. Por debajo de eso no aprendes nada: si pruebas dos videos y ambos rinden mal, no puedes distinguir si falló el formato o el ángulo.</p>
<p>Para una cuenta que está escalando pauta, el ritmo sostenible es de <strong>8 a 15 piezas nuevas al mes</strong>. El desgaste creativo es real y medible: la misma pieza mostrada a la misma audiencia empeora su costo por resultado en cuestión de semanas.</p>

<h2>Contratar directo o por agencia</h2>
<p>Contratar creadores directo sale más barato por pieza con poco volumen, y más caro con volumen alto, porque el costo de coordinación es real y recae sobre ti: briefear a cada uno, perseguir correcciones y asumir el riesgo si alguien desaparece a mitad del proyecto.</p>
<p>Si estás probando si el UGC funciona para tu producto, ir directo con dos o tres creadores es un experimento barato y sensato. Si ya decidiste que es un canal y necesitas flujo mensual, la coordinación pasa a ser el costo dominante y el lote gana.</p>

<h2>Antes de encargar nada</h2>
<ol>
<li><strong>Decide los derechos que necesitas</strong> antes de pedir cotizaciones, no después.</li>
<li><strong>Escribe los ángulos primero.</strong> Cuatro hipótesis sobre por qué alguien compra, no cuatro ideas estéticas.</li>
<li><strong>Presupuesta un lote, no un video.</strong> Una pieza suelta no produce aprendizaje.</li>
<li><strong>Confirma el formato de entrega.</strong> ¿Clip crudo o pieza terminada, subtitulada y cortada por plataforma?</li>
<li><strong>Limita las correcciones a dos rondas</strong> con el brief por escrito.</li>
<li><strong>Nombra los archivos por ángulo y gancho</strong> para que el reporte diga qué idea ganó, no qué archivo.</li>
</ol>

<h2>Preguntas frecuentes</h2>
<h3>¿El UGC más caro es mejor?</h3>
<p>Por encima del rango inicial, el precio se correlaciona más con los derechos y la fiabilidad que con la calidad en pantalla. Una pieza de S/1,200 no persuade el doble que una de S/600: suele ser la misma persuasión con mejores condiciones de uso y un creador que entrega a tiempo.</p>
<h3>¿Puedo usar el mismo video en Meta y en TikTok?</h3>
<p>Puedes, pero rinde menos. TikTok premia el gancho hablado y el corte rápido; Meta depende más del subtítulo y tolera un desarrollo algo más largo. Conviene entregar cortes por plataforma en lugar de reencuadrar un master.</p>
<h3>¿Hay que declarar que el video es publicidad?</h3>
<p>Si el creador lo publica en su propia cuenta, sí: Indecopi exige que la publicidad sea identificable como tal, y las plataformas ofrecen la etiqueta de colaboración pagada. Si lo corres como anuncio desde tu cuenta de marca, el propio formato de anuncio ya lo identifica.</p>

<h2>Por dónde empezar</h2>
<p>Si estás presupuestando UGC por primera vez, arranca por dos decisiones: los derechos que necesitas y cuántos ángulos quieres probar. Esas dos definen el presupuesto más que cualquier lista de tarifas. Puedes ver <a href="/es/servicios/ugc">cómo producimos contenido UGC</a> o revisar <a href="/es/blogs/cuantos-videos-ugc-necesitas-escalar-meta-ads">cuántas piezas necesita una cuenta que escala</a>.</p>`,
  },
  {
    slug: "como-elegir-influencers-peru-audiencia-real",
    title: "Cómo elegir influencers en Perú sin pagar por seguidores falsos",
    focus_keyword: "como elegir influencers peru",
    meta_title: "Cómo elegir influencers en Perú sin pagar seguidores falsos | 3R Core",
    meta_description: "Cómo revisar la audiencia real de un creador antes de contratarlo: señales de seguidores comprados, qué métricas importan y qué debe decir el contrato.",
    excerpt: "El número de seguidores es el peor criterio de selección disponible. Estas son las señales que revisamos antes de proponer a un creador y las que descartan un perfil de inmediato.",
    og_title: "Cómo elegir influencers en Perú sin pagar seguidores falsos",
    og_description: "Señales de audiencia comprada, métricas que sí importan y qué debe decir el contrato.",
    featured_image: IMG("1611162617213-7d7a39e9b1d7"),
    featured_image_alt: "Análisis de métricas de audiencia de un creador de contenido",
    author_name: AUTHOR,
    content: `<p class="lead"><strong>Resumen:</strong> el número de seguidores es el peor criterio disponible para elegir un creador, y sigue siendo el más usado. Un perfil con 300.000 seguidores cuya audiencia está fuera del Perú no le vende nada a un negocio limeño. Estas son las señales que permiten distinguir una audiencia real de una comprada, y qué debe quedar por escrito antes de pagar.</p>

<h2>El problema no es el fraude, es el criterio</h2>
<p>Se habla mucho de seguidores comprados, pero la mayoría de campañas que fracasan no fueron víctimas de un fraude: contrataron a un creador con audiencia perfectamente real que simplemente no coincidía con su mercado. El fraude es un caso extremo; la falta de criterio es el caso común.</p>
<p>Por eso conviene invertir el orden de la selección. Primero, a quién quieres llegar. Después, qué creadores tienen efectivamente esa audiencia. El número de seguidores entra al final, como restricción de presupuesto, no como criterio de calidad.</p>

<h2>Las señales de una audiencia comprada</h2>
<h3>Proporción de interacción fuera de rango</h3>
<p>La relación entre interacciones y seguidores tiene rangos esperables. En Instagram, un perfil de nicho con audiencia real suele moverse entre 2% y 6%; a mayor tamaño, la proporción baja. Un perfil con 200.000 seguidores y 400 me gusta por publicación —un 0,2%— está fuera de todo rango razonable.</p>
<h3>Inconsistencia entre publicaciones</h3>
<p>Más revelador que el promedio es la dispersión. Una cuenta real tiene publicaciones que rinden mejor y peor, pero dentro de un rango. Una cuenta con interacción comprada por publicación muestra saltos que no se explican por el contenido.</p>
<h3>Comentarios genéricos</h3>
<p>"Qué lindo", "excelente", emojis sueltos, repetidos por cuentas sin foto ni publicaciones. Los comentarios de una audiencia real hacen preguntas, mencionan detalles concretos y discrepan.</p>
<h3>Crecimiento en escalones</h3>
<p>El crecimiento orgánico es irregular pero continuo, con picos cuando algo funciona. El crecimiento comprado se ve como escalones: miles de seguidores en dos días y luego una línea plana.</p>
<h3>Ubicación de la audiencia</h3>
<p>Esta es la que más veces decide. Pide la captura de la audiencia por país y ciudad desde las estadísticas del perfil. Un creador peruano puede tener el 60% de su audiencia fuera del Perú, sobre todo si algún contenido se le viralizó afuera. Es una audiencia perfectamente real y comercialmente inútil para un negocio local.</p>

<h2>Qué pedir antes de contratar</h2>
<ul>
<li><strong>Captura de estadísticas de los últimos 30 días</strong>: alcance, impresiones, visitas al perfil.</li>
<li><strong>Audiencia por país y ciudad.</strong> Si vendes solo en Lima, esto es determinante.</li>
<li><strong>Audiencia por edad y género</strong>, contrastada con tu comprador real.</li>
<li><strong>Retención en videos</strong>, no solo reproducciones. Las reproducciones se inflan solas; la retención no.</li>
<li><strong>Colaboraciones anteriores</strong> y, si es posible, cómo les fue. Un creador que ha convertido antes suele saber por qué.</li>
</ul>
<p>Un creador profesional entrega esto sin problema. La negativa a compartir estadísticas básicas es, por sí sola, motivo suficiente para pasar al siguiente.</p>

<h2>Uno grande o varios medianos</h2>
<p>Depende del objetivo. Para notoriedad de lanzamiento, un perfil grande concentra atención rápido. Para venta, varios creadores medianos suelen rendir mejor: la interacción proporcional es más alta, la tarifa es más negociable y, al repartir el presupuesto, obtienes varias lecturas en lugar de una sola apuesta.</p>
<p>Con presupuesto limitado, el segundo camino casi siempre es el correcto. Con S/6,000 puedes contratar a un creador grande y quedarte sin saber nada si no funciona, o a cuatro medianos y terminar el mes sabiendo cuál repetir.</p>

<h2>Qué debe decir el contrato</h2>
<ol>
<li><strong>Entregables exactos</strong>: cuántas historias, cuántos reels, con qué duración y en qué fechas.</li>
<li><strong>Puntos obligatorios y prohibiciones</strong>: qué debe mencionarse sí o sí y qué no puede decirse.</li>
<li><strong>Revisión previa</strong> y plazo de corrección antes de publicar.</li>
<li><strong>Permanencia</strong>: cuánto tiempo debe quedarse publicado el contenido.</li>
<li><strong>Derechos para pauta</strong>: si vas a convertir la pieza en anuncio, se negocia aquí y no después.</li>
<li><strong>Exclusividad</strong>: si no puede promocionar a un competidor, por cuánto tiempo y en qué categoría.</li>
<li><strong>Etiqueta de publicidad</strong>: la mención debe ser identificable como comercial.</li>
</ol>

<h2>El error de fondo: elegir antes de decidir qué se mide</h2>
<p>La selección más cuidadosa del mundo no sirve si nadie definió cómo se va a saber si funcionó. Antes de contactar al primer creador tiene que estar decidido qué cuenta como resultado —venta, registro, visita cualificada— y con qué mecanismo se va a atribuir: enlace con parámetros propios por creador, código de descuento nominal y pregunta de origen en el formulario.</p>
<p>Sin eso, al cierre de la campaña vas a tener alcance y ninguna manera de decidir a quién repetir. Lo desarrollamos en <a href="/es/blogs/medir-campanas-influencers-peru-atribucion">cómo medir una campaña con influencers</a>.</p>

<h2>Preguntas frecuentes</h2>
<h3>¿Cuánto cobra un influencer en el Perú?</h3>
<p>El rango es amplio porque la variable no es el seguidor sino el entregable. Un creador mediano con audiencia peruana real suele cerrar un paquete de historia más reel entre S/400 y S/2,500 según nicho y exclusividad. Lo que conviene presupuestar no es una acción suelta sino una campaña con varios creadores.</p>
<h3>¿Sirve el intercambio por producto?</h3>
<p>Funciona con creadores en crecimiento y productos de ticket alto o deseables. Deja de funcionar en cuanto el creador vive de esto. Si lo haces, que sea con contrato igual: los entregables por intercambio se incumplen más que los pagados.</p>
<h3>¿Y si el creador publica algo que no acordamos?</h3>
<p>El contrato debe contemplar revisión previa y plazo de corrección. Si la pieza publicada no cumple los puntos obligatorios, se pide la corrección o la republicación, y si no ocurre se retiene el pago según lo pactado.</p>

<h2>Cierre</h2>
<p>Elegir bien a un creador es un trabajo de revisión, no de intuición: audiencia por ubicación, interacción proporcional, calidad de los comentarios y patrón de crecimiento. Si quieres que armemos la selección y la medición desde el inicio, revisa <a href="/es/servicios/influencer-marketing">cómo gestionamos campañas con creadores</a>.</p>`,
  },
  {
    slug: "medir-campanas-influencers-peru-atribucion",
    title: "Cómo medir una campaña con influencers en Perú: atribución que sí funciona",
    focus_keyword: "medir campaña influencers atribución",
    meta_title: "Cómo medir campañas con influencers en Perú — Atribución | 3R Core",
    meta_description: "Enlaces con UTM, códigos nominales y pregunta de origen: las tres capas de atribución para saber qué creador vendió, con sus límites explicados.",
    excerpt: "El 90% de las campañas con creadores termina sin saber cuánto vendió cada uno. No es un problema de herramientas: es que nadie montó la medición antes de publicar.",
    og_title: "Cómo medir una campaña con influencers en Perú",
    og_description: "Las tres capas de atribución que permiten saber qué creador vendió, y sus límites.",
    featured_image: IMG("1551288049-bebda4e38f71"),
    featured_image_alt: "Panel de métricas de una campaña con creadores",
    author_name: AUTHOR,
    content: `<p class="lead"><strong>El problema:</strong> la mayoría de campañas con creadores termina con un reporte de alcance y visualizaciones, y sin una sola cifra que diga cuántas ventas produjo cada creador. No es una limitación técnica. Es que la medición se monta <em>después</em> de publicar, cuando ya es imposible. Estas son las tres capas que hay que dejar listas antes de que el primer creador suba nada.</p>

<h2>Por qué el alcance no sirve para decidir</h2>
<p>Un reporte que dice "esta campaña alcanzó a 480.000 personas" no permite tomar ninguna decisión. No dice a quién repetir, no dice qué ángulo funcionó y no dice si el dinero volvió. Es una cifra que suena a resultado y no lo es.</p>
<p>La pregunta que sí sirve es: <strong>¿cuánto costó cada venta, creador por creador?</strong> Con esa cifra sabes a quién recontratar, a quién subirle presupuesto y a quién no volver a llamar. Sin ella, la campaña siguiente se decide igual que la primera: por intuición.</p>

<h2>Las tres capas de atribución</h2>
<h3>Capa 1: enlace con parámetros UTM por creador</h3>
<p>Cada creador recibe su propio enlace con parámetros. Algo así:</p>
<pre><code>https://tusitio.com/?utm_source=instagram&utm_medium=influencer&utm_campaign=lanzamiento_agosto&utm_content=nombre_creador</code></pre>
<p>Con eso, Google Analytics 4 separa las sesiones y las conversiones por creador sin ambigüedad. Es la capa más precisa de las tres, y la más frágil: solo captura al usuario que hace clic en ese enlace concreto en ese momento.</p>
<p>Detalle operativo: en historias de Instagram el enlace se pone en el sticker; en publicaciones sin enlace clicable, el creador lo deja en su biografía durante la campaña. Si el creador tiene un agregador de enlaces, asegúrate de que el tuyo conserve los parámetros.</p>
<h3>Capa 2: código de descuento nominal</h3>
<p>Un código por creador, con su nombre. Captura al usuario que vio la publicación, no hizo clic y volvió después por su cuenta, que es un porcentaje alto del total.</p>
<p>Dos advertencias. Primera: el código introduce un descuento que reduce tu margen, así que el cálculo de rentabilidad debe hacerse sobre el ingreso neto. Segunda: los códigos se filtran a sitios de cupones, y a partir de cierto volumen empiezas a atribuir a un creador ventas que no generó. Para campañas de varios meses conviene rotar códigos.</p>
<h3>Capa 3: pregunta de origen</h3>
<p>Un campo en el formulario o en el checkout: "¿cómo nos conociste?". Es la capa menos precisa —mucha gente no responde o responde mal— pero es la única que captura al usuario que vio el contenido, buscó tu marca en Google días después y compró directo.</p>
<p>Esa ruta es más común de lo que parece, y es exactamente la que hace que las campañas con creadores parezcan peores de lo que son.</p>

<h2>Por qué hacen falta las tres</h2>
<p>Ninguna capa por separado captura el comportamiento real. El usuario ve una historia en el celular, no hace clic, se acuerda dos días después, busca la marca en Google desde otro dispositivo y compra. La capa 1 no lo ve, la capa 2 tampoco si no usó código, y solo la capa 3 lo recoge, y únicamente si responde.</p>
<p>Combinadas dan una atribución imperfecta pero suficiente para decidir a quién repetir, que es para lo que sirve. Buscar precisión absoluta en atribución de influencers es perseguir algo que no existe.</p>

<h2>Qué instalar antes de empezar</h2>
<ol>
<li><strong>GA4 con eventos de conversión definidos</strong> —compra, formulario enviado, clic a WhatsApp— y no solo páginas vistas.</li>
<li><strong>Google Tag Manager</strong> para no depender de desarrollo cada vez que haya que agregar un evento.</li>
<li><strong>Seguimiento del clic a WhatsApp.</strong> En el Perú una parte grande del contacto pasa por ahí, y si no se mide parece que la campaña no produjo nada.</li>
<li><strong>Un enlace UTM por creador</strong>, generados y documentados antes de firmar.</li>
<li><strong>Códigos nominales</strong> cargados en la tienda.</li>
<li><strong>Campo de origen</strong> en el formulario o checkout.</li>
</ol>
<p>Si el negocio no tiene esto montado, ese es el primer trabajo, antes de contratar a nadie. Lanzar una campaña sobre una medición rota es gastar dos veces.</p>

<h2>Cómo leer el resultado</h2>
<p>Al cierre, arma una tabla con una fila por creador: lo que se le pagó, sesiones atribuidas, conversiones por enlace, conversiones por código, menciones en la pregunta de origen y costo por resultado.</p>
<table>
<thead><tr><th>Creador</th><th>Pago</th><th>Conversiones atribuidas</th><th>Costo por conversión</th><th>Decisión</th></tr></thead>
<tbody>
<tr><td>Creador A</td><td>S/1,200</td><td>34</td><td>S/35</td><td>Repetir y subir presupuesto</td></tr>
<tr><td>Creador B</td><td>S/800</td><td>11</td><td>S/73</td><td>Repetir con otro ángulo</td></tr>
<tr><td>Creador C</td><td>S/2,000</td><td>6</td><td>S/333</td><td>No repetir</td></tr>
</tbody>
</table>
<p>Ese cuadro es el entregable real de la campaña. Todo lo demás —capturas de historias, alcance estimado— es material de respaldo.</p>

<h2>Cuándo leer</h2>
<p>El pico de tráfico ocurre en las primeras 48 horas de cada publicación, pero la lectura útil se hace a las tres o cuatro semanas, cuando ya publicaron todos y hay con qué comparar. Cerrar antes lleva a descartar creadores que solo necesitaban una segunda publicación: la primera mención de un creador rinde casi siempre peor que la segunda, porque su audiencia todavía no asocia la marca con él.</p>

<h2>El paso que casi nadie da</h2>
<p>Las piezas que rindieron bien no deberían morir cuando termina la campaña. Con los derechos de uso negociados desde el contrato, esas piezas se convierten en anuncios y se sostienen con presupuesto de pauta durante meses. Ahí es donde una campaña con creadores deja de ser un pico de un día.</p>
<p>Esa conversión requiere haberlo previsto en el contrato. Es la razón por la que insistimos en negociar los derechos para pauta al inicio y no cuando ya se sabe qué funcionó.</p>

<h2>Cierre</h2>
<p>Medir una campaña con creadores no es complicado, pero es imposible si se intenta después. Tres capas de atribución, montadas antes de publicar, convierten un reporte de alcance en una decisión de negocio. Si quieres que lo montemos, revisa <a href="/es/servicios/influencer-marketing">cómo gestionamos campañas con creadores</a> o antes de eso <a href="/es/blogs/como-elegir-influencers-peru-audiencia-real">cómo elegimos a los perfiles</a>.</p>`,
  },
  {
    slug: "que-es-noticia-en-tu-empresa-relaciones-publicas",
    title: "Qué es noticia en tu empresa: guía práctica de relaciones públicas",
    focus_keyword: "relaciones publicas empresas peru",
    meta_title: "Qué es noticia en tu empresa — Guía de relaciones públicas | 3R Core",
    meta_description: "Por qué los medios ignoran las notas de prensa corporativas y cómo encontrar dentro de tu negocio el ángulo que un periodista sí publicaría.",
    excerpt: "Que lances un producto no es noticia. Un dato propio que revele algo del mercado, sí. Esta es la diferencia entre lo que la empresa quiere contar y lo que un medio publica.",
    og_title: "Qué es noticia en tu empresa",
    og_description: "Cómo encontrar el ángulo que un periodista sí publicaría, con ejemplos.",
    featured_image: IMG("1504711434969-e33886168f5c"),
    featured_image_alt: "Redacción de un medio de comunicación trabajando",
    author_name: AUTHOR,
    content: `<p class="lead"><strong>La idea central:</strong> un periodista no publica porque tu producto sea bueno. Publica porque tiene una historia que le interesa a su audiencia. La mayoría de notas de prensa corporativas se ignoran no por estar mal escritas, sino porque cuentan lo que la empresa quiere decir en lugar de lo que el medio necesita. Encontrar la diferencia es casi todo el trabajo.</p>

<h2>Por qué se ignora tu nota de prensa</h2>
<p>Una redacción recibe decenas de correos al día. El editor decide en segundos, y la pregunta que se hace no es "¿es interesante esta empresa?" sino "¿esto le importa a mi lector?". La mayoría de notas corporativas responden que no.</p>
<p>El patrón típico: "La empresa X anuncia el lanzamiento de su nueva línea de productos, reafirmando su compromiso con la innovación y la excelencia". Ahí no hay noticia. Hay un comunicado interno enviado a un tercero.</p>

<h2>Lo que sí es noticia</h2>
<h3>Un dato propio que revele algo del mercado</h3>
<p>Es el ángulo más fuerte y el más desaprovechado. Tu empresa tiene datos que nadie más tiene: qué se vende más, en qué zonas, en qué meses, cómo cambió el ticket promedio. Un distribuidor sabe qué categorías crecen antes de que lo diga cualquier estudio.</p>
<p>Convertir eso en un pequeño informe con cifras verificables y un método explicado te transforma de "empresa que quiere aparecer" en "fuente que aporta información". Es la diferencia entre pedir cobertura y ser citado.</p>
<h3>Un hito verificable con contexto</h3>
<p>Abrir una planta no es noticia por sí solo. Abrir la primera planta de su tipo en una región, o generar cierto número de empleos en una zona concreta, sí puede serlo. La cifra y el contexto son lo que lo hace publicable.</p>
<h3>Una postura discutible</h3>
<p>Un directivo que sostiene algo con lo que se puede discrepar —que cierta práctica del sector está mal, que una tendencia es un espejismo— genera cobertura porque genera conversación. Requiere estar dispuesto a defenderlo, que es exactamente por lo que pocas empresas lo hacen.</p>
<h3>Una historia humana concreta</h3>
<p>Una persona con nombre y una situación específica funciona mejor que cualquier cifra agregada. El cliente que resolvió un problema, el trabajador con una trayectoria inusual, el origen real de la empresa cuando tiene algo particular.</p>
<h3>Reaccionar a algo que ya es noticia</h3>
<p>Cuando sale una norma nueva, un dato de inflación o un hecho que afecta a tu sector, los medios buscan a alguien que lo explique. Estar disponible ese mismo día, con una posición clara, es la forma más rápida de aparecer. La ventana dura horas.</p>

<h2>Cómo saber si tu tema es publicable</h2>
<p>Tres preguntas honestas:</p>
<ol>
<li><strong>¿Le interesaría a alguien que no trabaja en tu empresa ni te conoce?</strong> Si la respuesta depende de que la persona ya sea cliente, no es noticia.</li>
<li><strong>¿Podrías escribir el titular sin usar el nombre de tu empresa?</strong> Si el titular es "Empresa X lanza Y", no hay historia; hay un anuncio.</li>
<li><strong>¿Hay una cifra, un cambio o un conflicto?</strong> Las notas que se publican casi siempre tienen al menos uno de los tres.</li>
</ol>

<h2>El mapa de medios: relevancia, no popularidad</h2>
<p>El instinto es apuntar al medio más grande. Casi siempre es el error. Para una empresa B2B, una publicación sectorial que leen doscientos decisores del rubro puede generar más oportunidades comerciales que un titular masivo que no lee ninguno de ellos.</p>
<p>Ordena los medios por quién los lee, y dentro de cada medio identifica la <strong>sección y el periodista</strong> que cubre tu tema. Enviar a un correo general es la vía más rápida al archivo.</p>

<h2>Errores que cuestan cobertura</h2>
<ul>
<li><strong>Envío masivo con copia oculta.</strong> Se nota y se descarta.</li>
<li><strong>Adjuntos pesados sin contexto.</strong> El cuerpo del correo debe contener la historia; el material va enlazado.</li>
<li><strong>Asunto genérico.</strong> "Nota de prensa" no dice nada. El asunto debería ser el titular.</li>
<li><strong>Pedir revisar el texto antes de publicar.</strong> Se puede pedir revisar citas técnicas; pedir aprobar la nota es pedir publicidad.</li>
<li><strong>No hacer seguimiento.</strong> La mayoría de coberturas se consiguen en el segundo o tercer contacto.</li>
<li><strong>Insistir de más.</strong> Dos seguimientos espaciados, y luego se deja ir.</li>
</ul>

<h2>Qué aporta al posicionamiento</h2>
<p>Además de la credibilidad, la cobertura tiene dos efectos en buscadores. El primero es el enlace: una mención en un medio con autoridad es de los enlaces más difíciles de conseguir y de los que más pesan. El segundo es la marca: cuando la gente empieza a buscar tu nombre después de leerte, Google interpreta esas búsquedas como señal de entidad reconocida, y eso beneficia al dominio entero.</p>
<p>Por eso las relaciones públicas rinden distinto a la publicidad: la pauta deja de existir cuando dejas de pagarla, y la cobertura sigue apareciendo en los resultados durante años.</p>

<h2>Cuánto tarda</h2>
<p>La primera cobertura suele llegar entre la tercera y la sexta semana desde que los materiales están listos. Funciona por acumulación: la segunda mención cuesta menos esfuerzo que la primera porque el periodista ya te conoce, y a partir del tercer mes empiezan a llegar solicitudes en lugar de solo salir propuestas.</p>
<p>Quien espera resultado en dos semanas suele abandonar justo antes de que empiece a funcionar.</p>

<h2>Preguntas frecuentes</h2>
<h3>¿Se puede garantizar salir en un medio?</h3>
<p>No, y conviene desconfiar de quien lo garantice. Lo que se garantiza es el trabajo: mapa de medios, ángulos, materiales, gestión y seguimiento. La decisión de publicar es del medio. Quien garantiza una portada está vendiendo espacio pagado, que es otro producto y con mucho menos valor de credibilidad.</p>
<h3>¿Conviene pagar por publicaciones?</h3>
<p>El contenido pagado tiene su lugar, pero no sustituye a la cobertura ganada: el lector distingue, y muchos medios lo etiquetan como publirreportaje. Si el objetivo es credibilidad, el espacio pagado rinde poco.</p>
<h3>¿Sirve para una empresa pequeña?</h3>
<p>Sí, y a veces mejor: las empresas pequeñas suelen tener historias de origen más concretas y acceso directo a sus datos. Lo que cambia es el mapa de medios, que será sectorial o regional en lugar de nacional.</p>

<h2>Cierre</h2>
<p>La pregunta con la que empieza todo no es "cómo salgo en los medios" sino "qué hay dentro de mi negocio que un medio querría publicar". Casi siempre hay algo, y casi nunca es lo que la empresa tenía pensado contar. Si quieres que lo busquemos juntos, revisa <a href="/es/servicios/relaciones-publicas">cómo trabajamos relaciones públicas</a>.</p>`,
  },
  {
    slug: "cuantos-videos-ugc-necesitas-escalar-meta-ads",
    title: "Cuántos videos necesitas al mes para escalar en Meta Ads sin quemarte",
    focus_keyword: "cuantos creativos meta ads",
    meta_title: "Cuántos creativos necesitas al mes para escalar en Meta Ads | 3R Core",
    meta_description: "El desgaste creativo explicado con números: cuántas piezas nuevas necesita una cuenta según su inversión, cómo detectar la fatiga y qué renovar primero.",
    excerpt: "Cuando una cuenta se estanca, casi nunca es la segmentación: es que la creatividad se desgastó. Cuántas piezas nuevas necesitas al mes según lo que inviertes.",
    og_title: "Cuántos creativos necesitas al mes para escalar en Meta Ads",
    og_description: "El desgaste creativo con números: cuántas piezas nuevas necesita tu cuenta.",
    featured_image: IMG("1611162616475-46b635cb6868"),
    featured_image_alt: "Panel de campañas publicitarias en redes sociales",
    author_name: AUTHOR,
    content: `<p class="lead"><strong>Resumen:</strong> cuando una cuenta de Meta Ads deja de escalar, el cuello de botella rara vez es la segmentación —hace años que el algoritmo la resuelve mejor que nosotros—. Es el <strong>desgaste creativo</strong>. Como referencia práctica: una cuenta que invierte S/5,000 al mes necesita entre 4 y 6 piezas nuevas mensuales; una que invierte S/30,000 necesita entre 12 y 20. Por debajo de ese ritmo, el costo por resultado sube solo.</p>

<h2>Qué es el desgaste creativo y por qué es inevitable</h2>
<p>El desgaste ocurre cuando tu audiencia ya vio el anuncio suficientes veces como para dejar de reaccionar. No es que la pieza empeore: es que el público al que le hablaba ya respondió, y lo que queda es gente que ya la ignoró antes.</p>
<p>Se detecta con una métrica concreta, la <strong>frecuencia</strong>: cuántas veces vio el anuncio la misma persona en promedio. Por encima de 3 o 4 en audiencias frías, el rendimiento normalmente ya está cayendo. En remarketing se tolera más porque la audiencia es pequeña y está caliente.</p>
<p>Es inevitable por aritmética. Si tu audiencia potencial en el Perú son 500.000 personas y estás invirtiendo lo suficiente para alcanzar a 200.000 al mes, en dos meses ya viste a casi todos. La única salida es contenido nuevo.</p>

<h2>Cuántas piezas según tu inversión</h2>
<table>
<thead><tr><th>Inversión mensual</th><th>Piezas nuevas al mes</th><th>Ángulos distintos</th></tr></thead>
<tbody>
<tr><td>Hasta S/3,000</td><td>2 – 4</td><td>2</td></tr>
<tr><td>S/3,000 – S/10,000</td><td>4 – 8</td><td>3</td></tr>
<tr><td>S/10,000 – S/30,000</td><td>8 – 15</td><td>4 – 5</td></tr>
<tr><td>Más de S/30,000</td><td>15 – 25</td><td>5 – 7</td></tr>
</tbody>
</table>
<p>Estos rangos son orientativos y dependen del tamaño de tu mercado: un negocio local en una sola ciudad agota su audiencia más rápido que uno que vende a nivel nacional, así que necesita renovar antes.</p>

<h2>Piezas nuevas no siempre significa grabar de nuevo</h2>
<p>Aquí está el ahorro que casi nadie aprovecha. Una "pieza nueva" para el algoritmo es cualquier combinación que no haya visto antes, y eso incluye variantes que salen del mismo material grabado:</p>
<ul>
<li><strong>Cambiar el gancho.</strong> Los primeros tres segundos son la mayor parte del rendimiento. Un mismo cuerpo con cuatro aperturas distintas son cuatro pruebas reales.</li>
<li><strong>Cambiar la duración.</strong> Una versión de 15 segundos y otra de 40 rinden distinto y compiten por audiencias distintas.</li>
<li><strong>Con y sin subtítulos</strong>, o con subtítulos en distinto estilo.</li>
<li><strong>Cambiar el cierre y la llamada a la acción.</strong></li>
<li><strong>Reordenar el cuerpo.</strong> Empezar por la demostración en lugar del testimonio cambia la pieza por completo.</li>
</ul>
<p>De una sola grabación bien planificada salen tranquilamente entre seis y diez variantes utilizables. Por eso conviene pedir el material en crudo al producir: te permite generar variantes durante meses sin volver a grabar.</p>

<h2>Ángulos: lo que de verdad hay que renovar</h2>
<p>Una variante de gancho estira la vida de un ángulo. Pero cuando el ángulo entero se agota, ninguna edición lo salva. Un ángulo es la razón por la que alguien compra, y conviene tener varios en rotación:</p>
<ul>
<li><strong>Problema:</strong> nombrar la molestia concreta que resuelves.</li>
<li><strong>Objeción:</strong> atacar de frente la razón por la que no compran ("es caro", "no funciona para mí").</li>
<li><strong>Comparación:</strong> frente a la alternativa o frente a no hacer nada.</li>
<li><strong>Demostración:</strong> el producto funcionando, sin discurso.</li>
<li><strong>Prueba social:</strong> alguien real contando su experiencia.</li>
<li><strong>Urgencia o contexto:</strong> por qué ahora y no en tres meses.</li>
</ul>
<p>Una cuenta sana tiene tres o cuatro ángulos vivos a la vez y va rotando cuál recibe más presupuesto según rendimiento.</p>

<h2>Cómo saber que la creatividad se está desgastando</h2>
<ol>
<li><strong>La frecuencia sube</strong> por encima de 3 en audiencias frías.</li>
<li><strong>El CTR baja</strong> de forma sostenida durante dos semanas con la misma segmentación.</li>
<li><strong>El costo por resultado sube</strong> sin que haya cambiado nada más.</li>
<li><strong>La retención a 3 segundos cae:</strong> es la señal más temprana de todas.</li>
<li><strong>Las piezas nuevas superan a las viejas en la primera semana</strong> sin ser mejores en nada evidente.</li>
</ol>
<p>La retención a 3 segundos es la que hay que mirar primero, porque se mueve antes que el costo por resultado. Cuando el CPA ya subió, llevas semanas perdiendo dinero.</p>

<h2>Cómo organizar la producción para sostener el ritmo</h2>
<p>Producir de a una pieza cuando hace falta es la forma más cara. El esquema que funciona es <strong>por lote y con calendario</strong>: un lote mensual con sus ángulos definidos, grabado en bloque, del que salen las variantes durante el mes.</p>
<p>Un mes tipo: se graba en la primera semana, se entregan las piezas en la segunda, se lanzan y se leen resultados en la tercera y cuarta, y esa lectura define los ángulos del lote siguiente. Así cada lote se construye sobre lo que ya ganó en lugar de empezar de cero.</p>
<p>Lo que ordena esto es nombrar los archivos por ángulo y gancho. Si tu carpeta tiene "video_1_final_v2.mp4", el reporte no te va a decir qué idea funcionó.</p>

<h2>Preguntas frecuentes</h2>
<h3>¿Y si mi presupuesto no alcanza para tantas piezas?</h3>
<p>Reduce ángulos antes que variantes. Dos ángulos bien trabajados con cuatro variantes cada uno rinden más que ocho ángulos con una sola versión, porque las variantes te enseñan qué gancho retiene.</p>
<h3>¿Sirve reciclar creatividades antiguas?</h3>
<p>Sí, después de un descanso. Una pieza que se desgastó hace seis meses puede volver a funcionar, sobre todo si la audiencia creció desde entonces. Vuelve a subirla como pieza nueva, no reactives la antigua: el historial de rendimiento arrastra.</p>
<h3>¿Las imágenes fijas todavía funcionan?</h3>
<p>Funcionan en remarketing y en catálogos, y son baratas de producir en volumen. Para audiencias frías en 2026, el video vertical con cara y voz rinde consistentemente mejor.</p>

<h2>Cierre</h2>
<p>Escalar en Meta no es cuestión de encontrar la segmentación correcta: es sostener un flujo de creatividad que impida que la cuenta se apague sola. Si quieres que produzcamos ese flujo por lote, revisa <a href="/es/servicios/ugc">cómo producimos contenido UGC</a> o <a href="/es/blogs/cuanto-cuesta-contenido-ugc-peru-2026">cuánto cuesta un lote en el Perú</a>.</p>`,
  },
]
