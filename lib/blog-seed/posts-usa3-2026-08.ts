/**
 * La página /en/ecommerce-development prometía "we compare all three in depth
 * in our guide" y enlazaba a la comparativa peruana, que en /en devolvía 307
 * hacia el español. En vez de esconder el enlace, se escribe la guía para el
 * mercado estadounidense: pasarelas, impuestos por estado y costes en dólares.
 */

import type { SeedPost } from "./posts"

const AUTHOR = "3R Core Team"
const IMG = (id: string) => `https://images.unsplash.com/photo-${id}?w=1200&h=630&fit=crop&q=80`

export const USA3_POSTS_2026_08: SeedPost[] = [
  {
    slug: "shopify-vs-woocommerce-for-us-brands",
    locale: "en",
    title: "Shopify vs WooCommerce for U.S. Brands: Real Costs and the Deciding Factors",
    focus_keyword: "shopify vs woocommerce",
    meta_title: "Shopify vs WooCommerce for U.S. Brands — Real Costs | 3R Core",
    meta_description: "Total cost of ownership over three years, sales tax handling, payment processing fees, and the three questions that actually decide which platform fits your store.",
    excerpt: "The comparison usually stops at monthly fees, which is the smallest difference. Here's the three-year cost, how each handles U.S. sales tax, and what actually decides it.",
    og_title: "Shopify vs WooCommerce for U.S. Brands",
    og_description: "Three-year cost of ownership, sales tax, processing fees and the deciding factors.",
    featured_image: IMG("1556742049-0cfed4f6a45d"),
    featured_image_alt: "Comparing e-commerce platforms for an online store",
    author_name: AUTHOR,
    content: `<p class="lead"><strong>The short version:</strong> Shopify costs more per month and less in total for most stores under a few million in revenue, because the hosting, security, PCI compliance and platform maintenance you'd otherwise pay for separately are included. WooCommerce wins when you need something the platform won't let you do, or when your product model doesn't fit standard e-commerce. The monthly fee — the thing most comparisons lead with — is the smallest difference between them.</p>

<h2>Three-year cost of ownership</h2>
<p>Comparing $39/month against "free" is where most people go wrong. WooCommerce is free software with paid everything-else. Here's a realistic build for a U.S. store doing moderate volume:</p>
<table>
<thead><tr><th></th><th>Shopify</th><th>WooCommerce</th></tr></thead>
<tbody>
<tr><td>Platform license</td><td>$39–$399/mo</td><td>$0</td></tr>
<tr><td>Hosting</td><td>Included</td><td>$30–$250/mo (managed WooCommerce)</td></tr>
<tr><td>SSL, CDN, backups</td><td>Included</td><td>Usually in managed hosting</td></tr>
<tr><td>PCI compliance</td><td>Handled</td><td>Your responsibility</td></tr>
<tr><td>Essential extensions</td><td>$0–$150/mo</td><td>$300–$900/yr (subscriptions, bookings, tax, shipping)</td></tr>
<tr><td>Theme</td><td>$0–$400 once</td><td>$0–$120 once</td></tr>
<tr><td>Maintenance / updates</td><td>Automatic</td><td>$50–$200/mo or your own time</td></tr>
<tr><td><strong>Realistic 3-year total</strong></td><td><strong>$4,000–$9,000</strong></td><td><strong>$5,000–$14,000</strong></td></tr>
</tbody>
</table>
<p>The WooCommerce range is wider because it depends entirely on how much you do yourself. A technically capable owner running a simple catalog on decent managed hosting lands at the low end. A store needing subscriptions, complex shipping rules and tax automation ends up buying four or five extensions and paying someone to keep them from conflicting after updates.</p>
<p>The line that surprises people is <strong>maintenance</strong>. On WooCommerce, plugin and core updates are your problem, and they break things. Budget for it or you'll pay for it in downtime at the worst moment.</p>

<h2>Payment processing: read this before deciding</h2>
<p>This is where the platform choice has a direct, permanent effect on margin.</p>
<p><strong>Shopify Payments</strong> processes at roughly 2.4–2.9% + 30¢ depending on plan. If you use an external gateway instead, Shopify adds a <strong>transaction fee of 0.5–2%</strong> on top of what your processor charges. For a store doing $50,000/month, that surcharge alone can be several hundred dollars monthly — so if you have a negotiated processing rate elsewhere, run the math before assuming you'll keep it.</p>
<p><strong>WooCommerce</strong> has no platform transaction fee. You pay whatever your gateway charges — Stripe and PayPal both at roughly 2.9% + 30¢ standard, and negotiable at volume. For high-volume stores with leverage to negotiate rates, this is a genuine and compounding advantage.</p>
<p>The crossover is usually somewhere past $100,000/month in revenue, and it depends more on your negotiated rate than on the platforms themselves.</p>

<h2>U.S. sales tax: the one nobody mentions</h2>
<p>Since the <em>Wayfair</em> decision, economic nexus means you may owe sales tax in states where you have no physical presence, based purely on sales volume or transaction count into that state. Thresholds vary by state and change.</p>
<p><strong>Shopify</strong> includes sales tax calculation and will flag where you may have crossed nexus thresholds. It calculates and collects; it does not file returns for you.</p>
<p><strong>WooCommerce</strong> needs an extension for the same job — typically a paid service billed per transaction or per month.</p>
<p>Neither files your returns. Both leave you responsible for registration and remittance. What Shopify buys you here is that the calculation is maintained by someone else as rates change, which is real value for a multi-state seller and irrelevant if you sell in one state.</p>

<h2>Where each one genuinely wins</h2>

<h3>Shopify is the right answer when</h3>
<ul>
<li>You want to be selling in weeks, not months.</li>
<li>Nobody on the team wants to own server maintenance or plugin conflicts.</li>
<li>You sell standard physical products with variants.</li>
<li>You're multi-state and want tax calculation handled.</li>
<li>You'll use their POS for in-person sales.</li>
<li>Uptime during a traffic spike matters more than control.</li>
</ul>

<h3>WooCommerce is the right answer when</h3>
<ul>
<li>Your product model is unusual — custom quoting, complex configurators, B2B pricing tiers per customer, mixed rental and sale.</li>
<li>You already run WordPress and content is a major acquisition channel.</li>
<li>You need to own the data and the code outright, without platform terms.</li>
<li>You're at volume where Shopify's transaction fees exceed what maintenance costs.</li>
<li>You need an integration nobody built an app for.</li>
</ul>

<h2>The three questions that actually decide it</h2>
<ol>
<li><strong>Who maintains this in eighteen months?</strong> If the answer is "nobody in particular," choose Shopify. Unmaintained WooCommerce installs become security problems, and it's the single most common way these projects go wrong.</li>
<li><strong>Does your product fit a standard catalog?</strong> If yes, both work and Shopify is faster. If your pricing depends on the customer, the configuration or a quote, WooCommerce bends where Shopify makes you fight it.</li>
<li><strong>What's your processing volume?</strong> Below roughly $100k/month, the fee difference rarely justifies the maintenance burden. Above it, run the actual numbers.</li>
</ol>

<h2>What doesn't matter as much as you think</h2>
<p><strong>"SEO is better on WordPress."</strong> This was true years ago and isn't anymore. Shopify handles technical SEO fine; its historical limitation was URL structure, which matters far less than content and site speed. Both platforms rank fine when the work is done.</p>
<p><strong>"You don't own your store on Shopify."</strong> You own your data and can export it. What you don't own is the platform, which is the thing you're deliberately paying someone else to run.</p>
<p><strong>Theme selection.</strong> Both have thousands. Neither pool is meaningfully better, and a custom front end is possible on either.</p>

<h2>Migration, honestly</h2>
<p>Moving between them is a real project, not a weekend. Products, customers, orders and URL structure all have to move, and the redirect map is where most migrations lose their rankings — every old URL needs a permanent redirect to its new equivalent, and "close enough" costs traffic that takes months to recover.</p>
<p>Budget four to eight weeks for a catalog of any size, and don't migrate during your peak season. If the current platform works and the only complaint is the monthly fee, the migration will cost more than the difference for years.</p>

<h2>What we'd tell you if you asked</h2>
<p>For most U.S. brands starting or replatforming today, Shopify is the lower-risk choice — not because it's better software, but because the failure mode is milder. A Shopify store that nobody maintains keeps taking orders. A WooCommerce store that nobody maintains eventually breaks or gets compromised.</p>
<p>Choose WooCommerce deliberately, when there's something specific you need that the other won't do. That's a good reason. "It's free" is not.</p>

<p>We build on both and will tell you which fits before quoting either. <a href="/en/ecommerce-development">See how we build online stores</a>, or read <a href="/en/blogs/marketing-budget-for-small-business">how to size the budget around it</a>.</p>`,
  },
]
