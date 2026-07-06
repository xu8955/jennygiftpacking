filepath = r'D:\GitHub\jennygiftpacking\js\data.js'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Find dxd-026's closing brace and add comma
# The dxd-026 product ends, then there's blank lines/comments, then outdoor
# We need to add a comma after dxd-026's }
old_pattern = """    }
  }


  // ═══════════════════════════════════════
  //  OUTDOOR & SPORTS
  // ═══════════════════════════════════════
  {
    id: 'outdoor-001',"""

new_pattern = """    }
  },

  // ═══════════════════════════════════════
  //  OUTDOOR & SPORTS
  // ═══════════════════════════════════════
  {
    id: 'outdoor-001',"""

if old_pattern in content:
    content = content.replace(old_pattern, new_pattern)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print("Fixed: added comma after dxd-026")
else:
    print("Pattern not found, checking...")
    idx = content.find("id: 'outdoor-001'")
    if idx > 0:
        print("Found outdoor-001 at", idx)
        print("Before:", repr(content[idx-100:idx]))
