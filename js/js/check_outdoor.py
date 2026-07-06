with open(r'D:\GitHub\jennygiftpacking\js\data.js', 'r', encoding='utf-8') as f:
    content = f.read()
idx = content.find("id: 'outdoor-001'")
if idx == -1:
    idx = content.find('id: "outdoor-001"')
print('Found at', idx)
print(repr(content[idx-200:idx+50]))
