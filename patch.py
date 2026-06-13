import re

with open("nico.html", "r", encoding="utf-8") as f:
    content = f.read()

old_note = """<div class="rule nico-note">
      <strong>Message pour Nico :</strong> amène les enfants par bloc, dans l'ordre ci-dessous.
      Si tu ne trouves pas un enfant, passe au suivant : ce n'est pas grave. Les enfants doivent aussi se bouger et savoir quand ils doivent être présents.
    </div>"""

new_note = """<div class="rule nico-note">
      <strong>Message pour Nico :</strong> amène les enfants par bloc, dans l'ordre ci-dessous.
      Si tu ne trouves pas un enfant, passe au suivant : ce n'est pas grave. Les enfants doivent aussi se bouger et savoir quand ils doivent être présents.<br><br>
      <strong>Important :</strong> Les enfants sont sous la surveillance de leurs parents et uniquement de leurs parents. Ils doivent être accompagnés quand ils se présentent sur scène.
    </div>"""

old_render = """const renderStayNote = (current, next) => {
      if (!next) return '';
      const nextKids = new Set(blocKids(next));
      const staying = blocKids(current).filter(k => nextKids.has(k));
      if (!staying.length) return '';
      return `<div class="stay-note">
        <strong>Ne les fais pas repartir : ils enchaînent avec le bloc suivant.</strong>
        ${staying.map(esc).join(' · ')}
      </div>`;
    };"""

new_render = """const getNextAppearance = (kid, currentIndex) => {
      for (let i = currentIndex + 1; i < handoffBlocks.length; i++) {
        if (blockKids(handoffBlocks[i]).includes(kid)) {
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

content = content.replace(old_note, new_note)
content = content.replace(old_render, new_render)
content = content.replace('${renderStayNote(block, nextBlock)}', '${renderStayNote(block, index)}')

with open("nico.html", "w", encoding="utf-8") as f:
    f.write(content)
