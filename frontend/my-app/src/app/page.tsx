"use client";

import { useState } from "react";
import {
  Film,
  Sparkles,
  Star,
  Users,
  Loader2,
  Clapperboard,
} from "lucide-react";

interface Movie {
  title: string;
  year: number;
  genre: string[];
  cast: string[];
  reason: string;
  rating: number;
}

interface RecommendationResponse {
  movies: Movie[];
}

export default function MovieRecommender() {
  const [formData, setFormData] = useState({
    userPrompt: "",
    genre: "Sci-Fi",
    mood: "Mind-bending",
    count: 3,
  });

  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<RecommendationResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

    try {
      const res = await fetch(`${API_URL}/api/recommend`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error(`Server error: ${res.statusText}`);
      }

      const data: RecommendationResponse = await res.json();
      setResults(data);
    } catch (err: any) {
      setError(
        err.message || "Failed to fetch recommendations from backend server.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 py-12 px-4 sm:px-6 lg:px-8 selection:bg-indigo-500 selection:text-white">
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Header */}
        <div className="text-center space-y-3">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl flex items-center justify-center gap-3">
            <Clapperboard className="w-10 h-10 text-indigo-500" /> CineMatch AI
          </h1>
          <p className="text-slate-400 max-w-lg mx-auto text-sm sm:text-base">
            Discover movie recommendations tailored to your request, mood, and
            genre choices.
          </p>
        </div>

        {/* Input Form Card */}
        <form
          onSubmit={handleSubmit}
          className="bg-slate-900/80 backdrop-blur border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6"
        >
          <div>
            <label className="block text-sm font-medium text-slate-200 mb-2">
              What kind of movie experience are you looking for?
            </label>
            <textarea
              required
              rows={3}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3.5 text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-sm"
              placeholder="e.g. A claustrophobic psychological thriller set in isolated nature..."
              value={formData.userPrompt}
              onChange={(e) =>
                setFormData({ ...formData, userPrompt: e.target.value })
              }
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                Preferred Genre
              </label>
              <input
                type="text"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                value={formData.genre}
                onChange={(e) =>
                  setFormData({ ...formData, genre: e.target.value })
                }
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                Desired Mood
              </label>
              <input
                type="text"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                value={formData.mood}
                onChange={(e) =>
                  setFormData({ ...formData, mood: e.target.value })
                }
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                Movie Count
              </label>
              <input
                type="number"
                min={1}
                max={10}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                value={formData.count}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    count: parseInt(e.target.value) || 1,
                  })
                }
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-900/50 text-white font-semibold py-3.5 rounded-xl transition-all shadow-lg hover:shadow-indigo-500/20 flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed text-sm"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" /> Fetching from
                backend...
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" /> Get Movie Recommendations
              </>
            )}
          </button>
        </form>

        {/* Error Notification */}
        {error && (
          <div className="bg-red-950/40 border border-red-800/80 text-red-300 p-4 rounded-xl text-sm text-center">
            {error}
          </div>
        )}

        {/* Recommendations Output Grid */}
        {results?.movies && results.movies.length > 0 && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
              <Film className="w-5 h-5 text-indigo-400" /> Recommendations
              Lineup
            </h2>
            <div className="grid grid-cols-1 gap-6">
              {results.movies.map((movie, idx) => (
                <div
                  key={idx}
                  className="bg-slate-900 border border-slate-800/80 hover:border-slate-700/80 rounded-2xl p-6 shadow-lg transition-all space-y-4"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/60 pb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white tracking-tight">
                        {movie.title}{" "}
                        <span className="text-slate-500 font-normal text-base">
                          ({movie.year})
                        </span>
                      </h3>
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {movie.genre.map((g, i) => (
                          <span
                            key={i}
                            className="text-xs bg-slate-800/80 text-indigo-300 px-2.5 py-0.5 rounded-full border border-slate-700/60 font-medium"
                          >
                            {g}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 bg-amber-500/10 text-amber-400 border border-amber-500/20 px-3 py-1 rounded-lg text-sm font-bold self-start sm:self-center">
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                      {movie.rating} / 10
                    </div>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {movie.reason}
                  </p>

                  {movie.cast && movie.cast.length > 0 && (
                    <div className="flex items-center gap-2 text-xs text-slate-400 pt-3 border-t border-slate-800/60">
                      <Users className="w-3.5 h-3.5 text-slate-500" />
                      <span className="font-semibold text-slate-300">
                        Cast:
                      </span>{" "}
                      {movie.cast.join(", ")}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
