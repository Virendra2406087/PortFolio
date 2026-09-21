import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const CF_HANDLE = "virendrakumar993177";

function Leetcode() {
  const [cfInfo, setCfInfo] = useState(null);
  const [cfRating, setCfRating] = useState([]);
  const [cfLoading, setCfLoading] = useState(true);
  const [cfError, setCfError] = useState(null);

  useEffect(() => {
    async function fetchCodeforcesData() {
      try {
        setCfLoading(true);
        const [infoRes, ratingRes] = await Promise.all([
          fetch(
            `https://codeforces.com/api/user.info?handles=${CF_HANDLE}`
          ),
          fetch(`https://codeforces.com/api/user.rating?handle=${CF_HANDLE}`),
        ]);

        const infoData = await infoRes.json();
        const ratingData = await ratingRes.json();

        if (infoData.status !== "OK" || ratingData.status !== "OK") {
          throw new Error("Codeforces API returned an error");
        }

        setCfInfo(infoData.result[0]);

        const formatted = ratingData.result.map((entry) => ({
          date: new Date(entry.ratingUpdateTimeSeconds * 1000).toLocaleDateString(
            "en-US",
            { month: "short", day: "numeric", year: "2-digit" }
          ),
          rating: entry.newRating,
          contest: entry.contestName,
        }));

        setCfRating(formatted);
        setCfError(null);
      } catch (err) {
        setCfError("Couldn't load live Codeforces data right now.");
      } finally {
        setCfLoading(false);
      }
    }

    fetchCodeforcesData();
  }, []);

  return (
    <>
      <section
        id="dsa"
        className="w-full bg-white dark:bg-gradient-to-br from-gray-900 to-gray-800 py-10 pb-[5rem]"
      >
        {/* This will be the container */}
        <div className="mx-auto w-[90%] md:w-[80%] flex flex-col gap-8">
          <div>
            <h1 className="bg-gradient-to-bl md:text-center from-violet-500 via-pink-500 to-violet-500 bg-clip-text text-center text-transparent text-4xl font-bold py-2 pt-7 px-2">
              My Leetcode Journey
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-6">
            <div className="flex justify-center items-center">
              <a
                href="https://leetcode.com/u/virendraK87/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="dark:block hidden"
                  src="https://leetcode-badge-showcase.vercel.app/api?username=virendraK87&animated=true&theme=github-dark"
                  alt="LeetCode Badges"
                />
                <img
                  className="block dark:hidden rounded-2xl border-2 border-purple-500"
                  src="https://leetcode-badge-showcase.vercel.app/api?username=virendraK87&animated=true&theme=light"
                  alt="LeetCode Badges"
                />
              </a>
            </div>

            <div className="text-lg text-gray-700 dark:text-blue-50 text-justify grid grid-cols-1 gap-4">
              <p>
                Over the past year, I've built a strong foundation in{" "}
                <b className="text-violet-500">Data Structures & Algorithms</b>{" "}
                and strengthened my problem-solving skills by solving over{" "}
                <b className="text-2xl font-semibold">500+</b> problems on
                LeetCode, covering a wide range of concepts from arrays and
                graphs to dynamic programming, tries, and advanced
                algorithms.
              </p>

              <p>
                For me, solving a problem isn't just about getting the
                accepted result. I focus on understanding the problem
                deeply, analyzing the constraints, starting with a simple
                approach, and then finding ways to optimize it for better
                time and space complexity.
              </p>

              <p>
                Along the way, I've explored multiple approaches to
                challenging problems and worked on simplifying complex
                solutions into clean and efficient implementations. I
                believe consistency matters more than speed, so I continue
                to solve, learn, and improve every day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Codeforces Section ---------------- */}
      <section
        id="cf"
        className="w-full bg-gray-50 dark:bg-gradient-to-br from-gray-800 to-gray-900 py-10 pb-[5rem]"
      >
        <div className="mx-auto w-[90%] md:w-[80%] flex flex-col gap-8">
          <div>
            <h1 className="bg-gradient-to-bl md:text-center from-orange-500 via-red-500 to-orange-500 bg-clip-text text-center text-transparent text-4xl font-bold py-2 px-2">
              My Codeforces Journey
            </h1>
          </div>

          {cfLoading && (
            <p className="text-center text-gray-600 dark:text-gray-300">
              Loading live Codeforces stats...
            </p>
          )}

          {cfError && (
            <p className="text-center text-red-500">{cfError}</p>
          )}

          {!cfLoading && !cfError && cfInfo && (
            <>
              {/* Stat cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 rounded-xl py-4 shadow">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Current Rating
                  </span>
                  <span className="text-2xl font-bold text-orange-500">
                    {cfInfo.rating ?? "Unrated"}
                  </span>
                </div>
                <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 rounded-xl py-4 shadow">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Max Rating
                  </span>
                  <span className="text-2xl font-bold text-purple-500">
                    {cfInfo.maxRating ?? "-"}
                  </span>
                </div>
                <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 rounded-xl py-4 shadow">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Rank
                  </span>
                  <span className="text-2xl font-bold text-blue-500 capitalize">
                    {cfInfo.rank ?? "Unrated"}
                  </span>
                </div>
                <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 rounded-xl py-4 shadow">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Contests
                  </span>
                  <span className="text-2xl font-bold text-green-500">
                    {cfRating.length}
                  </span>
                </div>
              </div>

              {/* Rating graph */}
              <div className="w-full h-[320px] bg-white dark:bg-gray-800 rounded-xl p-4 shadow">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={cfRating}>
                    <CartesianGrid strokeDasharray="3 3" opacity={0.5} />
                    <XAxis
                      dataKey="date"
                      tick={{ fontSize: 11 }}
                      minTickGap={20}
                    />
                    <YAxis domain={["auto", "auto"]} tick={{ fontSize: 11 }} />
                    <Tooltip
                      formatter={(value, name, props) => [
                        value,
                        `Rating (${props.payload.contest})`,
                      ]}
                    />
                    <Line
                      type="monotone"
                      dataKey="rating"
                      stroke="#6366f1"
                      strokeWidth={2}
                      dot={{ r: 3 }}
                      activeDot={{ r: 5 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <p className="text-center">
                <a
                  href={`https://codeforces.com/profile/${CF_HANDLE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-500 hover:underline font-medium"
                >
                  View full Codeforces profile →
                </a>
              </p>
            </>
          )}
        </div>
      </section>
    </>
  );
}

export default Leetcode;