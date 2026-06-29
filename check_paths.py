import re
with open(r'C:\Users\Administrator\.openclaw\workspace\my-site\out\index.html', 'r', encoding='utf-8') as f:
    content = f.read()
css_links = re.findall(r'href="([^"]*css)"', content)
print('CSS links:', css_links)
js_links = re.findall(r'src="([^"]*js)"', content)
print('JS links:', js_links[:3])
