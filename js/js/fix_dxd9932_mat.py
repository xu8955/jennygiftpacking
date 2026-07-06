filepath = r'D:\GitHub\jennygiftpacking\js\data.js'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

old = "'Material': 'PU \u76ae\u9769 + \u91d1\u5c5e\u6263',\n      'Style':"
new = "'Material': 'PU \u76ae\u9769',\n      'Style':"

if old in content:
    content = content.replace(old, new)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print("Done")
else:
    print("Pattern not found")
