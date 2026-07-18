import { applyMap } from '../../shared/config.js';

(async () => {
  try {
    const res = await fetch('/map.json');
    if (res.ok) applyMap(await res.json());
  } catch { }

  await import('./main.js');
})();
