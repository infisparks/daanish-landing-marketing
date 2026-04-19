"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ref, push } from "firebase/database";
import { db } from "@/lib/firebase";
import { X, CheckCircle } from "lucide-react";

interface ModalFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ModalForm({ isOpen, onClose }: ModalFormProps) {
  const [form, setForm] = useState({ firstName: "", email: "", phone: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.firstName.trim()) newErrors.firstName = "First name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Enter a valid email";
    if (!form.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^\d{7,15}$/.test(form.phone.replace(/\s/g, ""))) newErrors.phone = "Enter a valid phone number";
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setLoading(true);
    try {
      await push(ref(db, "leads"), {
        firstName: form.firstName.trim(),
        email: form.email.trim(),
        phone: "+91" + form.phone.trim(),
        createdAt: new Date().toISOString(),
      });
      setSuccess(true);
      setForm({ firstName: "", email: "", phone: "" });
      setErrors({});
      setTimeout(() => {
        setSuccess(false);
        onClose();
      }, 2500);
    } catch {
      setErrors({ submit: "Something went wrong. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal Card */}
          <motion.div
            className="relative z-10 w-full max-w-md"
            initial={{ opacity: 0, scale: 0.88, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.88, y: 30 }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
          >
            <div className="relative rounded-2xl border border-white/20 bg-[#0a0f2e]/90 backdrop-blur-xl shadow-2xl shadow-blue-900/40 p-8">
              {/* Glow */}
              <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-blue-500/20 via-transparent to-cyan-400/10" />

              {/* Close */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10"
              >
                <X size={20} />
              </button>

              {success ? (
                <motion.div
                  className="flex flex-col items-center justify-center py-8 text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <CheckCircle className="text-green-400 mb-4" size={56} />
                  <h3 className="text-2xl font-bold text-white mb-2">You're all set!</h3>
                  <p className="text-white/60">We'll reach out to schedule your strategy call.</p>
                </motion.div>
              ) : (
                <>
                  <div className="mb-6">
                    <p className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-1">Free Consultation</p>
                    <h2 className="text-2xl font-bold text-white">Apply for a Strategy Call</h2>
                    <p className="text-sm text-white/50 mt-1">No pressure. No sales tactics. Just clarity.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="text-xs font-medium text-white/60 uppercase tracking-wider mb-1.5 block">
                        First Name
                      </label>
                      <input
                        type="text"
                        placeholder="Your first name"
                        value={form.firstName}
                        onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                        className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                      />
                      {errors.firstName && <p className="text-red-400 text-xs mt-1">{errors.firstName}</p>}
                    </div>

                    <div>
                      <label className="text-xs font-medium text-white/60 uppercase tracking-wider mb-1.5 block">
                        Email
                      </label>
                      <input
                        type="email"
                        placeholder="you@email.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                      />
                      {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="text-xs font-medium text-white/60 uppercase tracking-wider mb-1.5 block">
                        Phone Number
                      </label>
                      <div className="flex items-center rounded-xl bg-white/5 border border-white/10 overflow-hidden focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 transition-all">
                        <span className="flex items-center gap-1.5 px-4 py-3 text-sm text-white/50 border-r border-white/10 shrink-0">
                          🇮🇳 +91
                        </span>
                        <input
                          type="tel"
                          placeholder="9876543210"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className="flex-1 bg-transparent px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none"
                        />
                      </div>
                      {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                    </div>

                    {errors.submit && (
                      <p className="text-red-400 text-sm text-center">{errors.submit}</p>
                    )}

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full mt-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-cyan-500 text-white font-bold py-3.5 text-sm tracking-wide shadow-lg shadow-blue-700/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-blue-500/50 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <span className="flex items-center justify-center gap-2">
                          <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.4 0 0 5.4 0 12h4z" />
                          </svg>
                          Submitting...
                        </span>
                      ) : (
                        <>
                          Submit! <span className="font-normal opacity-80">— Your Growth Starts Here</span>
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
