from playwright.sync_api import sync_playwright
with sync_playwright() as p:
    b=p.chromium.connect_over_cdp("http://127.0.0.1:9223")
    pg=b.contexts[0].new_page()
    try:
        pg.goto("https://3rcore.com/es/blogs/tendencias-en-diseno-de-paginas-web-para-2024", wait_until="load", timeout=60000)
        pg.wait_for_timeout(3500)
        d=pg.evaluate("""()=>[...document.images].filter(i=>!i.getAttribute('alt')).map(i=>({
             src:(i.currentSrc||i.src).slice(0,110),
             donde:(i.closest('article')?'artículo':i.closest('footer')?'pie':i.closest('header,nav')?'cabecera':'otro'),
             cls:i.className.slice(0,50)}))""")
        print('imágenes sin alt:',len(d))
        for x in d: print('  ',x['donde'],'|',x['cls'],'|',x['src'])
        r=pg.evaluate("()=>[...document.images].filter(i=>i.complete&&i.naturalWidth===0).length")
        print('rotas:',r)
    finally: pg.close()
