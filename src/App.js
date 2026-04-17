import { useEffect, useRef, useState } from "react";

const countdownSteps = ["3", "2", "1"];
const stepDuration = 1200;
const noRouteDuration = 10;
const yesRevealDuration = 10;

const views = {
  countdown: "countdown",
  question: "question",
  noResponse: "noResponse",
  reveal: "reveal",
  celebration: "celebration",
};

const funnyGifUrl = "https://media.giphy.com/media/ImYST2HBfjt6H8k2gb/giphy.gif";
const loveGifUrl = "https://media.giphy.com/media/jtAiUTr401Hi300z4m/giphy.gif";
const doodles = [
  { className: "doodle-one", rotation: -10, variant: "hug" },
  { className: "doodle-two", rotation: 12, variant: "heart" },
  { className: "doodle-three", rotation: -6, variant: "kiss" },
  { className: "doodle-four", rotation: 8, variant: "sparkle" },
  { className: "doodle-five", rotation: -14, variant: "sleepy" },
  { className: "doodle-six", rotation: 10, variant: "hug" },
  { className: "doodle-seven", rotation: -4, variant: "heart" },
  { className: "doodle-eight", rotation: 15, variant: "sparkle" },
];

function DoodleArt({ variant }) {
  if (variant === "heart") {
    return (
      <svg viewBox="0 0 220 170" aria-hidden="true">
        <g className="doodle-stroke">
          <circle cx="62" cy="36" r="16" />
          <circle cx="98" cy="36" r="16" />
          <circle cx="82" cy="68" r="34" />
          <circle cx="122" cy="36" r="16" />
          <circle cx="158" cy="36" r="16" />
          <circle cx="138" cy="68" r="34" />
          <circle cx="70" cy="62" r="5" />
          <circle cx="94" cy="62" r="5" />
          <circle cx="126" cy="62" r="5" />
          <circle cx="150" cy="62" r="5" />
          <path d="M76 76 Q82 82 88 76" />
          <path d="M132 76 Q138 82 144 76" />
          <path d="M104 122 C114 108 130 108 140 122 C128 138 116 146 104 122 Z" />
        </g>
      </svg>
    );
  }

  if (variant === "kiss") {
    return (
      <svg viewBox="0 0 220 160" aria-hidden="true">
        <g className="doodle-stroke">
          <circle cx="60" cy="34" r="16" />
          <circle cx="96" cy="34" r="16" />
          <circle cx="82" cy="66" r="34" />
          <circle cx="124" cy="34" r="16" />
          <circle cx="160" cy="34" r="16" />
          <circle cx="138" cy="66" r="34" />
          <circle cx="70" cy="60" r="5" />
          <circle cx="94" cy="60" r="5" />
          <circle cx="126" cy="60" r="5" />
          <circle cx="150" cy="60" r="5" />
          <path d="M77 75 Q82 79 87 75" />
          <path d="M128 76 Q138 68 146 76" />
          <path d="M102 88 C108 80 116 80 122 88 C116 96 108 96 102 88 Z" />
          <path d="M112 90 L112 104" />
        </g>
      </svg>
    );
  }

  if (variant === "sparkle") {
    return (
      <svg viewBox="0 0 220 180" aria-hidden="true">
        <g className="doodle-stroke">
          <circle cx="82" cy="54" r="34" />
          <circle cx="62" cy="24" r="16" />
          <circle cx="102" cy="24" r="16" />
          <circle cx="138" cy="54" r="34" />
          <circle cx="118" cy="24" r="16" />
          <circle cx="158" cy="24" r="16" />
          <circle cx="70" cy="50" r="5" />
          <circle cx="94" cy="50" r="5" />
          <circle cx="126" cy="50" r="5" />
          <circle cx="150" cy="50" r="5" />
          <path d="M76 66 Q82 72 88 66" />
          <path d="M132 66 Q138 72 144 66" />
          <path d="M186 38 L196 38" />
          <path d="M191 32 L191 44" />
          <path d="M22 92 L34 92" />
          <path d="M28 86 L28 98" />
          <path d="M174 118 L182 126" />
          <path d="M182 118 L174 126" />
        </g>
      </svg>
    );
  }

  if (variant === "sleepy") {
    return (
      <svg viewBox="0 0 220 170" aria-hidden="true">
        <g className="doodle-stroke">
          <circle cx="64" cy="34" r="16" />
          <circle cx="100" cy="34" r="16" />
          <circle cx="82" cy="66" r="34" />
          <circle cx="120" cy="34" r="16" />
          <circle cx="156" cy="34" r="16" />
          <circle cx="138" cy="66" r="34" />
          <path d="M66 60 L76 56" />
          <path d="M88 56 L98 60" />
          <path d="M122 60 L132 56" />
          <path d="M144 56 L154 60" />
          <path d="M76 76 Q82 82 88 76" />
          <path d="M132 76 Q138 82 144 76" />
          <path d="M176 28 L188 28" />
          <path d="M182 20 L192 20" />
          <path d="M188 12 L198 12" />
        </g>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 220 140" aria-hidden="true">
      <g className="doodle-stroke">
        <circle cx="62" cy="34" r="16" />
        <circle cx="102" cy="34" r="16" />
        <circle cx="118" cy="34" r="16" />
        <circle cx="158" cy="34" r="16" />
        <circle cx="82" cy="64" r="34" />
        <circle cx="138" cy="64" r="34" />
        <circle cx="70" cy="60" r="5" />
        <circle cx="94" cy="60" r="5" />
        <circle cx="126" cy="60" r="5" />
        <circle cx="150" cy="60" r="5" />
        <path d="M76 74 Q82 80 88 74" />
        <path d="M132 74 Q138 80 144 74" />
        <path d="M78 98 C88 108 104 112 114 102" />
        <path d="M142 98 C132 108 116 112 106 102" />
        <path d="M110 94 C116 84 126 84 132 94 C126 102 116 102 110 94 Z" />
      </g>
    </svg>
  );
}

function BubuDuduOutline({ className, rotation, variant }) {
  return (
    <div className={`background-doodle ${className}`} style={{ "--rotation": `${rotation}deg` }}>
      <DoodleArt variant={variant} />
    </div>
  );
}

function CakeScratchScene() {
  const canvasRef = useRef(null);
  const [isScratching, setIsScratching] = useState(false);
  const [scratchCount, setScratchCount] = useState(0);
  const [isCut, setIsCut] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return undefined;
    }

    const context = canvas.getContext("2d");

    if (!context) {
      return undefined;
    }

    const resizeCanvas = () => {
      const parent = canvas.parentElement;

      if (!parent) {
        return;
      }

      const { width, height } = parent.getBoundingClientRect();
      canvas.width = width;
      canvas.height = height;

      context.globalCompositeOperation = "source-over";
      context.clearRect(0, 0, width, height);
      context.fillStyle = "#f26fa9";
      context.fillRect(0, 0, width, height);

      context.fillStyle = "rgba(255, 240, 247, 0.92)";
      context.font = "700 24px Trebuchet MS";
      context.textAlign = "center";
      context.fillText("Scratch anywhere to cut the cake", width / 2, height / 2);
      context.font = "600 14px Trebuchet MS";
      context.fillText("Keep scratching until the surprise opens", width / 2, height / 2 + 28);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  const scratchAtPoint = (event) => {
    const canvas = canvasRef.current;

    if (!canvas || isCut) {
      return;
    }

    const context = canvas.getContext("2d");

    if (!context) {
      return;
    }

    const rect = canvas.getBoundingClientRect();
    const clientX = event.touches ? event.touches[0].clientX : event.clientX;
    const clientY = event.touches ? event.touches[0].clientY : event.clientY;
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    context.globalCompositeOperation = "destination-out";
    context.beginPath();
    context.arc(x, y, 34, 0, Math.PI * 2);
    context.fill();

    setScratchCount((current) => current + 1);
  };

  useEffect(() => {
    if (scratchCount > 55) {
      setIsCut(true);
    }
  }, [scratchCount]);

  return (
    <section className="celebration-stage">
      <p className="eyebrow">Cake cutting time</p>
      <h1 className="card-title">It has been 24 beautiful years since my duduu was born.</h1>
      <p className="card-copy">
        My sweetest duduu deserves the happiest cake-cutting moment ever. Scratch anywhere on the screen
        and let Bubu bring the celebration to life for her favorite birthday person.
      </p>

      <div className="celebration-scene">
        <div className="bubu-bounce" aria-hidden="true">
          <div className="bubu-ears">
            <span className="ear" />
            <span className="ear" />
          </div>
          <div className="bubu-face">
            <span className="eye eye-left" />
            <span className="eye eye-right" />
            <span className="mouth" />
            <div className="cake">
              <span className="candle" />
            </div>
          </div>
        </div>

        <div className={`scratch-layer${isCut ? " scratch-layer-cleared" : ""}`}>
          <div className={`birthday-message${isCut ? " birthday-message-visible" : ""}`}>
            Happiiie birthday duduu! 🎉🎂🎈
          </div>
          <canvas
            ref={canvasRef}
            className="scratch-canvas"
            onMouseDown={(event) => {
              setIsScratching(true);
              scratchAtPoint(event);
            }}
            onMouseMove={(event) => {
              if (isScratching) {
                scratchAtPoint(event);
              }
            }}
            onMouseUp={() => setIsScratching(false)}
            onMouseLeave={() => setIsScratching(false)}
            onTouchStart={(event) => {
              setIsScratching(true);
              scratchAtPoint(event);
            }}
            onTouchMove={(event) => {
              if (isScratching) {
                scratchAtPoint(event);
              }
            }}
            onTouchEnd={() => setIsScratching(false)}
          />
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const [stepIndex, setStepIndex] = useState(0);
  const [view, setView] = useState(views.countdown);
  const [secondsLeft, setSecondsLeft] = useState(noRouteDuration);
  const [yesSecondsLeft, setYesSecondsLeft] = useState(yesRevealDuration);

  useEffect(() => {
    if (view !== views.countdown) {
      return undefined;
    }

    if (stepIndex >= countdownSteps.length - 1) {
      const revealQuestion = window.setTimeout(() => {
        setView(views.question);
      }, stepDuration);

      return () => window.clearTimeout(revealQuestion);
    }

    const timer = window.setTimeout(() => {
      setStepIndex((currentStep) => currentStep + 1);
    }, stepDuration);

    return () => window.clearTimeout(timer);
  }, [stepIndex, view]);

  useEffect(() => {
    if (view !== views.noResponse) {
      return undefined;
    }

    setSecondsLeft(noRouteDuration);

    const interval = window.setInterval(() => {
      setSecondsLeft((current) => {
        if (current <= 1) {
          window.clearInterval(interval);
          setView(views.question);
          return noRouteDuration;
        }

        return current - 1;
      });
    }, 1000);

    return () => window.clearInterval(interval);
  }, [view]);

  useEffect(() => {
    if (view !== views.reveal) {
      return undefined;
    }

    setYesSecondsLeft(yesRevealDuration);

    const interval = window.setInterval(() => {
      setYesSecondsLeft((current) => {
        if (current <= 1) {
          window.clearInterval(interval);
          setView(views.celebration);
          return yesRevealDuration;
        }

        return current - 1;
      });
    }, 1000);

    return () => window.clearInterval(interval);
  }, [view]);

  const handleNoClick = () => {
    setView(views.noResponse);
  };

  const handleYesClick = () => {
    setView(views.reveal);
  };

  return (
    <main className="page-shell">
      <div className="glow glow-left" />
      <div className="glow glow-right" />
      {doodles.map((doodle) => (
        <BubuDuduOutline
          key={doodle.className}
          className={doodle.className}
          rotation={doodle.rotation}
          variant={doodle.variant}
        />
      ))}

      {view === views.celebration ? (
        <CakeScratchScene />
      ) : (
        <section className="countdown-card">
        {view === views.countdown && (
          <>
            <p className="eyebrow">Birthday surprise loading...</p>
            <div key={countdownSteps[stepIndex]} className="countdown-number" aria-live="polite">
              {countdownSteps[stepIndex]}
            </div>
            <p className="caption">Get ready for something special</p>
          </>
        )}

        {view === views.question && (
          <>
            <p className="eyebrow">Security checkpoint</p>
            <h1 className="card-title">Ready to unwrap your ridiculously adorable surprise?</h1>
            <p className="card-copy">
              Warning: pressing <strong>Yes</strong> may cause smiling, blushing, and a dramatic rise
              in birthday happiness.
            </p>

            <div className="button-row">
              <button type="button" className="action-button action-button-primary" onClick={handleYesClick}>
                Yes, obviously
              </button>
              <button type="button" className="action-button action-button-secondary" onClick={handleNoClick}>
                No, let me suffer
              </button>
            </div>
          </>
        )}

        {view === views.noResponse && (
          <>
            <p className="eyebrow">Illegal answer detected</p>
            <img className="reaction-gif" src={funnyGifUrl} alt="Funny Bubu Dudu gif" />
            <h1 className="card-title">Aiyo... why would you click no?</h1>
            <p className="card-copy">
              The surprise team is emotionally damaged. Sit with this guilt for{" "}
              <span className="countdown-highlight">{secondsLeft}</span> more seconds, then please come
              back and press yes like the sweetheart you are.
            </p>
            <p className="caption">The question will return automatically. No escape.</p>
          </>
        )}

        {view === views.reveal && (
          <>
            <p className="eyebrow">Birthday reveal</p>
            <img className="reaction-gif" src={loveGifUrl} alt="Cute Bubu Dudu love gif" />
            <h1 className="card-title">It has been 24 beautiful years since my duduu was born.</h1>
            <p className="card-copy">
              And honestly, the world has been softer, sweeter, and way more lovable ever since. Happy
              birthday to the cutest duduu ever.
            </p>
            <p className="card-copy waiting-copy">
              Bubu is bringing Dudu's birthday cake in{" "}
              <span className="countdown-highlight">{yesSecondsLeft}</span> seconds. Stay cute and get
              ready for the cake-cutting ceremony.
            </p>
          </>
        )}

        </section>
      )}
      </main>
  );
}
