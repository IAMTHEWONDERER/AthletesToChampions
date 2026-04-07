import re

with open("src/App.tsx", "r", encoding="utf-8") as f:
    text = f.read()

# I want to inject <Hero /> and remove the old <section id="hero">
old_hero_match = re.search(r'<!--  2. HERO  -->\s*<section id="hero">.*?</section>', text, re.DOTALL)
if old_hero_match:
    replaced = text[:old_hero_match.start()] + '</section>\n`;\nconst REST_HTML_PART_2 = `\n' + text[old_hero_match.end():]
    
    # Also I need to modify the file to import Hero and put it between the two DangerouslySetInnerHtmls
    
    if "import Hero from" not in replaced:
        replaced = 'import Hero from "./Hero";\n' + replaced
    
    # We must properly split the dangerously set inner HTML in the return statement.
    # Since previously it was just `return <div dangerouslySetInnerHTML={{ __html: RAW_HTML }} />;`
    
    ret_match = re.search(r'return <div dangerouslySetInnerHTML=\{\{ __html: RAW_HTML \}\} />;', replaced)
    if ret_match:
        new_ret = """return (
    <>
      <div dangerouslySetInnerHTML={{ __html: RAW_HTML.split('</section>\\n`;')[0] + '</section>' }} />
      <Hero />
      <div dangerouslySetInnerHTML={{ __html: REST_HTML_PART_2 }} />
    </>
  );"""
        replaced = replaced.replace(ret_match.group(0), new_ret)
        
    with open("src/App.tsx", "w", encoding="utf-8") as f:
        f.write(replaced)
    print("Replaced!")
else:
    print("Old hero not found!")
