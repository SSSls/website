import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function Icon({ name, className = "h-6 w-6" }: { name: string; className?: string }) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  const icons: Record<string, React.ReactNode> = {
    aperture: (
      <svg {...common}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3l3.8 6.6" />
        <path d="M20.4 8.5h-7.6" />
        <path d="M18.2 18.5l-3.8-6.6" />
        <path d="M12 21l-3.8-6.6" />
        <path d="M3.6 15.5h7.6" />
        <path d="M5.8 5.5l3.8 6.6" />
      </svg>
    ),
    telescope: (
      <svg {...common}>
        <path d="M4 14l9-5 2 3-9 5z" />
        <path d="M13 9l3-2 3 5-3 2" />
        <path d="M10 15l-2 6" />
        <path d="M13 14l4 7" />
        <path d="M11 16h4" />
      </svg>
    ),
    waves: (
      <svg {...common}>
        <path d="M3 7c3 0 3-2 6-2s3 2 6 2 3-2 6-2" />
        <path d="M3 13c3 0 3-2 6-2s3 2 6 2 3-2 6-2" />
        <path d="M3 19c3 0 3-2 6-2s3 2 6 2 3-2 6-2" />
      </svg>
    ),
    orbit: (
      <svg {...common}>
        <circle cx="12" cy="12" r="2" />
        <ellipse cx="12" cy="12" rx="10" ry="4" />
        <ellipse cx="12" cy="12" rx="4" ry="10" transform="rotate(45 12 12)" />
      </svg>
    ),
    book: (
      <svg {...common}>
        <path d="M4 5.5A2.5 2.5 0 016.5 3H20v16H6.5A2.5 2.5 0 004 21.5z" />
        <path d="M4 5.5v16" />
        <path d="M8 7h8" />
      </svg>
    ),
    calendar: (
      <svg {...common}>
        <rect x="3" y="4" width="18" height="17" rx="2" />
        <path d="M8 2v4" />
        <path d="M16 2v4" />
        <path d="M3 10h18" />
      </svg>
    ),
    camera: (
      <svg {...common}>
        <path d="M4 8h4l2-3h4l2 3h4v11H4z" />
        <circle cx="12" cy="13.5" r="3.5" />
      </svg>
    ),
    sparkles: (
      <svg {...common}>
        <path d="M12 3l1.6 5.1L19 10l-5.4 1.9L12 17l-1.6-5.1L5 10l5.4-1.9z" />
        <path d="M19 16l.7 2.3L22 19l-2.3.7L19 22l-.7-2.3L16 19l2.3-.7z" />
      </svg>
    ),
    upload: (
      <svg {...common}>
        <path d="M12 16V4" />
        <path d="M7 9l5-5 5 5" />
        <path d="M4 16v4h16v-4" />
      </svg>
    ),
    trash: (
      <svg {...common}>
        <path d="M4 7h16" />
        <path d="M10 11v6" />
        <path d="M14 11v6" />
        <path d="M6 7l1 14h10l1-14" />
        <path d="M9 7V4h6v3" />
      </svg>
    ),
    play: (
      <svg {...common}>
        <polygon points="8,5 19,12 8,19" />
      </svg>
    ),
    close: (
      <svg {...common}>
        <path d="M18 6L6 18" />
        <path d="M6 6l12 12" />
      </svg>
    ),
  };

  return icons[name] || icons.sparkles;
}

const lessons = [
  {
    icon: "telescope",
    title: "Telescope Types: Refractor, Reflector, and Hybrid",
    desc: "A beginner-friendly guide to the main telescope designs.",
    tag: "Basics",
    image: "https://images.unsplash.com/photo-1502136969935-8d8eef54d77a?auto=format&fit=crop&w=1400&q=80",
    video: "https://www.youtube.com/watch?v=eQ3IP60Fj9c",
    videoId: "eQ3IP60Fj9c",
    content: [
      "A telescope is a light-collecting instrument. The larger the aperture, the more light it can gather, which is especially important for faint deep-sky objects such as nebulae and galaxies.",
      "Refractors use lenses to bend light into focus. They usually give sharp, high-contrast images and require little maintenance. The Seestar S50 belongs to this family because it uses an apochromatic triplet refractor optical design.",
      "Reflectors use mirrors instead of lenses. They can provide larger apertures for lower cost, but often need collimation, meaning the mirrors must be aligned correctly.",
      "Hybrid or catadioptric telescopes combine lenses and mirrors. They are compact and versatile, but can be more complex and expensive.",
    ],
  },
  {
    icon: "aperture",
    title: "Lens Knowledge: Aperture, Focal Length, and f-ratio",
    desc: "Understand the numbers that decide image brightness and field of view.",
    tag: "Optics",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1400&q=80",
    video: "https://www.youtube.com/watch?v=eFyZGw3fo94",
    videoId: "eFyZGw3fo94",
    content: [
      "Aperture is the diameter of the main lens or mirror. A larger aperture collects more photons and can reveal fainter objects.",
      "Focal length controls magnification and image scale. A longer focal length makes objects appear larger but usually gives a narrower field of view.",
      "The f-ratio is focal length divided by aperture. A smaller f-ratio is called a faster optical system because it gathers useful image signal more quickly for photography.",
      "The Seestar S50 has a 50 mm aperture and 250 mm focal length, giving it an f/5 system. This makes it suitable for wide-field nebulae, star clusters, and beginner-friendly deep-sky imaging.",
    ],
  },
  {
    icon: "book",
    title: "How to Use a Telescope: General Workflow",
    desc: "From setup to observation, including key precautions.",
    tag: "Workflow",
    image: "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?auto=format&fit=crop&w=1400&q=80",
    video: "https://www.youtube.com/watch?v=jgH2fxSna0A",
    videoId: "jgH2fxSna0A",
    content: [
      "First, place the telescope on stable ground. A shaky tripod will ruin both visual observation and long-exposure imaging.",
      "Second, level or align the mount. Simple Alt-Az mounts need leveling, while equatorial mounts need polar alignment.",
      "Third, choose a target. Bright objects like the Moon and planets are easier. Nebulae and galaxies usually need longer exposure and stacking.",
      "Fourth, focus carefully. Even a small focus error can make stars look soft or bloated. For imaging, refocus if temperature changes significantly.",
      "Important: never point any telescope at the Sun unless a certified solar filter is installed before the telescope is aimed at the Sun.",
    ],
  },
  {
    icon: "orbit",
    title: "Seestar S50: Smart Telescope Operation",
    desc: "Automatic GoTo, plate solving, tracking, autofocus, and live stacking.",
    tag: "Seestar S50",
    image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=1400&q=80",
    video: "https://www.youtube.com/watch?v=XCotRiUIWtg",
    videoId: "XCotRiUIWtg",
    content: [
      "The Seestar S50 combines telescope, camera, mount, focuser, filter wheel, battery, storage, and controller into one compact device.",
      "Basic setup is simple: charge the device, place it on a stable surface, extend the tripod legs, connect through the Seestar app, and use the in-app level tool. Good leveling improves GoTo accuracy and tracking.",
      "In Stargazing mode, you can select a target from the app database or sky atlas. The telescope slews automatically, plate-solves the sky, focuses, tracks the object, and begins imaging.",
      "The Seestar commonly captures short sub-exposures, such as 10 seconds in Alt-Az mode, and stacks them live. The image improves gradually as more frames are added.",
      "Images and FITS files are saved internally. You can retrieve data through the app or connect the telescope to a computer with USB-C.",
    ],
  },
  {
    icon: "waves",
    title: "Filters: UV/IR Cut, Narrowband, Solar, and Dark Filter",
    desc: "When to use each filter and why filters matter in cities.",
    tag: "Filters",
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1400&q=80",
    video: "https://www.youtube.com/watch?v=j_XPirkAnAM",
    videoId: "j_XPirkAnAM",
    content: [
      "The UV/IR cut filter blocks ultraviolet and infrared light while passing visible light. It is the default choice for broadband targets such as galaxies, star clusters, reflection nebulae, the Moon, and natural-color images.",
      "The dual narrowband filter passes important emission lines such as Hydrogen-alpha and Oxygen-III. This is useful for emission nebulae, especially under light-polluted urban skies.",
      "Narrowband filters block much of the unwanted city light, improving contrast. The trade-off is that less total light reaches the camera, so longer total integration time is usually needed.",
      "The solar filter is a physical safety filter and must be attached before observing the Sun. The dark filter is internal and is used for automatic dark-frame calibration.",
    ],
  },
  {
    icon: "camera",
    title: "Stacking, Calibration, and Practical Imaging Tips",
    desc: "Why many short exposures become a better final image.",
    tag: "Imaging",
    image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&w=1400&q=80",
    video: "https://www.youtube.com/watch?v=r-POAeIgU3E",
    videoId: "r-POAeIgU3E",
    content: [
      "Image stacking combines many short exposures into one cleaner image. Real signal from the target adds consistently, while random noise averages out.",
      "Longer total integration time usually means smoother background and more faint detail. For example, a nebula may look weak after one minute but much clearer after thirty minutes or more.",
      "Calibration frames correct sensor and optical imperfections. Dark frames remove thermal noise and hot pixels, while flat frames correct vignetting and dust shadows.",
      "For Seestar users, dark and flat correction are handled automatically in many workflows. When using external software, avoid applying calibration twice unless you know the files are truly uncalibrated.",
      "In Alt-Az mode, long sessions can show field rotation. EQ mode reduces field rotation and is better for longer integrations, but requires more careful setup.",
    ],
  },
];

const samplePhotos = [
  {
    name: "M 42 — Orion Nebula",
    date: "2026-04-09",
    time: "1 min",
    place: "114°E, 22°N",
    img: "https://images.unsplash.com/photo-1543722530-d2c3201371e7?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "NGC 2903 — Spiral Galaxy",
    date: "2026-04-09",
    time: "10 min",
    place: "114°E, 22°N",
    img: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Urban Star Field",
    date: "2026-04-10",
    time: "8 min",
    place: "City sky",
    img: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&w=900&q=80",
  },
];

type ObservationForm = { name: string; date: string; time: string; place: string };

function normalizeObservation(form: ObservationForm, preview: string, fallbackDate: string) {
  return {
    name: form.name.trim(),
    date: form.date || fallbackDate,
    time: form.time.trim() || "Not specified",
    place: form.place.trim() || "Not specified",
    img: preview,
  };
}

function canSaveObservation(form: ObservationForm, preview: string) {
  return Boolean(preview && form.name.trim());
}

function getYoutubeThumbnail(videoId: string) {
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
}

function runSelfTests() {
  const fallbackDate = "2026-04-22";
  const blank = { name: "", date: "", time: "", place: "" };
  const filled = { name: "  M 42  ", date: "", time: " 10 min ", place: " 114°E, 22°N " };

  console.assert(canSaveObservation(blank, "data:image/png;base64,test") === false, "A target name is required before saving.");
  console.assert(canSaveObservation(filled, "") === false, "An uploaded image is required before saving.");
  console.assert(canSaveObservation(filled, "data:image/png;base64,test") === true, "A valid observation should be saveable.");

  const normalized = normalizeObservation(filled, "data:image/png;base64,test", fallbackDate);
  console.assert(normalized.name === "M 42", "Target names should be trimmed.");
  console.assert(normalized.date === fallbackDate, "Empty dates should fall back to today's date.");
  console.assert(normalized.time === "10 min", "Exposure time should be trimmed.");
  console.assert(normalized.place === "114°E, 22°N", "Location should be trimmed.");
  console.assert(lessons.length === 6, "There should be six core learning modules.");
  console.assert(lessons.every((lesson) => lesson.image && lesson.video && lesson.videoId && lesson.content.length >= 4), "Every lesson should include an image, YouTube link, videoId, and detailed content.");
  console.assert(getYoutubeThumbnail("abc123").includes("abc123"), "YouTube thumbnail helper should include the video ID.");
}

runSelfTests();

export default function App() {
  const [photos, setPhotos] = useState(samplePhotos);
  const [form, setForm] = useState<ObservationForm>({ name: "", date: "", time: "", place: "" });
  const [preview, setPreview] = useState("");
  const [selectedLesson, setSelectedLesson] = useState<(typeof lessons)[number] | null>(null);
  const today = useMemo(() => new Date().toISOString().slice(0, 10), []);
  const canSave = canSaveObservation(form, preview);

  function handleUpload(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setPreview(String(reader.result));
    reader.onerror = () => setPreview("");
    reader.readAsDataURL(file);
  }

  function addPhoto(event: React.FormEvent) {
    event.preventDefault();
    if (!canSave) return;
    setPhotos([normalizeObservation(form, preview, today), ...photos]);
    setForm({ name: "", date: "", time: "", place: "" });
    setPreview("");
  }

  function removePhoto(index: number) {
    setPhotos(photos.filter((_, i) => i !== index));
  }

  return (
    <div className="min-h-screen overflow-hidden bg-[#030416] text-white">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,.25),transparent_25%),radial-gradient(circle_at_80%_10%,rgba(168,85,247,.2),transparent_25%),linear-gradient(to_bottom,#030416,#06081d_45%,#02030d)] opacity-70" />
      <div className="fixed inset-0 bg-[url('https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?auto=format&fit=crop&w=2400&q=80')] bg-cover bg-center opacity-25" />

      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-2xl border border-white/30 bg-white/10 backdrop-blur">
            <Icon name="telescope" />
          </div>
          <span className="text-lg tracking-wide text-white">Sky Observation Journal</span>
        </div>
        <nav className="hidden gap-8 text-sm text-slate-100 md:flex">
          <a href="#learn" className="hover:text-blue-200">Lessons</a>
          <a href="#upload" className="hover:text-blue-200">Add Observation</a>
          <a href="#gallery" className="hover:text-blue-200">Gallery</a>
        </nav>
      </header>

      <main className="relative z-10">
        <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[.9fr_1.1fr] lg:py-28">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-300/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-100 backdrop-blur">
              <Icon name="sparkles" className="h-4 w-4" /> Seestar S50 astronomy learning & photo log
            </p>
            <h1 className="text-5xl font-light leading-tight tracking-tight text-white md:text-7xl">
              Capture the sky.
              <br />
              Keep every night.
            </h1>
            <p className="mt-7 max-w-xl text-xl leading-9 text-slate-100">
              Learn telescope basics, Seestar S50 operation, filters, stacking, and safety precautions. Then upload your own observation photos and build a personal night-sky archive.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#upload">
                <Button className="rounded-2xl bg-blue-500 px-7 py-6 text-base text-white hover:bg-blue-400">Add your photo</Button>
              </a>
              <a href="#learn">
                <Button variant="outline" className="rounded-2xl border-white/35 bg-white/10 px-7 py-6 text-base text-white hover:bg-white/20">Open lessons</Button>
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative">
            <div className="absolute -inset-6 rounded-[3rem] bg-blue-500/20 blur-3xl" />
            <Card className="relative overflow-hidden rounded-[2rem] border-white/15 bg-white/10 shadow-2xl backdrop-blur-xl">
              <CardContent className="p-4">
                <img src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1200&q=80" alt="Night sky" className="h-[520px] w-full rounded-[1.5rem] object-cover" />
                <div className="absolute bottom-8 left-8 right-8 flex flex-wrap items-end justify-between gap-4 rounded-3xl border border-white/15 bg-black/45 p-5 backdrop-blur-xl">
                  <div>
                    <p className="text-sm text-slate-100">Featured object</p>
                    <h2 className="mt-1 text-3xl font-semibold text-white">M 42 Orion Nebula</h2>
                  </div>
                  <div className="text-right text-sm text-white">
                    <p>Seestar S50</p>
                    <p>Live stacked · 1 min</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        <section id="learn" className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="mb-3 flex items-center gap-2 text-blue-100">
                <Icon name="book" className="h-5 w-5" /> Clickable learning modules
              </p>
              <h2 className="text-4xl font-light text-white md:text-5xl">Learn before you observe</h2>
            </div>
            <p className="hidden max-w-md text-slate-100 md:block">
              Click any card to open a detailed lesson with an image and a YouTube tutorial link.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {lessons.map((lesson, index) => (
              <motion.button
                key={lesson.title}
                type="button"
                onClick={() => setSelectedLesson(lesson)}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="group text-left"
              >
                <Card className="h-full overflow-hidden rounded-[2rem] border-white/10 bg-white/[0.08] backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/[0.13]">
                  <CardContent className="p-0">
                    <div className="relative h-56 overflow-hidden">
                      <img src={lesson.image} alt={lesson.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
                      <div className="absolute bottom-4 left-4 flex items-center gap-3 text-white">
                        <div className="grid h-11 w-11 place-items-center rounded-2xl bg-blue-500/30 backdrop-blur">
                          <Icon name={lesson.icon} className="h-5 w-5" />
                        </div>
                        <span className="rounded-full bg-black/40 px-3 py-1 text-xs uppercase tracking-[.2em]">{lesson.tag}</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-medium text-white">{lesson.title}</h3>
                      <p className="mt-3 leading-7 text-slate-100">{lesson.desc}</p>
                      <p className="mt-5 inline-flex items-center gap-2 text-sm text-blue-100">
                        Open lesson <Icon name="play" className="h-4 w-4" />
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.button>
            ))}
          </div>
        </section>

        <section id="upload" className="mx-auto grid max-w-7xl gap-8 px-6 py-20 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <p className="mb-3 flex items-center gap-2 text-blue-100">
              <Icon name="upload" className="h-5 w-5" /> Personal observation
            </p>
            <h2 className="text-4xl font-light text-white md:text-5xl">Add your own observation photo</h2>
            <p className="mt-5 max-w-lg leading-8 text-slate-100">
              Upload a sky image, name the target, and add the date, location, and exposure or stacking time. The card will appear instantly in your gallery.
            </p>
          </div>

          <Card className="rounded-[2rem] border-white/15 bg-white/[0.1] backdrop-blur-xl">
            <CardContent className="p-6">
              <form onSubmit={addPhoto} className="grid gap-4">
                <label className="grid min-h-64 cursor-pointer place-items-center rounded-[1.5rem] border border-dashed border-white/35 bg-black/25 text-center hover:bg-white/10">
                  {preview ? (
                    <img src={preview} alt="Preview" className="h-64 w-full rounded-[1.5rem] object-cover" />
                  ) : (
                    <div className="p-8 text-white">
                      <Icon name="camera" className="mx-auto mb-4 h-10 w-10 text-blue-100" />
                      <p className="text-lg font-medium text-white">Click to upload an observation photo</p>
                      <p className="mt-2 text-sm text-slate-100">JPG, PNG, or exported telescope image</p>
                    </div>
                  )}
                  <input type="file" accept="image/*" onChange={handleUpload} className="hidden" />
                </label>

                <div className="grid gap-4 md:grid-cols-2">
                  <input className="rounded-2xl border border-white/20 bg-black/35 px-4 py-3 text-white placeholder:text-slate-200 outline-none focus:border-blue-200" placeholder="Target name, e.g. M 42" value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} />
                  <input type="date" className="rounded-2xl border border-white/20 bg-black/35 px-4 py-3 text-white placeholder:text-slate-200 outline-none focus:border-blue-200 [color-scheme:dark]" value={form.date} onChange={(event) => setForm({ ...form, date: event.target.value })} />
                  <input className="rounded-2xl border border-white/20 bg-black/35 px-4 py-3 text-white placeholder:text-slate-200 outline-none focus:border-blue-200" placeholder="Exposure / stack time" value={form.time} onChange={(event) => setForm({ ...form, time: event.target.value })} />
                  <input className="rounded-2xl border border-white/20 bg-black/35 px-4 py-3 text-white placeholder:text-slate-200 outline-none focus:border-blue-200" placeholder="Location" value={form.place} onChange={(event) => setForm({ ...form, place: event.target.value })} />
                </div>
                <p className="text-sm leading-6 text-slate-100">
                  Required: image and target name. Optional: date, location, and exposure time. If no date is selected, today will be used automatically.
                </p>
                <Button type="submit" disabled={!canSave} className="rounded-2xl bg-blue-500 py-6 text-base text-white hover:bg-blue-400 disabled:cursor-not-allowed disabled:opacity-50">
                  Save observation
                </Button>
              </form>
            </CardContent>
          </Card>
        </section>

        <section id="gallery" className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="mb-3 flex items-center gap-2 text-blue-100">
                <Icon name="calendar" className="h-5 w-5" /> Observation gallery
              </p>
              <h2 className="text-4xl font-light text-white md:text-5xl">Your night-sky archive</h2>
            </div>
            <p className="text-slate-100">{photos.length} observations</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {photos.map((photo, index) => (
              <motion.div key={`${photo.name}-${index}`} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <Card className="group overflow-hidden rounded-[2rem] border-white/10 bg-white/[0.08] backdrop-blur-xl">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img src={photo.img} alt={photo.name} className="h-80 w-full object-cover transition duration-500 group-hover:scale-105" />
                      <button onClick={() => removePhoto(index)} className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-black/50 text-white backdrop-blur transition hover:bg-red-500/80" aria-label={`Remove ${photo.name}`}>
                        <Icon name="trash" className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-medium text-white">{photo.name}</h3>
                      <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-slate-100">
                        <p>Date: {photo.date}</p>
                        <p>Time: {photo.time}</p>
                        <p className="col-span-2">Location: {photo.place}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      {selectedLesson && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/80 p-4 backdrop-blur-md" onClick={() => setSelectedLesson(null)}>
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-[2rem] border border-white/15 bg-[#07091d] shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative h-72 overflow-hidden rounded-t-[2rem] md:h-96">
              <img src={selectedLesson.image} alt={selectedLesson.title} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07091d] via-black/25 to-transparent" />
              <button onClick={() => setSelectedLesson(null)} className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-black/50 text-white backdrop-blur hover:bg-white/20" aria-label="Close lesson">
                <Icon name="close" className="h-5 w-5" />
              </button>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-blue-500/25 px-4 py-2 text-sm text-blue-100 backdrop-blur">
                  <Icon name={selectedLesson.icon} className="h-4 w-4" /> {selectedLesson.tag}
                </p>
                <h2 className="text-3xl font-light text-white md:text-5xl">{selectedLesson.title}</h2>
              </div>
            </div>

            <div className="grid gap-8 p-6 md:p-8 lg:grid-cols-[1fr_.9fr]">
              <div>
                <h3 className="mb-4 text-2xl font-medium text-white">Detailed explanation</h3>
                <div className="space-y-4 text-base leading-8 text-slate-100">
                  {selectedLesson.content.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-4 flex items-center gap-2 text-2xl font-medium text-white">
                  <Icon name="play" className="h-5 w-5" /> Video tutorial
                </h3>
                <a href={selectedLesson.video} target="_blank" rel="noopener noreferrer" className="block group">
                  <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/15 bg-black">
                    <img src={getYoutubeThumbnail(selectedLesson.videoId)} alt={`${selectedLesson.title} YouTube thumbnail`} className="h-full w-full object-cover" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/45 text-5xl text-white transition group-hover:bg-black/25">
                      ▶
                    </div>
                  </div>
                </a>
                <p className="mt-4 text-sm leading-6 text-slate-100">
                  Click the video card to open the tutorial on YouTube in a new tab. This avoids embedded-player loading problems in restricted preview environments.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      <footer className="relative z-10 border-t border-white/10 px-6 py-10 text-center text-sm text-slate-100">
        Built for small-telescope observers, Seestar S50 learners, and anyone keeping a personal record of the sky.
      </footer>
    </div>
  );
}
