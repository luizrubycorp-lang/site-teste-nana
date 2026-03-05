"use client";

import React from "react";
import { motion, AnimatePresence } from "motion/react";

type Props = {
  open: boolean;
  onClose: () => void;
};

const FACIAIS = ["Limpeel", "Blue Clean", "Naturale Lifting", "Prev Lifting"];
const CORPORAL = [
  "Estriout",
  "Naturale Slim",
  "Naturale Firmax",
  "Naturale Detox",
  "Naturale Relax",
  "Naturale Cell",
  "Pós-Operatório",
];

function formatDate(d: string) {
  try {
    const dt = new Date(d);
    return dt.toLocaleDateString('pt-BR');
  } catch { return d; }
}

export default function ScheduleModal({ open, onClose }: Props) {
  const [procedure, setProcedure] = React.useState("");
  const [date, setDate] = React.useState("");
  const [time, setTime] = React.useState("");
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [error, setError] = React.useState("");

  React.useEffect(() => {
    if (!open) {
      setProcedure(""); setDate(""); setTime(""); setName(""); setPhone(""); setError("");
    }
  }, [open]);

  const times = React.useMemo(() => {
    const arr: string[] = [];
    for (let h = 8; h <= 18; h++) {
      arr.push(`${h.toString().padStart(2,'0')}:00`);
      arr.push(`${h.toString().padStart(2,'0')}:30`);
    }
    return arr.slice(0, arr.length - 1); // remove last 18:30
  }, []);

  function isSunday(dateStr: string) {
    if (!dateStr) return false;
    const d = new Date(dateStr + 'T00:00:00');
    return d.getDay() === 0;
  }

  function handleSubmit(e?: React.FormEvent) {
    e?.preventDefault();
    setError("");
    if (!procedure || !date || !time || !name || !phone) {
      setError('Por favor, preencha todos os campos.');
      return;
    }
    if (isSunday(date)) {
      setError('Domingos não estão disponíveis. Escolha outra data.');
      return;
    }

    const message = `Oi, vim pelo site Naturale, agendei para fazer o procedimento ${procedure} no dia ${formatDate(date)} às ${time}h. Meu nome é ${name}.`;
    const url = `https://wa.me/5543999687799?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    onClose();
  }

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.24 }}
            className="relative bg-[#FBFAF8] text-[#2C4A52] rounded-2xl w-full max-w-2xl shadow-2xl overflow-hidden"
          >
            <div className="p-6 md:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-serif mb-1">Agendar Avaliação</h3>
                  <p className="text-sm text-[#2C4A52]/80">Escolha o procedimento, data e horário.</p>
                </div>
                <button aria-label="Fechar" onClick={onClose} className="ml-auto bg-white p-2 rounded-full shadow sm:mt-0 hover:scale-105 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2C4A52" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
              </div>

              <form className="mt-6 grid grid-cols-1 gap-4" onSubmit={handleSubmit}>
                <label className="block">
                  <span className="text-sm font-medium">Procedimento</span>
                  <select value={procedure} onChange={e=>setProcedure(e.target.value)} className="mt-2 w-full rounded-lg border border-[#dcdcdc] px-3 py-2 bg-white text-[#2C4A52]">
                    <option value="">Selecione...</option>
                    <optgroup label="Faciais">
                      {FACIAIS.map(p => <option key={p} value={p}>{p}</option>)}
                    </optgroup>
                    <optgroup label="Corporais">
                      {CORPORAL.map(p => <option key={p} value={p}>{p}</option>)}
                    </optgroup>
                  </select>
                </label>

                <div className="grid grid-cols-2 gap-4">
                  <label className="block">
                    <span className="text-sm font-medium">Data</span>
                    <input type="date" value={date} onChange={e=>setDate(e.target.value)} className="mt-2 w-full rounded-lg border border-[#dcdcdc] px-3 py-2 bg-white text-[#2C4A52]" />
                  </label>
                  <label className="block">
                    <span className="text-sm font-medium">Horário</span>
                    <select value={time} onChange={e=>setTime(e.target.value)} className="mt-2 w-full rounded-lg border border-[#dcdcdc] px-3 py-2 bg-white text-[#2C4A52]">
                      <option value="">Selecione...</option>
                      {times.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </label>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <label>
                    <span className="text-sm font-medium">Nome</span>
                    <input value={name} onChange={e=>setName(e.target.value)} placeholder="Seu nome" className="mt-2 w-full rounded-lg border border-[#dcdcdc] px-3 py-2 bg-white text-[#2C4A52]" />
                  </label>
                  <label>
                    <span className="text-sm font-medium">Telefone</span>
                    <input value={phone} onChange={e=>setPhone(e.target.value)} placeholder="(DD) 9xxxx-xxxx" className="mt-2 w-full rounded-lg border border-[#dcdcdc] px-3 py-2 bg-white text-[#2C4A52]" />
                  </label>
                </div>

                {error && <div className="text-sm text-red-600">{error}</div>}

                <div className="pt-4 border-t border-[#e9e9e9] mt-2 flex justify-end">
                  <button type="button" onClick={onClose} className="mr-3 px-4 py-2 rounded-lg bg-white border border-[#dcdcdc] text-[#2C4A52]">Cancelar</button>
                  <button type="submit" className="px-4 py-2 rounded-lg bg-[#79C7B6] text-white font-bold">Finalizar Agendamento</button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
