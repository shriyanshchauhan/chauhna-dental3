export default function DentalLogo() {
  return (
    <div className="flex items-center gap-3">
      {/* Logo SVG */}
      <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center shadow-lg relative overflow-hidden">
        {/* Tooth shape */}
        <svg
          viewBox="0 0 100 100"
          className="w-7 h-7 text-white"
          fill="currentColor"
        >
          {/* Main tooth */}
          <path d="M50 10 C55 10, 60 15, 60 25 L60 70 C60 80, 55 85, 50 90 C45 85, 40 80, 40 70 L40 25 C40 15, 45 10, 50 10" />
          {/* Shine/highlight */}
          <circle cx="48" cy="35" r="5" opacity="0.3" />
        </svg>

        {/* Decorative elements */}
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-teal-300 rounded-full opacity-70"></div>
        <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-teal-300 rounded-full opacity-50"></div>
      </div>

      {/* Clinic Name */}
      <div className="hidden sm:block">
        <h1 className="text-lg font-poppins font-bold text-slate-900">
          Chauhan's Dental
        </h1>
        <p className="text-xs font-poppins text-teal-600 font-semibold">
          & Cosmo Laser
        </p>
      </div>
    </div>
  );
}
