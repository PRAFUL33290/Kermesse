import re
with open("nico.html", "r", encoding="utf-8") as f:
    content = f.read()

pattern = re.compile(r"const renderStayNote = \(current, next\) => \{.*?\};", re.DOTALL)

new_render = """const getNextAppearance = (kid, currentIndex) => {
      for (let i = currentIndex + 1; i < handoffBlocks.length; i++) {
        if (blocKids(handoffBlocks[i]).includes(kid)) {
          return { block: handoffBlocks[i], index: i };
        }
      }
      return null;
    };

    const renderStayNote = (currentBlock, currentIndex) => {
      const kids = blocKids(currentBlock);
      const stayingDirectly = [];
      const playingLater = [];

      kids.forEach(kid => {
        const nextApp = getNextAppearance(kid, currentIndex);
        if (nextApp) {
          if (nextApp.index === currentIndex + 1) {
            stayingDirectly.push(kid);
          } else {
            playingLater.push({ kid, title: nextApp.block.title });
          }
        }
      });

      let html = '';
      if (stayingDirectly.length) {
        html += `<div class="stay-note">
          <strong>Ne les fais pas repartir : ils enchaînent avec le bloc suivant.</strong>
          ${stayingDirectly.map(esc).join(' · ')}
        </div>`;
      }
      if (playingLater.length) {
        html += `<div class="stay-note" style="background: var(--bg); color: var(--ink); border: 1px solid var(--line); margin-top: 10px;">
          <strong>Peuvent aller jouer avec leurs parents (+15min environ avant le prochain passage) :</strong>
          ${playingLater.map(p => `${esc(p.kid)} (${esc(p.title)})`).join(' · ')}
        </div>`;
      }
      return html;
    };"""

content = pattern.sub(new_render, content)
print("Modified", pattern.search(content))

#the replacement for ${renderStayNote(block, nextBlock)} was already done, but just in case:
let last_replacement = '"${renderStayNote(block, index)}"'
content = content.replace('${renderStayNote(block, nextBlock)}', '${renderStayNote(block, index)}')

with open("nico.html", "w", encoding="utf-8") as f:
    f.write(content)
