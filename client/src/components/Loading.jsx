import { useState, useEffect } from "react";

const PortfolioLoader = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [loadingText, setLoadingText] = useState("Loading");
  const [glitchActive, setGlitchActive] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsVisible(false);
            if (onLoadingComplete) onLoadingComplete();
          }, 800);
          return 100;
        }
        return prev + Math.random() * 12;
      });
    }, 180);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  useEffect(() => {
    const texts = ["LOADING", "LOADING.", "LOADING..", "LOADING..."];
    let index = 0;

    const textInterval = setInterval(() => {
      setLoadingText(texts[index]);
      index = (index + 1) % texts.length;
    }, 400);

    return () => clearInterval(textInterval);
  }, []);

  // Random glitch effect
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 150);
    }, 3000 + Math.random() * 5000);

    return () => clearInterval(glitchInterval);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-black transition-all duration-1000 ${
        progress >= 100 ? "opacity-0 scale-125" : "opacity-100"
      }`}
      style={{
        background: `
          radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
          radial-gradient(circle at 40% 80%, rgba(120, 219, 255, 0.3) 0%, transparent 50%),
          linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 50%, #16213e 100%)
        `,
      }}
    >
      {/* Matrix Rain Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px opacity-20"
            style={{
              left: `${i * 7 + Math.random() * 5}%`,
              height: "100vh",
              background:
                "linear-gradient(to bottom, transparent, #00ff88, transparent)",
              animation: `matrix-rain ${
                3 + Math.random() * 4
              }s linear infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Floating Particles with Trails */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              background: [
                "linear-gradient(45deg, #ff006e, #8338ec)",
                "linear-gradient(45deg, #3a86ff, #06ffa5)",
                "linear-gradient(45deg, #ffbe0b, #fb5607)",
              ][Math.floor(Math.random() * 3)],
              boxShadow: `0 0 ${10 + Math.random() * 20}px currentColor`,
              animation: `float ${4 + Math.random() * 6}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Holographic Grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,255,136,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,136,0.3) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
          animation: "grid-move 20s linear infinite",
        }}
      />

      {/* Main Logo/Name with Hologram Effect */}
      <div className="relative z-10 mb-16 text-center">
        <div className="relative">
          <h1
            className={`text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 mb-6 tracking-wider transform transition-all duration-300 ${
              glitchActive ? "animate-pulse scale-105" : ""
            }`}
            style={{
              fontFamily: "system-ui, -apple-system, sans-serif",
              textShadow: glitchActive
                ? "0 0 30px rgba(138, 43, 226, 0.8)"
                : "none",
              filter: glitchActive ? "hue-rotate(180deg)" : "none",
            }}
          >
            PORTFOLIO
          </h1>

          {/* Glitch overlay */}
          {glitchActive && (
            <h1 className="absolute inset-0 text-7xl md:text-9xl font-black text-red-500 opacity-70 transform translate-x-1 -translate-y-1 mix-blend-screen">
              PORTFOLIO
            </h1>
          )}
        </div>

        <div className="text-2xl text-gray-300 font-light tracking-[0.3em] opacity-90 mb-4">
          <span
            className="inline-block animate-bounce"
            style={{ animationDelay: "0s" }}
          >
            F
          </span>
          <span
            className="inline-block animate-bounce"
            style={{ animationDelay: "0.1s" }}
          >
            U
          </span>
          <span
            className="inline-block animate-bounce"
            style={{ animationDelay: "0.2s" }}
          >
            L
          </span>
          <span
            className="inline-block animate-bounce"
            style={{ animationDelay: "0.3s" }}
          >
            L
          </span>
          <span
            className="inline-block animate-bounce mx-2"
            style={{ animationDelay: "0.4s" }}
          >
            S
          </span>
          <span
            className="inline-block animate-bounce"
            style={{ animationDelay: "0.5s" }}
          >
            T
          </span>
          <span
            className="inline-block animate-bounce"
            style={{ animationDelay: "0.6s" }}
          >
            A
          </span>
          <span
            className="inline-block animate-bounce"
            style={{ animationDelay: "0.7s" }}
          >
            C
          </span>
          <span
            className="inline-block animate-bounce"
            style={{ animationDelay: "0.8s" }}
          >
            K
          </span>
          <span
            className="inline-block animate-bounce mx-2"
            style={{ animationDelay: "0.9s" }}
          >
            D
          </span>
          <span
            className="inline-block animate-bounce"
            style={{ animationDelay: "1.0s" }}
          >
            E
          </span>
          <span
            className="inline-block animate-bounce"
            style={{ animationDelay: "1.1s" }}
          >
            V
          </span>
        </div>

        {/* Scanning line effect */}
        <div className="relative overflow-hidden">
          <div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400 to-transparent h-px opacity-60 animate-pulse"
            style={{ animation: "scan 2s ease-in-out infinite" }}
          />
        </div>
      </div>

      {/* 3D Hexagonal Spinner */}
      <div className="relative mb-12">
        <div className="w-32 h-32 relative" style={{ perspective: "200px" }}>
          {/* Multiple rotating hexagons */}
          {[0, 1, 2].map((layer) => (
            <div
              key={layer}
              className="absolute inset-0 border-2 rounded-lg opacity-80"
              style={{
                transform: `rotateX(${layer * 20}deg) rotateY(${
                  layer * 30
                }deg)`,
                borderColor: ["#00ffff", "#ff00ff", "#ffff00"][layer],
                animation: `rotate3d ${2 + layer * 0.5}s linear infinite`,
                transformStyle: "preserve-3d",
              }}
            />
          ))}

          {/* Center orb */}
          <div
            className="absolute inset-8 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 animate-pulse"
            style={{
              boxShadow:
                "0 0 40px rgba(138, 43, 226, 0.8), inset 0 0 20px rgba(255, 255, 255, 0.2)",
              animation: "glow 2s ease-in-out infinite alternate",
            }}
          />
        </div>
      </div>

      {/* Advanced Progress Bar */}
      <div className="w-96 max-w-sm mx-auto mb-8">
        <div className="flex justify-between text-lg text-gray-300 mb-3 font-mono">
          <span className="text-cyan-400 font-bold">{loadingText}</span>
          <span className="text-pink-400 font-bold">
            {Math.round(progress)}%
          </span>
        </div>

        <div className="relative">
          <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden border border-gray-600">
            <div
              className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full transition-all duration-300 ease-out relative"
              style={{ width: `${Math.min(progress, 100)}%` }}
            >
              <div className="absolute inset-0 bg-white/30 animate-pulse" />
              <div className="absolute right-0 top-0 w-4 h-full bg-white/60 animate-ping" />
            </div>
          </div>

          {/* Progress glow effect */}
          <div
            className="absolute top-0 h-2 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full blur-sm opacity-50"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>
      </div>

      {/* Console-style Status Messages */}
      <div className="font-mono text-sm space-y-1 text-center mb-8">
        <div className="text-green-400">$ initializing_systems.exe</div>
        <div className="text-yellow-400">$ loading_assets.dll</div>
        <div className="text-blue-400">$ compiling_awesomeness.js</div>
        <div className="text-purple-400">$ rendering_magic.css</div>
      </div>

      {/* Cyberpunk Elements */}
      <div className="absolute top-10 left-10">
        <div
          className="w-20 h-20 border-2 border-cyan-400 rotate-45 animate-spin opacity-30"
          style={{ animationDuration: "10s" }}
        />
        <div className="absolute inset-2 border border-purple-400 rotate-12 animate-pulse" />
      </div>

      <div className="absolute top-16 right-16">
        <div className="w-16 h-16 border-2 border-pink-400 rounded-full animate-ping opacity-30" />
        <div
          className="absolute inset-4 border border-yellow-400 rounded-full animate-spin"
          style={{ animationDuration: "8s" }}
        />
      </div>

      <div className="absolute bottom-16 left-16">
        <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 transform rotate-45 animate-bounce opacity-40" />
      </div>

      <div className="absolute bottom-20 right-20">
        <div className="w-14 h-14 border-2 border-orange-400 transform rotate-12 animate-pulse opacity-30" />
      </div>

      {/* Laser scanning lines */}
      <div className="absolute inset-x-0 top-1/3 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-60 animate-pulse" />
      <div
        className="absolute inset-x-0 bottom-1/3 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-60 animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      <style jsx>{`
        @keyframes matrix-rain {
          0% {
            transform: translateY(-100vh);
          }
          100% {
            transform: translateY(100vh);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        @keyframes grid-move {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }

        @keyframes rotate3d {
          0% {
            transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
          }
          100% {
            transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg);
          }
        }

        @keyframes glow {
          0% {
            box-shadow: 0 0 20px rgba(138, 43, 226, 0.5),
              inset 0 0 20px rgba(255, 255, 255, 0.1);
          }
          100% {
            box-shadow: 0 0 60px rgba(138, 43, 226, 1),
              inset 0 0 30px rgba(255, 255, 255, 0.3);
          }
        }

        @keyframes scan {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
};

export default PortfolioLoader;
