import re

with open('public/assets/index-v2-aboutphotos.js', 'r') as f:
    text = f.read()

pos = text.find('zb=({product:o, onClose:p')
end_pos = text.find('},Lb=({isOpen:o, onClose:p')
zb_code = text[pos:end_pos]

class_matches = re.findall(r'className:\s*[\"`\']([^\"`\']+)[\"`\']', zb_code)
# Also template literals or dynamic classes
used_classes = set()
for cm in class_matches:
    for cls in cm.split():
        if not '${' in cls:
            used_classes.add(cls.strip())

with open('public/assets/index-BfYezFXW.css', 'r') as f:
    css = f.read()

missing = []
present = []
for cls in sorted(used_classes):
    escaped = cls.replace(':', '\\:').replace('/', '\\/').replace('[', '\\[').replace(']', '\\]').replace('#', '\\#').replace('.', '\\.')
    if ('.' + escaped) in css or cls in css:
        present.append(cls)
    else:
        missing.append(cls)

print(f'Total classes in zb: {len(used_classes)}')
print(f'Present: {len(present)}')
print(f'Missing ({len(missing)}):')
for m in missing:
    print(' -', m)
