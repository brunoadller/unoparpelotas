// Contagem regressiva até o fim do mês corrente.
export const tick = () => {
  const now = new Date();
  const end = new Date(now.getFullYear(), now.getMonth() + 1, 1, 0, 0, 0);

  let s = Math.max(0, Math.floor((end.getTime() - now.getTime()) / 1000));
  const d = Math.floor(s / 86400);
  s %= 86400;
  const h = Math.floor(s / 3600);
  s %= 3600;
  const m = Math.floor(s / 60);
  s %= 60;
  const pad = (n: number) => String(n).padStart(2, "0");

  return [
    { id: 1, value: pad(d), label: "dias" },
    { id: 2, value: pad(h), label: "horas" },
    { id: 3, value: pad(m), label: "minutos" },
    { id: 4, value: pad(s), label: "segundos" },
  ];
};
