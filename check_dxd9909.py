with open(r'D:\GitHub\jennygiftpacking\js\data.js', 'r', encoding='utf-8') as f:
    content = f.read()
idx = content.find("id: 'dxd-009'")
if idx > 0:
    print(content[idx-20:idx+600])
